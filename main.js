import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
// custom theme from https://github.com/dzello/revealjs-themes

// pick code block syntax highlighting theme
// included with Reveal.js are monokai and zenburn
// import 'reveal.js/plugin/highlight/monokai.css'
// more themes from Highlight.js
// import 'highlight.js/styles/purebasic.css'
//import 'highlight.js/styles/docco.css'

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import RevealZoom from "reveal.js/plugin/zoom/zoom.esm.js";
import RevealSearch from "reveal.js/plugin/search/search.esm.js";

const deck = new Reveal({
  plugins: [Markdown, RevealHighlight, RevealNotes, RevealZoom, RevealSearch],
});
// https://revealjs.com/config/
deck.initialize({
  // presentation sizing config
  width: 1280,
  height: 720,
  minScale: 0.2,
  maxScale: 1.1,
  // show the slide number on the page
  // and in the hash fragment and
  // make sure they are the same
  slideNumber: false,
  hash: true,
  hashOneBasedIndex: true,
});
