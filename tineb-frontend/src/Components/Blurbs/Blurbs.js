import * as React from "react";
import "./Blurbs.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Card(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="card">
        <div className="card__body">
          <img src={props.img} alt="hi" width={293} height={174} className="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <Button color="#234A8D" variant="primary" onClick={() => setShow(true)}>
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
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default function Blurbs() {
  return (
    <>
      <span className="hi">
        {" "}
        <p> Blurbs </p>{" "}
      </span>

      <div className="wrapper">
        <Card
          img="img/satoli.jpg"
          title="Save Satoli"
          description="In a residential area of Satoli Village, an illegal borewell has been dug and operationalized for commercial purposes causing immense anxiety and anger among the residents."
        />

        <Card
          img="img/sanjayvan.jpg"
          title="Save Sanjay Van"
          description="A Citizens’ appeal to withdraw the Tender Notification issued by Delhi Development Authority to convert the Sanjay Van area as an Eco-Tourism Hub. Delhi Development Authority is planning to utilize the forest area for recreational purposes."
        />

        <Card
          img="img/behali.jpg"
          title="Save Behali"
          description="We must save Behali RF, home to several threatened species including the Vulnerable Capped Langurs."
        />

        <Card
          img="img/sattal.jpg"
          title="Save Sattal"
          description="Sattal has been engulfed by raging fires. It grieves the dying springs that once cascaded down to form powerful rivers that now run dry."
        />
      </div>
    </>
  );
}