// import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// function DocumentEditor() {
//   const [comments, setComments] = useState([]);

//   // Ladda kommentarer från databasen när dokumentet laddas
// //   useEffect(() => {
// //     fetchComments().then(setComments);
// //   }, []);

//   // Spara en kommentar i databasen
// //   const saveComment = (comment, row) => {
// //     saveCommentToDatabase(comment, row).then(newComment => {
// //       setComments([...comments, newComment]);
// //     });
// //   };

//   return (
//     <div>
//       {documentRows.map((row, index) => (
//         <div key={index}>
//           <span>{row}</span>
//           <button onClick={() => setCommentRow(index)}>Kommentera</button>
//           {commentRow === index && (
//             <CommentPanel onSave={comment => saveComment(comment, index)} />
//           )}
//           {comments.filter(comment => comment.row === index).map(comment => (
//             <CommentPopup key={comment.id} comment={comment} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// function CommentPanel({ onSave }) {
//   const [comment, setComment] = useState('');

//   const handleSave = () => {
//     onSave(comment);
//     setComment('');
//   };

//   return (
//     <div>
//       <textarea value={comment} onChange={e => setComment(e.target.value)} />
//       <button onClick={handleSave}>Spara</button>
//     </div>
//   );
// }

// function CommentPopup({ comment }) {
//   return (
//     <div>
//       <span>Kommentar:</span>
//       <span>{comment.text}</span>
//     </div>
//   );
// }
