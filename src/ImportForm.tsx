import * as React from 'react';
import { Registry } from './schema';

interface Props {
  onError(error: Error): void;
  onImport(registry: Registry): void;
}

const ImportForm = ({ onError, onImport }: Props) => {
  let fileInput: HTMLInputElement | null = null;
  const fileReader = new FileReader();

  fileReader.onload = () => {
    try {
      onImport(JSON.parse(fileReader.result));
    } catch (error) {
      onError(error);
    }
  };

  const handleOnChange = () => {
    if (fileInput && fileInput.files) {
      fileReader.readAsText(fileInput.files[0]);
    }
  };

  return <input type="file" ref={el => fileInput = el} onChange={handleOnChange} />;
};

export default ImportForm;
