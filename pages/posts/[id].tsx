import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import utilStyles from "../../styles/utils.module.css";

import Layout from "../../components/layout/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from "../../lib/posts";

interface PostPropTypes {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

export default function Post({ postData }: PostPropTypes) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return { props: { postData } };
};
