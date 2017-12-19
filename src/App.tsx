import * as React from 'react';
import Upload from './Upload';

const App = () => (
  <Upload onUpload={console.log} onError={console.error} />
);

export default App;
