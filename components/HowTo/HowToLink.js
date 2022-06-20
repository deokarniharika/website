import Link from "next/link";

const HowToLink = ({ howTo }) => {
  return (
    <div className="flex flex-row my-1 cursor-pointer">
      <i className="bi bi-arrow-right mr-2"></i>
      <Link href={`/how-to/${howTo.slug}`}>
        <span className='hover:underline font-bold'>
          {howTo.title}
        </span>
      </Link>
    </div>
  );
};

export default HowToLink;
