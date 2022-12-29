import docsModel from '../models/docs';

const UpdateBtn = (props) => {
    const update = async () => {

            const data = {
                _id: props.id,
                text: props.value,
                name: props.name
            }
            console.log("Update", data);

            await docsModel.updateDoc(data);
    };
    return (
        <div>
            <button className="saveButton" onClick={update}>Update</button>
		</div>

    );
}

export default UpdateBtn;
