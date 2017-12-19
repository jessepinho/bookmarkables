import * as React from 'react';

interface Props {
  onUpload(parsedJSON: any): void;
}

const Upload = ({ onUpload }: Props) => {
  let fileInput: HTMLInputElement | null = null;
  const fileReader = new FileReader();

  fileReader.onload = () => onUpload(JSON.parse(fileReader.result));
  const handleOnChange = () => {
    if (fileInput && fileInput.files) {
      fileReader.readAsText(fileInput.files[0]);
    }
  };

  return <input type="file" ref={el => fileInput = el} onChange={handleOnChange} />;
};

export default Upload;
