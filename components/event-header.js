import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import EventTitle from '../components/event-title';

export default function EventHeader({ title, coverImage, date, author }) {
  return (
    <>
      <EventTitle>{title}</EventTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={1240} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
