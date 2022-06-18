import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from 'react';
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function Blurbs(){
  const [show, setShow] = useState(false);
return(
  <>
    <Card style={{ width: '18rem', margin:"auto", marginTop:"5%" }}>
  <Card.Img variant="top" src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" />
  <Card.Body>
    <Card.Title>Save Satoli</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={() => setShow(true)}>
        Read Article
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', margin:"auto", marginTop:"5%", marginBottom:"10%" }}>
  <Card.Img variant="top" src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" />
  <Card.Body>
    <Card.Title>Save Sanjay Vann</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={() => setShow(true)}>
        Read Article
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
  </Card.Body>
</Card>
</>
);
}
export default Blurbs;


//-------- TEST ------
// export default class Blurbs extends Component {
//   constructor(props){
//     super(props);
//     this.state=show;
//   }
//   render() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" />
//         {/* <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Girl in a jacket" /> */}
//         <Card.Body>
//           <Card.Title>Save Satoli</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the bulk of
//             the card's content.
//           </Card.Text>
//           <Button variant="primary" onClick={() => this.setState(true)}>
//         Custom Width Modal
//       </Button>

//       <Modal
//         // show={show}
//         onHide={() => this.setState(false)}
//         dialogClassName="modal-90w"
//         aria-labelledby="example-custom-modal-styling-title"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-custom-modal-styling-title">
//             Custom Modal Styling
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>
//             Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
//             commodi aspernatur enim, consectetur. Cumque deleniti temporibus
//             ipsam atque a dolores quisquam quisquam adipisci possimus
//             laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
//             accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
//             reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
//             deleniti rem!
//           </p>
//         </Modal.Body>
//       </Modal>
//         </Card.Body>
//       </Card>
//     )
//   }
// }