import { format, parse, parseISO } from 'date-fns';

export default function DateFormatter({ dateString }) {
  const date = parse(dateString, 'dd-MM-yyyy', new Date(), {
    locale: 'en-IN',
    addSuffix: true
  });
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
}
