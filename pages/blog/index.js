import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import data from "../../data/portfolio.json";
import { ISOToDate } from "../../utils";
import { getAllPosts } from "../../utils/api";

const Blog = ({ posts }) => {
  const showBlog = useRef(data.showBlog);
  const router = useRouter();

  if (!showBlog.current && typeof window !== "undefined") {
    router.push("/");
    return null;
  }

  if (!showBlog.current) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Blog</title>
      </Head>

      <Navbar />

      <main className="mx-auto max-w-[1300px] px-6 py-16 tablet:py-24">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
          Blog
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal tracking-[-0.02em]">
          Blog.
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {posts &&
            posts.map((post) => (
              <div
                className="brutal-shift cursor-pointer border-2 border-border bg-card p-5 shadow-brutal-sm"
                key={post.slug}
                onClick={() => Router.push(`/blog/${post.slug}`)}
              >
                <img
                  className="h-48 w-full border-2 border-border object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <h2 className="mt-5 text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-text-secondary">
                  {post.preview}
                </p>
                <span className="mt-3 block text-xs text-text-muted">
                  {ISOToDate(post.date)}
                </span>
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Blog;
