export default function() {
  var fa = document.createElement('style');
  fa.type = 'text/css';
  fa.textContent = `@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('${chrome.extension.getURL('inject/materialicons.woff2')}') format('woff2');
  }`;
  document.head.appendChild(fa);
}
