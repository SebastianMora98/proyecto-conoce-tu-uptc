/**
 * @ignore
 */
export interface PostInterface {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: any[];
  _links: _Links;
  _embedded: Embedded;
}
/**
 * @ignore
 */
export interface Embedded {
  author: EmbeddedAuthor[];
  ['wp:featuredmedia']: WpFeaturedmedia[];
  ['wp:term']: Array<EmbeddedWpTerm[]>;
}
/**
 * @ignore
 */
export interface CreatePost {
  title: string;
  content: string;
  status: string;
  date: Date;
  categorias: number[];
  file: File;
  extracto: string;
}
/**
 * @ignore
 */
export interface Meta {
  _bbp_topic_count: number;
  _bbp_reply_count: number;
  _bbp_total_topic_count: number;
  _bbp_total_reply_count: number;
  _bbp_voice_count: number;
  _bbp_anonymous_reply_count: number;
  _bbp_topic_count_hidden: number;
  _bbp_reply_count_hidden: number;
  _bbp_forum_subforum_count: number;
}
/**
 * @ignore
 */
export interface EmbeddedAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: { [key: string]: string };
  _links: AuthorLinks;
}
/**
 * @ignore
 */
export interface AuthorLinks {
  self: About[];
  collection: About[];
}
/**
 * @ignore
 */
export interface About {
  href: string;
}
/**
 * @ignore
 */
export interface WpFeaturedmedia {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: GUID;
  author: number;
  caption: GUID;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: WpFeaturedmediaLinks;
}
/**
 * @ignore
 */
export interface WpFeaturedmediaLinks {
  self: About[];
  collection: About[];
  about: About[];
  author: ReplyElement[];
  replies: ReplyElement[];
}
/**
 * @ignore
 */
export interface ReplyElement {
  embeddable: boolean;
  href: string;
}
/**
 * @ignore
 */
export interface GUID {
  rendered: string;
}
/**
 * @ignore
 */
export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  sizes: Sizes;
  image_meta: ImageMeta;
}
/**
 * @ignore
 */
export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}
/**
 * @ignore
 */
export interface Sizes {
  medium: Full;
  thumbnail: Full;
  full: Full;
}
/**
 * @ignore
 */
export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}
/**
 * @ignore
 */
export interface EmbeddedWpTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: WpTermLinks;
}
/**
 * @ignore
 */
export interface WpTermLinks {
  self: About[];
  collection: About[];
  about: About[];
  'wp:post_type': About[];
  curies: Cury[];
}
/**
 * @ignore
 */
export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
/**
 * @ignore
 */
export interface _Links {
  self: About[];
  collection: About[];
  about: About[];
  author: ReplyElement[];
  replies: ReplyElement[];
  'version-history': VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'wp:featuredmedia': ReplyElement[];
  'wp:attachment': About[];
  'wp:term': LinksWpTerm[];
  curies: Cury[];
}
/**
 * @ignore
 */
export interface PredecessorVersion {
  id: number;
  href: string;
}
/**
 * @ignore
 */
export interface VersionHistory {
  count: number;
  href: string;
}
/**
 * @ignore
 */
export interface LinksWpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}
/**
 * @ignore
 */
export interface Content {
  rendered: string;
  protected: boolean;
}

// Create Post Response
/**
 * @ignore
 */
export interface CreatePostResponse {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  password: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  permalink_template: string;
  generated_slug: string;
  _links: Links;
}
/**
 * @ignore
 */
export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
  'version-history': VersionHistory[];
  'wp:featuredmedia': Author[];
  'wp:attachment': About[];
  'wp:term': WpTerm[];
  'wp:action-publish': About[];
  'wp:action-unfiltered-html': About[];
  'wp:action-sticky': About[];
  'wp:action-assign-author': About[];
  'wp:action-create-categories': About[];
  'wp:action-assign-categories': About[];
  'wp:action-create-tags': About[];
  'wp:action-assign-tags': About[];
  curies: Cury[];
}
/**
 * @ignore
 */
export interface Author {
  embeddable: boolean;
  href: string;
}
/**
 * @ignore
 */
export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}
