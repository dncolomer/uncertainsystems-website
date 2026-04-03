import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Calendar, ArrowRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  content_md: string;
  published: boolean;
  created_at: string;
}

export const revalidate = 60; // revalidate every 60s

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-[calc(100vh-72px)] py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Updates</span>
          <h1 className="text-3xl md:text-5xl text-marble-white mb-4">Blog</h1>
          <p className="text-lg text-marble-white/60 max-w-xl mx-auto">
            Insights and updates on educational accelerationism.
          </p>
        </div>

        {!posts || posts.length === 0 ? (
          <div className="glass p-12 text-center">
            <p className="text-marble-white/60 text-lg">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {(posts as Post[]).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="glass p-6 md:p-8 block group hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl text-marble-white mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-marble-white/60 leading-relaxed line-clamp-2">
                      {post.content_md.slice(0, 200).replace(/[#*_`]/g, "")}...
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-marble-white/40">
                      <Calendar size={12} />
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
