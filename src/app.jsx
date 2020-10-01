import { Editor } from './Editor';
import { Preview } from './Preview';
import { useState } from 'preact/hooks';

export function App(props) {
  const [markdownContent, setMarkdownContent] = useState('# Type Here');

  return (
    <>
      <h1>Editor and preview</h1>
      <Editor markdown={markdownContent} setMarkdown={setMarkdownContent} />
      <Preview markdown={markdownContent} />
    </>
  );
}
