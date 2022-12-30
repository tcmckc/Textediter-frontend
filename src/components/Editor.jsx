import React, { useState } from 'react';
import './../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { io } from "socket.io-client";

import List from './List';
import Save from './Save';
import Name from './Name';
import { useEffect } from 'react';

const socket = io('http://localhost:1337');

function Editor () {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [text, setText] = useState();
  const [newname, setNewname] = useState();
  const [newtext, setNewtext] = useState();

  function setInfo (doc) {
    setId(doc[0]._id);
    setName(doc[0].name);
    setText(doc[0].text);
  };

  useEffect(() => {
    // (async () => {
    //   await setNewtext(text);
    // })();

    // Send to server
    socket.emit('send_text', { message: text });
  },[text]);

  //  Receive from server
  socket.on('received_text', (data) => {
    setText(data.message);
  });

  return (
      <div>
          <List onSelect={setInfo} />
          <Name newname={newname} onChange={setNewname} />
          <ReactQuill theme="snow" value={text} onChange={setText} />
          <Save value={text} id={id} name={name} newname={newname}/>
      </div>
  );
}

export default Editor;
