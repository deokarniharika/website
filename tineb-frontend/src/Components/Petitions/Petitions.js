import React from 'react'
import './Petitions.css'
import { useState } from "react";
import PetitionsModal from './PetitionsModal.tsx';

export default function Petitions() {
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
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Save Sanjay Vann
        </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Save Sattal
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Save Me
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Save Me Please
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Please Save Me
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Please Sing me to sleep
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Make me Prime Minister
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Buy me a MLA
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>

        <div>
          <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
          Ban Going out during day in Summers
        </h4>
        </div>
          <PetitionsModal setShow={setShow} show={show}/>
        </div>
        </div>
      )
}

