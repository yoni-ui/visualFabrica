export type StoryCategoryStyle = "economy" | "digital" | "tech";

export type StoryStatus = "published" | "draft";

export type NewsStory = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Plain text; paragraphs separated by blank lines */
  body: string;
  author: string;
  category: string;
  categoryStyle: StoryCategoryStyle;
  status: StoryStatus;
  thumb: string;
  metaDescription: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
};

export type StoryListItem = Pick<
  NewsStory,
  | "id"
  | "slug"
  | "title"
  | "excerpt"
  | "author"
  | "category"
  | "categoryStyle"
  | "status"
  | "thumb"
  | "publishedAt"
>;
