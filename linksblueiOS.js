// ==UserScript==
// @name         Links Blue (Safe + Visited Fix)
// @namespace    github.com/fraiz-tagada
// @version      2.1.0
// @description  Force blue on simple text links (including visited)
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
/* 2) Appliquer au lien lui-même (tous états) */
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]):link,
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]):visited,
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]):hover,
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]):active {
  color: #023eb6 !important;
  -webkit-text-fill-color: #023eb6 !important;
}

/* 3) Appliquer aussi aux enfants texte */
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]) :is(span, em, strong, b, i, u, small, mark, code, kbd, samp, cite, q),
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]):visited :is(span, em, strong, b, i, u, small, mark, code, kbd, samp, cite, q),
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]) :is(h1, h2, h3, h4, h5, h6),
a:not([role="button"]):not([class*="btn"]):not([class*="button"]):not([class*="nav"]):not([class*="menu"]):not([class*="card"]):visited :is(h1, h2, h3, h4, h5, h6) {
  color: #023eb6 !important;
  -webkit-text-fill-color: #023eb6 !important;
}
`);
