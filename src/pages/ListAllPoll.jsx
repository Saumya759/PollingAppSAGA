// import React from "react";
// import { Container, Card, Button, ListGroup, Badge } from "react-bootstrap";

// const ListAllPolls = () => {

//   componentDidMount=() =>{
//     props.listAllPolls();
//   }
//   handlePollClick = id => {
//    props.history.push(`/list-all-polls/${id}`);
//   };

//   deletePollClick=(id)=>{
//     props.deletePoll(id);
//   }

//   componentDidUpdate=(props)=>{
//     if(isEqual(props,props)){
//       props.listAllPolls();
//     }
//   }

//     return (
//       <div>
//         {props.polls &&
//           props.polls.map((val, index) => {
//             return (
//               <Container>
//                 <Card>
//                   <Card.Header>
//                     <div className='title'>{val.title}</div>
//                     <Button
//                       variant="primary"
//                       onClick={() => handlePollClick(val._id)}
//                     >
//                       View Poll
//                     </Button>
//                     <Button
//                       variant="primary"
//                       onClick={() => deletePollClick(val._id)}
//                     >
//                       Delete Poll
//                     </Button>
//                   </Card.Header>
//                 </Card>
//                 <ListGroup>
//                   {val.options.map((option, i) => {
//                     return (
//                       <ListGroup.Item>
//                         <span>{option.option}</span>
//                         <Button variant="success">
//                           Votes <Badge variant="light">{option.vote}</Badge>
//                           <span className="sr-only">unread messages</span>
//                         </Button>
//                       </ListGroup.Item>
//                     );
//                   })}
//                 </ListGroup>
//               </Container>
//             );
//           })}
//       </div>
//     );
// }


// export default ListAllPolls;