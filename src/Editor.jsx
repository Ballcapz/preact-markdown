import { useState, useEffect } from 'preact/hooks';

export function Editor({ markdown, setMarkdown }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(markdown);
  }, []);

  return (
    <div
      className="editor"
      contentEditable="true"
      onInput={(e) => {
        setMarkdown(e.target.innerText);
      }}
      dangerouslySetInnerHTML={{ __html: value }}
    ></div>
  );
}
