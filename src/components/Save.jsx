import SaveBtn from './SaveBtn';
import UpdateBtn from './UpdateBtn';

function SaveUpdate(props) {
    console.log("props in save:", props); //ok
    return (
        <div className='save-container'>
            <SaveBtn props={props} />
            <UpdateBtn props={props} />
        </div>
    );

};

export default SaveUpdate;