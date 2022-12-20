import React, { useState } from 'react';
import './../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import List from './List';
import Save from './Save';
import Name from './Name';

function Editor () {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [text, setText] = useState();
  const [newname, setNewname] = useState();

  function setInfo (doc) {
    setId(doc[0]._id);
    setName(doc[0].name);
    setText(doc[0].text);
  };

    return (
        <div>
            <List onSelect={setInfo} />
            <Name newname={newname} onChange={setNewname} />
            <ReactQuill theme="snow" value={text} onChange={setText}/>
            <Save value={text} id={id} name={name} newname={newname}/>
        </div>
    )
}

export default Editor;
