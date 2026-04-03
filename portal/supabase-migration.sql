-- Blog posts table for admin mini-articles
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS public.posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content_md TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "Public can read published posts"
  ON public.posts FOR SELECT
  USING (published = true);

-- Authenticated users can read all posts (for admin to see drafts)
-- Admin check is done at the application level via middleware
CREATE POLICY "Authenticated users can read all posts"
  ON public.posts FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can insert posts (admin check at app level)
CREATE POLICY "Authenticated users can insert posts"
  ON public.posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update posts (admin check at app level)
CREATE POLICY "Authenticated users can update posts"
  ON public.posts FOR UPDATE
  TO authenticated
  USING (true);

-- Authenticated users can delete posts (admin check at app level)
CREATE POLICY "Authenticated users can delete posts"
  ON public.posts FOR DELETE
  TO authenticated
  USING (true);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts (slug);

-- Index for listing published posts
CREATE INDEX IF NOT EXISTS idx_posts_published ON public.posts (published, created_at DESC);
