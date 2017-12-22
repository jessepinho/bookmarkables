import * as React from 'react';
import { Bookmark } from './schema';

interface Props {
  onAdd(bookmark: Bookmark): void;
}

const AddBookmarkForm = ({ onAdd }: Props) => {
  return (
    <form>
      <label>URL: <input type="text" /></label>
      <label>Name: <input type="text" /></label>
      <label>Tags (comma-separated): <input type="text" /></label>
      <input type="submit" value="Save" onClick={() => onAdd()} />
    </form>
  );
};

export default AddBookmarkForm;
