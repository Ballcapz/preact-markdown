import { Editor } from './Editor';
import { Preview } from './Preview';

export function App(props) {
  return (
    <>
      <p>Hello Vite + Preact!</p>
      <Editor />
      <Preview markdown="# Hello" />
    </>
  )
}