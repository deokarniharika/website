import Link from 'next/link';

export default function EventCard(event) {
  return (
    <a href={"/events/" + event.slug}>
      <div className="mx-auto w-full max-w-sm bg-accent-2 rounded-lg shadow mb-8">
        <h5 className="p-5 text-center text-2xl font-bold tracking-tight text-accent-1 dark:text-white">{event.title}</h5>
        <img className=" w-full" src={event.coverImage} alt="" />
        <div className="p-5 text-accent-2 rounded-b-lg font-bold lowercase text-center text-sm bg-accent-4">
          {event.excerpt}
        </div>
      </div>
    </a>
  );
}
