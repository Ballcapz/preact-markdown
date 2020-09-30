import { useState, useEffect } from 'preact/hooks';
import { Remarkable } from 'remarkable'
import hljs from 'highlight.js';

const md = new Remarkable({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) { }
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) { }

        return ''; // use external default escaping
    }
});

export function Preview({ markdown }) {
    const [html, setHtml] = useState('');

    useEffect(() => {
        let loc = md.render(markdown);
        console.log(loc)
        setHtml(loc);
    }, [markdown])

    return (
        <div>
            {html && (<div dangerouslySetInnerHTML={{ __html: html }}></div>)}
        </div>
    )
}