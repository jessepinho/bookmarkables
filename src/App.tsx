import * as React from 'react';

import AddBookmarkForm from './AddBookmarkForm';
import { Registry, Bookmark } from './schema';
import Search from './Search';
import Upload from './Upload';

interface State {
  registry: Registry;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      registry: {
        version: 1,
        bookmarks: [
          {
            name: 'Foo',
            tags: ['bar', 'baz', 'quux'],
            url: 'http://example.com',
          },
          {
            name: 'Google',
            tags: ['search', 'engine'],
            url: 'http://google.com',
          },
        ],
      },
    };
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Upload onUpload={this.handleUpload} onError={console.error} />
        <AddBookmarkForm onAdd={this.handleAddBookmark} />
        {this.state.registry && <Search registry={this.state.registry} />}
      </React.Fragment>
    );
  }

  private handleUpload(registry: Registry): void {
    this.setState({ registry });
  }

  private handleAddBookmark(bookmark: Bookmark): void {
    this.setState({
      registry: {
        ...this.state.registry,
        bookmarks: [...this.state.registry.bookmarks, bookmark],
      },
    });
  }
}
