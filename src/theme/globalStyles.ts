import { createGlobalStyle } from 'styled-components';
import MontserratLight from 'assets/fonts/Montserrat-Light.ttf';
import MontserratRegular from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraBold from 'assets/fonts/Montserrat-ExtraBold.ttf';
import OpenSansRegular from 'assets/fonts/OpenSans-Regular.ttf';

export default createGlobalStyle`
  @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratLight}) format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: auto;
  }

  @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
  }

  @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: auto;
  }

  @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratExtraBold}) format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: auto;
  }

  @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
  }

  * {
    box-sizing: border-box;
  }

  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    background-color: #464547;
    font-size: 10px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border: 0;
    border-top: 1px solid;
    margin: 0;
    clear: both;
    color: inherit;
  }

  pre {
    font-family: monospace, monospace;
    font-size: inherit;
  }

  address {
    font-style: inherit;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: inherit;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    vertical-align: bottom;
  }

  embed,
  object,
  iframe {
    border: 0;
    vertical-align: bottom;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    border: 0;
    background: transparent;
    padding: 0;
    margin: 0;
    outline: 0;
    border-radius: 0;
    text-align: inherit;
  }

  [type='checkbox'] {
    -webkit-appearance: checkbox;
    appearance: checkbox;
  }

  [type='radio'] {
    -webkit-appearance: radio;
    appearance: radio;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  button[disabled],
  [type='button'][disabled],
  [type='reset'][disabled],
  [type='submit'][disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
    min-width: 0;
  }

  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  label[for] {
    cursor: pointer;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    text-align: left;
  }

  td,
  th {
    vertical-align: top;
  }

  th {
    text-align: left;
    font-weight: bold;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
