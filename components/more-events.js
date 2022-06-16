import EventPreview from '../components/event-preview';

export default function MoreStories({ events: events }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {events.map((event) => (
          <EventPreview
            key={event.slug}
            title={event.title}
            coverImage={event.coverImage}
            date={event.date}
            author={event.author}
            slug={event.slug}
            excerpt={event.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
