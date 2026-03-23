export type StoryCategoryStyle = "economy" | "digital" | "tech";

export type StoryStatus = "published" | "draft";

export type NewsStory = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Plain text; paragraphs separated by blank lines (\n\n). */
  body: string;
  author: string;
  category: string;
  categoryStyle: StoryCategoryStyle;
  status: StoryStatus;
  thumb: string;
  metaDescription: string;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};
