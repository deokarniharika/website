import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const eventsDirectory = join(process.cwd(), '_events');

export function getEventSlugs() {
  return fs.readdirSync(eventsDirectory);
}

export function getEventBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(eventsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllEvents(fields = []) {
  const slugs = getEventSlugs();
  const events = slugs
    .map((slug) => getEventBySlug(slug, fields))
    // sort events by date in descending order
    .sort((event1, event2) => (event1.date > event2.date ? -1 : 1));
  return events;
}
