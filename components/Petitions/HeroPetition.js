import { useState } from "react";
import PetitionModal from "./PetitionModal";

export default function HeroPetition({ title, coverImage, slug, content }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="my-2.5 mb-5 content-center">
        <h1 className="py-4 shadow bg-accent-2 text-accent-1 text-xl font-bold uppercase text-center">
          Sign the Petitions
        </h1>
        <div className="flex flex-col shadow items-center justify-center bg-white cursor-pointer" onClick={() => setShow(true)}>
          <div className="py-3 mt-2 mb-1 font-bold text-xl capitalize hover:underline cursor-pointer"> {title}</div>
          <div className="mx-9 mb-9">
            <img src={coverImage} alt={title} className="rounded-3xl" />
          </div>
        </div>
        <PetitionModal petition={{ title, coverImage, slug, content }} show={show} setShow={setShow} />
      </div>
    </>
  );
}
