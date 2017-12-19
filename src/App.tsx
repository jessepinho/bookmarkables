import * as React from 'react';

import { Registry } from './schema';
import Upload from './Upload';

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
    return <Upload onUpload={this.handleUpload} onError={console.error} />;
  }

  private handleUpload(registry: Registry): void {
    console.log(registry);
  }
}
