import { Editor } from './Editor';
import { Preview } from './Preview';
import { useState } from 'preact/hooks';
import { useLocalStorage } from './hooks/useLoaclStorage';

export function App(props) {
  const [markdownContent, setMarkdownContent] = useLocalStorage('markdown', '# Hello');

  return (
    <>
      <h1>Editor and preview</h1>
      <Editor markdown={markdownContent} setMarkdown={setMarkdownContent} />
      <Preview markdown={markdownContent} />
    </>
  );
}
