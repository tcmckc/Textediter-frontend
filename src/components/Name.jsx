import { useState } from 'react';

function Name(props) {
    const [newDoc, setNewDoc] = useState();

    function changeName(event) {
        console.log("changeName!")
        setNewDoc(event.target.value);
        props.onChange(event.target.value);
        console.log("newDoc", newDoc);
    }

    return (
        <form>
            <label>Document name:</label>
            <input value={newDoc} onChange={changeName}/>
        </form>

    );
}

export default Name;