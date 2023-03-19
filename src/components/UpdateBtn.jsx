import docsModel from '../models/docs';

const UpdateBtn = (props) => {
    const update = async () => {

            const data = {
                _id: props.props.id,
                text: props.props.value,
                name: props.props.name
            }

            await docsModel.updateDoc(data);
    };
    return (
        <div>
            <button className="saveButton" onClick={update}>UPDATE</button>
		</div>

    );
}

export default UpdateBtn;
