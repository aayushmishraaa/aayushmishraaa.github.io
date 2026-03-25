import React from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import data from "../../data/portfolio.json";

const BlogPost = ({ post }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>{"Blog - " + post.title}</title>
        <meta name="description" content={post.preview} />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-[1300px] px-6 py-16 tablet:py-24">
        <img
          className="h-96 w-full border-2 border-border object-cover shadow-brutal-sm"
          src={post.image}
          alt={post.title}
        />
        <h1 className="mt-10 font-display text-[clamp(2rem,4vw,3rem)] font-normal tracking-[-0.02em]">
          {post.title}
        </h1>
        <h2 className="mt-2 text-xl text-text-secondary">
          {post.tagline}
        </h2>
        <div className="prose mt-10 max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default BlogPost;
