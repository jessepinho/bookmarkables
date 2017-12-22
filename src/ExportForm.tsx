import * as React from 'react';
import styled from 'styled-components';

import { Registry } from './schema';

interface Props {
  registry: Registry;
}

const ExportForm = ({ registry }: Props) => {
  let textarea: HTMLTextAreaElement | null = null;

  const Textarea = styled.textarea`
    opacity: 0;
    position: absolute;
  `;

  const copy = () => {
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
    }
  };

  return (
    <React.Fragment>
      <button onClick={copy}>Copy to clipboard</button>
      <Textarea
        value={JSON.stringify(registry, null, 2)}
        readOnly={true}
        innerRef={el => textarea = el}
      />
    </React.Fragment>
  );
};

export default ExportForm;
