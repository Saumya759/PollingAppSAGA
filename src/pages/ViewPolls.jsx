// import React from "react";
// import {
//   Form,
//   Container,
//   Card,
//   Button,
//   Row,
//   ButtonToolbar,
// } from "react-bootstrap";

// const ViewPoll = () => {
//   componentDidMount = () => {
//     props.viewPoll(props.match.params.id);
//   };

//   state = {
//     add: false,
//     update: false,
//     new_option: "",
//     new_title: "",
//     text: "",
//   };
//   addTextBox = () => {
//     setState({
//       add: true,
//     });
//   };

//   handleChange = (e) => {
//     setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   save = () => {
//     props.addOption(state.new_option, props.match.params.id);
//     setState({
//       add: false,
//     });
//   };

//   // delete = (val) => {
//   //   props.deleteOption(val, props.match.params.id);
//   // };

//   updateTextBox = () => {
//     setState({
//       update: true,
//       new_title: props.poll.title,
//     });
//   };

//   cancel = () => {
//     setState({
//       new_title: state.text,
//       update: false,
//     });
//   };

//   update = () => {
//     props.updateTitle(state.new_title, props.match.params.id);
//     setState({
//       update: false,
//     });
//   };

//   return (
//     <div>
//       <Container>
//         <Card>
//           <Card.Header>
//             {state.update ? (
//               <Form.Group controlId="new_title">
//                 <Row>
//                   <Form.Control
//                     type="text"
//                     placeholder="Title"
//                     value={state.new_title}
//                     name="new_title"
//                     onChange={(e) => handleChange(e)}
//                   />
//                   <ButtonToolbar>
//                     <Button variant="primary" type="button" onClick={update}>
//                       Update
//                     </Button>
//                     <Button variant="danger" type="button" onClick={cancel}>
//                       x
//                     </Button>
//                   </ButtonToolbar>
//                 </Row>
//               </Form.Group>
//             ) : (
//               <Row>
//                 <div className="title">{props.poll && props.poll.title}</div>
//                 <Button variant="primary" type="button" onClick={updateTextBox}>
//                   Update Poll Title
//                 </Button>
//               </Row>
//             )}
//             <Button variant="primary" type="button" onClick={addTextBox}>
//               Add New Option
//             </Button>
//           </Card.Header>
//         </Card>
//         <div className="opt">
//           {props.poll &&
//             props.poll.options &&
//             props.poll.options.map((val, index) => {
//               return (
//                 <Form.Group>
//                   <Row className="optionList">
//                     <Form.Check
//                       type="radio"
//                       checked={val.vote === 1 ? true : false}
//                       onClick={(e) =>
//                         props.doVote(e.target.id, props.match.params.id)
//                       }
//                       label={val.option}
//                       name="formHorizontalRadios"
//                       id={val.option}
//                     />
//                     <Button
//                       variant="primary"
//                       type="button"
//                       onClick={() => delete val.option}
//                     >
//                       Delete
//                     </Button>
//                   </Row>
//                 </Form.Group>
//               );
//             })}
//           {state.add && (
//             <Form className="option_4">
//               <Form.Group controlId="option4">
//                 <Form.Label>New Option</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="New Option"
//                   value={state.new_option}
//                   name="new_option"
//                   onChange={(e) => handleChange(e)}
//                 />
//                 <Button variant="primary" type="button" onClick={save}>
//                   Save
//                 </Button>
//               </Form.Group>
//             </Form>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ViewPoll;
