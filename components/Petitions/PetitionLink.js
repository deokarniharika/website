import { useState } from 'react';
import PetitionModal from './PetitionModal';

export default function PetitionLink(petition) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h5 className="text-md mb-3">
        <i className="bi bi-arrow-right mr-2"></i> <span className="font-bold capitalize hover:underline" type="button" onClick={() => setShow(true)} data-modal-toggle={"modal-" + [petition.slug]}> {petition.title}</span>
      </h5>
      <PetitionModal petition={petition} show={show} setShow={setShow} />
    </div >
  );
}
