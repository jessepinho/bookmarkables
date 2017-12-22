import * as React from 'react';

import { Registry } from './schema';
import SearchResults from './SearchResults';

interface Props {
  registry: Registry;
}

interface State {
  query?: string;
}

export default class Search extends React.PureComponent<Props, State> {
  private searchInput: HTMLInputElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {};
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <input type="search" ref={el => this.searchInput = el} onChange={this.handleChangeQuery} />
        {this.state.query && <SearchResults query={this.state.query} registry={this.props.registry} />}
      </React.Fragment>
    );
  }

  private handleChangeQuery(): void {
    if (this.searchInput) {
      const query = this.searchInput.value;
      this.setState({ query });
    }
  }
}
