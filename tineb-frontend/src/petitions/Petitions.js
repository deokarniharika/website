import React from 'react'
import './Petitions.css'
import { useState } from 'react';
import Modal from "react-bootstrap/Modal";

function Petitions() {
    const [show, setShow] = useState(false);
    return (
      <div className='body'>
        <div className="heading">
            <h4>SIGN THE PETITIONS</h4>
        </div>
        
        <div className='head'>
            <h3> Latest Petitions</h3>
        </div>
        <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Ban Single Use Plastic
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Save Sanjay Vann
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Save Sattal
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Save Me
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Save Me Please
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Please Save Me
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Please Sing me to sleep
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Make me Prime Minister
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Buy me a MLA
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>

      <div>
        <div className='petition'>
        <i class="bi bi-arrow-up-right"></i>
        <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
        Ban Going out during day in Summers
      </h4>
      </div>
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
        <div className='petitionData'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <img src="https://assets.weforum.org/article/image/responsive_big_webp_SXMiUsf5AnBvmylkmZHo1gZJesNKaX7WA0sMGmhyAvY.webp" alt="Ban Single Use Plastic" width={100} height={100}/>
          <button className='btn btn-success' style={ {marginTop:'2%'}}>Sign the petition</button>
          </div>
        </Modal.Body>
      </Modal>
      </div>
      </div>
    )
  }
  export default Petitions;

