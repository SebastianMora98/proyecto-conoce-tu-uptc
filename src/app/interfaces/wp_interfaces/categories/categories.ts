/**
 * @ignore
 */
export interface ICategories {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: Taxonomy;
  parent: number;
  meta: any[];
  _links: Links;
}

/**
 * @ignore
 */
export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  'wp:post_type': About[];
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
export interface Cury {
  name: Name;
  href: Href;
  templated: boolean;
}

export enum Href {
  HTTPSAPIWOrgRel = 'https://api.w.org/{rel}',
}

export enum Name {
  Wp = 'wp',
}

export enum Taxonomy {
  Category = 'category',
}
