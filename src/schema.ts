export interface Bookmark {
  name: string;
  url: string;
  tags: string[];
}

export interface Registry {
  version: 1;
  bookmarks: Bookmark[];
}
