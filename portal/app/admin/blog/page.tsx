"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import { Plus, Save, Trash2, Eye, Edit3, ArrowLeft } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  content_md: string;
  published: boolean;
  created_at: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setPosts(data);
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const generateSlug = (t: string) =>
    t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const startNew = () => {
    setEditing(null);
    setTitle("");
    setSlug("");
    setContent("");
    setPublished(false);
    setPreview(false);
    setError(null);
  };

  const startEdit = (post: Post) => {
    setEditing(post);
    setTitle(post.title);
    setSlug(post.slug);
    setContent(post.content_md);
    setPublished(post.published);
    setPreview(false);
    setError(null);
  };

  const handleSave = async () => {
    if (!title || !slug || !content) {
      setError("Title, slug, and content are required.");
      return;
    }
    setSaving(true);
    setError(null);

    const supabase = createClient();
    const payload = {
      title,
      slug,
      content_md: content,
      published,
      updated_at: new Date().toISOString(),
    };

    if (editing) {
      const { error: err } = await supabase
        .from("posts")
        .update(payload)
        .eq("id", editing.id);
      if (err) setError(err.message);
    } else {
      const { error: err } = await supabase.from("posts").insert(payload);
      if (err) setError(err.message);
    }

    setSaving(false);
    await loadPosts();
    startNew();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const supabase = createClient();
    await supabase.from("posts").delete().eq("id", id);
    await loadPosts();
  };

  const isEditorOpen = title !== "" || content !== "" || editing !== null;

  return (
    <div className="min-h-[calc(100vh-72px)] py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="section-label">Admin</span>
            <h1 className="text-2xl md:text-4xl text-marble-white">Blog Manager</h1>
          </div>
          <button onClick={startNew} className="btn-gold">
            <Plus size={16} />
            New Post
          </button>
        </div>

        {/* Editor */}
        {isEditorOpen && (
          <div className="glass p-6 md:p-8 mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg text-marble-white">
                {editing ? "Edit Post" : "New Post"}
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPreview(!preview)}
                  className="btn-outline !py-2 !px-3 !text-xs"
                >
                  {preview ? <Edit3 size={14} /> : <Eye size={14} />}
                  {preview ? "Edit" : "Preview"}
                </button>
                <button onClick={startNew} className="btn-outline !py-2 !px-3 !text-xs">
                  <ArrowLeft size={14} />
                  Cancel
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-300 mb-4">
                {error}
              </div>
            )}

            {preview ? (
              <div className="prose-custom bg-black/20 rounded-lg p-6 min-h-[300px]">
                <h1>{title}</h1>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-marble-white/60 uppercase tracking-wider mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        if (!editing) setSlug(generateSlug(e.target.value));
                      }}
                      className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Post title"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-marble-white/60 uppercase tracking-wider mb-2">
                      Slug
                    </label>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="post-slug"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-marble-white/60 uppercase tracking-wider mb-2">
                    Content (Markdown)
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={15}
                    className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors font-mono text-sm leading-relaxed resize-y"
                    placeholder="Write your post in Markdown..."
                  />
                </div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={published}
                      onChange={(e) => setPublished(e.target.checked)}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-marble-white/70">Published</span>
                  </label>
                  <button onClick={handleSave} disabled={saving} className="btn-gold">
                    <Save size={16} />
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Posts list */}
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glass p-4 md:p-6 flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-marble-white truncate">{post.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      post.published
                        ? "bg-forest-green/20 text-forest-green"
                        : "bg-marble-white/10 text-marble-white/50"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </div>
                <p className="text-xs text-marble-white/40">
                  /{post.slug} &middot;{" "}
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => startEdit(post)}
                  className="p-2 text-marble-white/50 hover:text-gold transition-colors"
                >
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 text-marble-white/50 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="glass p-8 text-center text-marble-white/50">
              No posts yet. Create your first one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
