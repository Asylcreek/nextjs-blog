import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import utilStyles from "../styles/utils.module.css";

import Layout, { siteTitle } from "../components/layout/layout";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

interface HomePropTypes {
  allPostsData: { id: string; date: string; title: string }[];
}

export default function Home({ allPostsData }: HomePropTypes) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am Boro Omokugbo Joseph, a fullstack developer with love for
          movies and music
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />

              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: { allPostsData },
  };
};
