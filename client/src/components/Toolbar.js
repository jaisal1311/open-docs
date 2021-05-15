// import React, { Component } from "react";
// import { Quill as ReactQuill } from "quill";

// export class Toolbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//     };
//   }

//   modules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image"],
//       ["clean"],
//     ],
//   };

//   formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//   ];

//   render() {
//     return (
//       <div className="text-editor">
//         <ReactQuill
//           theme="snow"
//           modules={this.modules}
//           formats={this.formats}
//         ></ReactQuill>
//       </div>
//     );
//   }
// }

// export default Toolbar;
