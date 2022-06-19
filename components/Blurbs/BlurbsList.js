import BlurbCard from "./BlurbCard";

export default function BlurbsList({ blurbs: blurbs }) {
  return (
    <section>
      {blurbs.map((blurb) => (
        <BlurbCard
          key={blurb.slug}
          title={blurb.title}
          slug={blurb.slug}
          coverImage={blurb.coverImage}
          excerpt={blurb.excerpt}
        />
      ))}
    </section >
  );
};
