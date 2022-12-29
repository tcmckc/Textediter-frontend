import SaveBtn from './SaveBtn';
import UpdateBtn from './UpdateBtn';

function SaveUpdate(props) {

    // const save = async() => {
    //     const data = {
    //         name: props.newname,
    //         text: props.value
    //     }
    //     console.log("Save as new", data);

    //     await docsModel.saveDoc(data);
    // };

    // const update = async () => {

    //     const data = {
    //         _id: props.id,
    //         text: props.value,
    //         name: props.name
    //     }
    //     console.log("Update", data);

    //     await docsModel.updateDoc(data);
    // };

    return (
		// <div>
		// 	<button className="saveButton" onClick={save}>Save as new</button>
		// 	<button className="saveButton" data-testid="update-button" onClick={update}>Update</button>
		// </div>
        <div>
            <SaveBtn props={props} />
            <UpdateBtn props={props} />
        </div>
    );

};

export default SaveUpdate;