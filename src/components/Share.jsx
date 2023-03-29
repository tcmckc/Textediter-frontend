import { useState } from "react";
import docsModel from "../models/docs";

function Share(props) {
	const [editor, setEditor] = useState({});

	function changeHandler(event) {
		let newObject = {};
		newObject[event.target.name] = event.target.value;
		setEditor({...editor, ...newObject});
	}

	async function share() {
		const data = {
			_id: props.id,
			editor: editor
		}
		const addedEditor = document.getElementById("addedEditor").value;

		await docsModel.shareDoc(data);
		await docsModel.sendInv(props.token, addedEditor);
	}

	return (
		<div className="share-container">
			<div>
				<h4>Invite and share document:</h4>
				<input id="addedEditor" type="email" name="editor" onChange={changeHandler} placeholder="Enter email"/>
			</div>
			<div>
				<button className="btn-small" onClick={share}>SEND</button>
			</div>
		</div>
	)
}

export default Share;
