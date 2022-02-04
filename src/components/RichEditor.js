import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.styleMap = {
      STRIKETHROUGH: {
        textDecoration: 'line-through',
      },
    };
  }
  render() {
    return (
      <>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          customStyleMap={this.styleMap}
        />
        <footer>
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-secondary">Cancel</button>
        </footer>
      </>
    );
  }
}
// ReactDOM.render(<RichEditor />, document.getElementById('container'));
