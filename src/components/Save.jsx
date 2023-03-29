import SaveBtn from './SaveBtn';
import UpdateBtn from './UpdateBtn';
import PdfBtn from './PdfBtn';

function SaveUpdate(props) {
    return (
        <div className='save-container'>
            <SaveBtn props={props} />
            <UpdateBtn props={props} />
            <PdfBtn props={props} />
        </div>
    );
};

export default SaveUpdate;
