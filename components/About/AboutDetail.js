import Link from "next/link";
import markdownStyles from "../markdown-styles.module.css";

export default function AboutDetail({ content, preview }) {
  return (
    <>
      <div className="min-h-screen w-3/4 mx-auto">
        <h1 className="mt-5 mb-6 text-3xl text-accent-3 text-center font-bold">
          About TINEB
        </h1>
        <div className={markdownStyles['markdown'] + ' ' + markdownStyles['about']} dangerouslySetInnerHTML={{ __html: content }} />
        <div className="text-center text-accent-3 mt-5 text-sm mb-20 pb-5">
          <Link href='/'>
            <a className="text-accent-3">Go Back</a>
          </Link>
        </div>
      </div>
    </>
  );
};
