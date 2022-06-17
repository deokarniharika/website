import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

interface IPetitionsModalProps{
    show: boolean;
    setShow(value: boolean);
}


export default function PetitionsModal(props: IPetitionsModalProps) {

    function onHideHandler(value: boolean){
        props.setShow(value);
    }
        return (
            <Modal
                show={props.show}
                onHide={() => onHideHandler(false)}
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
        );
}