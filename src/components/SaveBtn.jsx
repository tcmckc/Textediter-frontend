import docsModel from '../models/docs';

const SaveBtn = (props) => {
    const save = async() => {
        const data = {
            name: props.props.newname,
            text: props.props.value,
            editor: props.props.email
        };
        
        console.log("Save as new", data);

        await docsModel.saveDoc(data);
    };

    return (
        <div>
			<button className="saveButton" onClick={save}>SAVE AS NEW</button>
		</div>

    );
}

export default SaveBtn;
