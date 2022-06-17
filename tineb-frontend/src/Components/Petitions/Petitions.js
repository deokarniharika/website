import React from 'react'
import './Petitions.css'
import { useState } from "react";
import PetitionsModal from './PetitionsModal.tsx';
import { Card, CardHeader, CardMedia} from "@material-ui/core";
import styled from '@emotion/styled';

const StyledPetitionHeaderDiv = styled('div')`
  width:235px;
  font-family:Domine;
  text-align:start;
  color:#58451E;
  font-weight:700;
  padding-left:2rem;
  padding-top:1rem;
  font-size:20px;
`;

const StyledCardMediaHeaderDiv = styled('div')`
  font-family:Domine;
  text-align:center;
  color:#234A8D;
  font-weight:700;
  padding-bottom:0.5rem;
  padding-top:0.5rem;
  font-size:20px;
`;

export default function Petitions() {
  const [show, setShow] = useState(false);

  return (
    <div className='body'>
      <Card>
        <CardHeader
          title="SIGN THE PETITIONS"
          style={{ color: '#FFA800', backgroundColor: '#234A8D', textAlign:'center' }}
        />
        <StyledCardMediaHeaderDiv>
          <i class="bi bi-arrow-up-right" />
          <span style={{paddingLeft:'0.5rem'}}>
            Ban Single Use Plastic
          </span>
         
        </StyledCardMediaHeaderDiv>
        <CardMedia
          component="img"
          height="300"
          image={process.env.PUBLIC_URL + "/img/Ban_Single_Use_Plastic.jpg"}
          style={{ objectFit: 'inherit', paddingLeft: '2rem', paddingRight:'2rem', paddingBottom:'2rem' ,borderRadius:'3rem'}}
        />
      </Card>

      <StyledPetitionHeaderDiv>
        Latest Petitions
      </StyledPetitionHeaderDiv>
      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Ban Single Use Plastic
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Save Sanjay Vann
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Save Sattal
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Save Me
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Save Me Please
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Please Save Me
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Please Sing me to sleep
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Make me Prime Minister
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Buy me a MLA
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>

      <div>
        <div className='petition'>
          <i class="bi bi-arrow-up-right"></i>
          <h4 className="petitionHeading" variant="primary" onClick={() => setShow(true)}>
            Ban Going out during day in Summers
          </h4>
        </div>
        <PetitionsModal setShow={setShow} show={show} />
      </div>
    </div>
  )
}

