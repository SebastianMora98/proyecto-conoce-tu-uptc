/**
 * @ignore
 */
export interface IMedia {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: Caption;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Caption;
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  permalink_template: string;
  generated_slug: string;
  description: Caption;
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  post: null;
  source_url: string;
  missing_image_sizes: any[];
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
  'wp:action-unfiltered-html': About[];
  'wp:action-assign-author': About[];
  curies: Cury[];
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
export interface Author {
  embeddable: boolean;
  href: string;
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
export interface Caption {
  raw: string;
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
