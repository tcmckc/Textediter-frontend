import { useState, useEffect } from 'react';
import docsModel from '../models/docs';


function List(props) {
    const [docs, setDocs] = useState([]);
    const [currentDoc, setCurrentDoc] = useState({}); //id

    useEffect(() => {
        (async () => {
            const allDocs = await docsModel.getAllDocs();
            setDocs(allDocs);
        })();
    },[currentDoc]);

    function changeDoc(event) {
        console.log("changeDoc");
        setCurrentDoc(event.target.value);
    }

    const getDocument = (event) => {
        event.preventDefault(); //cancel reload
        const selected = docs.filter(e => 
            e._id === currentDoc);

        props.onSelect(selected);
    }

    console.log("docs", docs);
    console.log("currentDoc", currentDoc);

    return (
        <form onSubmit={getDocument}>
            <label>Select document:</label>

            <select value={currentDoc} onChange={changeDoc}>
                <option value="-1" key="0">Document list</option>
                {docs.map((doc, index) => 
                    <option value={doc._id} key={index}>{doc.name}</option>)}
            </select>

            <input type='submit' value='Get document' />
            <br />
        </form>
    )
};

export default List;
