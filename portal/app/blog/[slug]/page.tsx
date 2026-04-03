import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  return (
    <div className="min-h-[calc(100vh-72px)] py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-marble-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article>
          <header className="mb-10 pb-8 border-b border-gold/20">
            <h1 className="text-3xl md:text-4xl text-marble-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-marble-white/40">
              <Calendar size={14} />
              {new Date(post.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </header>

          <div className="prose-custom">
            <ReactMarkdown>{post.content_md}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
