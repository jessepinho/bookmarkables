import * as React from 'react';

import { Registry } from './schema';
import Upload from './Upload';
import Search from './Search';

interface State {
  registry?: Registry;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {};
    this.handleUpload = this.handleUpload.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Upload onUpload={this.handleUpload} onError={console.error} />
        {this.state.registry && <Search registry={this.state.registry} />}
      </React.Fragment>
    );
  }

  private handleUpload(registry: Registry): void {
    this.setState({ registry });
  }
}
