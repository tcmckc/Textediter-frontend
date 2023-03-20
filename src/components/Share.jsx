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

		await docsModel.shareDoc(data);
	}

	return (
		<div className="share-container">
			<div>
				<h4>Share document:</h4>
				<input type="email" name="editor" onChange={changeHandler} placeholder="Enter email"/>
			</div>
			<div>
				<button className="btn-small" onClick={share}>SHARE</button>
			</div>
		</div>
	)
}

export default Share;
