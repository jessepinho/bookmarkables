import * as React from 'react';
import { Registry } from './schema';

interface Props {
  query: string;
  registry: Registry;
}

const SearchResults = ({ query, registry }: Props) => {
  const lowerCaseQuery = query.toLowerCase();

  const bookmarks = registry.bookmarks.filter(bookmark => {
    if (bookmark.name.toLowerCase().includes(lowerCaseQuery)) {
      return true;
    }

    for (let i = 0; i < bookmark.tags.length; i++) {
      if (bookmark.tags[i].toLowerCase().includes(lowerCaseQuery)) {
        return true;
      }
    }

    return false;
  });

  return (
    <ul>
      {bookmarks.map(bookmark => <li key={bookmark.url}>{bookmark.name}</li>)}
    </ul>
  );
};

export default SearchResults;
