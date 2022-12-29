import docsModel from '../models/docs';

const SaveBtn = (props) => {
    const save = async() => {
        const data = {
            name: props.newname,
            text: props.value
        };
        
        console.log("Save as new", data);

        await docsModel.saveDoc(data);
    };

    return (
        <div>
			<button className="saveButton" onClick={save}>Save as new</button>
		</div>

    );
}

export default SaveBtn;

// const SaveBtn = (props) => {
//     const save = async() => {
//         const data = {
//             name: props.newname,
//             text: props.value
//         }
//         //console.log("Save as new", data);

//         await docsModel.saveDoc(data);
//         props.onClick(data);
//     };

//     return (
//         <div>
// 			<button className="saveButton" onClick={save}>Save as new</button>
// 		</div>

//     );
// }