import * as React from 'react';

interface Props {
  onError(error: Error): void;
  onUpload(parsedJSON: any): void;
}

const Upload = ({ onError, onUpload }: Props) => {
  let fileInput: HTMLInputElement | null = null;
  const fileReader = new FileReader();

  fileReader.onload = () => {
    try {
      onUpload(JSON.parse(fileReader.result));
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

export default Upload;
