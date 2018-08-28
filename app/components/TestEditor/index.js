/**
 * TestEditor
 *
 */

import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const StyledContainer = styled.div`
  padding: 2em 1em;

  .rdw-editor-main {
    background-color: white;
    padding: 1em;
  }
`;

function TestEditor() {
  return (
    <StyledContainer>
      <Editor />
    </StyledContainer>
  );
}

TestEditor.propTypes = {};

export default TestEditor;

// KO AF
/*
const StyledTestEditor = styled(TestEditor)`
  background-color: blue;
  padding: 2em 1em;

  .rdw-editor-main {
    background-color: red;
  }
`;

export default StyledTestEditor;
*/
