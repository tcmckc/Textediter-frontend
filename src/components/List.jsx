import { useState, useEffect } from 'react';
import docsModel from '../models/docs';

function List(props) {
    const [docs, setDocs] = useState([]);
    const [currentDoc, setCurrentDoc] = useState({}); //id

    useEffect(() => {
        (async () => {
            const allDocs = await docsModel.getAllDocs(props.token);
            console.log(allDocs);
            setDocs(allDocs.filter(doc => doc.editor.includes(props.email)));
        })();
    },[currentDoc]); 

    function changeDoc(event) {
        setCurrentDoc(event.target.value);
    }

    const getDocument = (event) => {
        event.preventDefault();
        const selected = docs.filter(e => 
            e._id === currentDoc);

        props.onSelect(selected);
    }

    return (
        <form onSubmit={getDocument}>
            <h4>Saved documents:</h4>

            <select size="5" data-testid="select" value={currentDoc} onChange={changeDoc}>
                <option data-testid="select-option" value="-1" key="0">Title</option>
                {docs.map((doc, index) => 
                    <option data-testid="select-option" value={doc._id} key={index}>{doc.name}</option>)}
            </select>

            <input type='submit' className="btn-small" value='GET' />
            <br />
        </form>
    )
};

export default List;
