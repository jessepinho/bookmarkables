import * as React from 'react';
import Upload from './Upload';

export default class App extends React.Component {
  render() {
    return <Upload onUpload={console.log} onError={console.error} />;
  }
}
