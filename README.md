<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Webpack Config</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="34b70ffa-418c-4b7e-bc3c-7a50bfbc3fd8" class="page mono"><header><div class="page-header-icon undefined"><img class="icon" src="Webpack%20Config%2034b70ffa418c4b7ebc3c7a50bfbc3fd8/images.png"/></div><h1 class="page-title">Webpack Config</h1></header><div class="page-body"><p id="e99034f5-5f3d-47b6-93a7-0f2d7c5422ab" class=""><strong><mark class="highlight-red"><a href="https://github.com/Gustavocrs">Autor: Gustavo Silva</a></mark></strong></p><p id="9e27c5e8-e8d5-42b6-9303-f807b2b8eeff" class="">
</p><p id="a3083502-9485-4f5d-8316-7fa056dc08cd" class=""><a href="https://webpack.js.org/"><mark class="highlight-red"><strong>Documentação Webpack</strong></mark></a></p><p id="3e5e1a15-7cec-42d1-b13a-715d3e7b1a48" class=""><strong><mark class="highlight-red"><a href="https://babeljs.io/">Documentação Babel</a></mark></strong></p><p id="d3d1b161-a32c-49f1-959f-5e4ec20bcfd8" class="">
</p><p id="e1bda621-1607-47a2-ac1e-7e8aaecd1f17" class=""><strong><mark class="highlight-blue_background">Referências:</mark></strong><div class="indented"><p id="46a8a08d-d81a-475d-9723-e6cfc8c2fa68" class=""><a href="https://www.youtube.com/watch?v=XS6uWKVXXgA">React com Webpack - YouTube</a></p><p id="c9302668-8ab4-4061-a325-6416f70aac19" class=""><a href="https://www.youtube.com/watch?v=LMCtGvLJT6c">Você ENTENDE REALMENTE o Babel e Webpack que roda em seus Projetos JavaScript? // AluraJS #3 - YouTube</a></p></div></p><p id="f9be9b1f-a870-4ea9-bdba-d427b01d7801" class="">
</p><p id="232ca7fe-ab3f-42f3-883a-a7dc6a08c13a" class=""><mark class="highlight-blue_background"><strong>Passo 1: Criando o package.json:</strong></mark></p><p id="4564f3d5-8302-4ade-8850-e244ed5f51b2" class=""><mark class="highlight-yellow">⇒ npm init -y</mark><div class="indented"><p id="dee69639-d047-42e7-ae46-cff8e6197463" class="">Este comando irá criar o arquivo de configuração padrão.</p><p id="909c4b9a-af65-471f-b7e4-0352318456bd" class="">
</p></div></p><p id="750bcb18-a8e7-4602-9608-328754c43818" class=""><mark class="highlight-blue_background"><strong>Passo 2: Instalando as dependências:</strong></mark></p><p id="db4cc554-d1ae-4612-84d2-ccbc0e6423ed" class="">
</p><p id="900b1fbf-8fe7-4995-b357-420bc1dad2c0" class=""><mark class="highlight-yellow">⇒ npm i -D webpack webpack-cli</mark><div class="indented"><p id="c93c5543-a2df-45ac-a005-4f99f20e5104" class="">Este comando irá instalar o webpack e suas dependências.</p><p id="670f2d89-1993-4281-a2bb-6af5af9e5658" class="">
</p></div></p><p id="71befc23-9cb4-416b-9dd8-9c42d99bf3a2" class=""><mark class="highlight-yellow">⇒ npm i -D webpack-dev-server</mark><div class="indented"><p id="334fbeb0-6218-4b3e-bfbf-221f8675a458" class="">Este comando irá instalar um servidor para as dependências de dev do webpack</p></div></p><p id="f4c83017-f054-4e4e-b38c-bb39edfe4b23" class="">
</p><p id="aacb319d-e607-4097-a878-1484175104bf" class=""><mark class="highlight-yellow">⇒ npm i -S react react-dom</mark><div class="indented"><p id="3209cb54-f582-4c52-9fe8-685cd37dcc8f" class="">Este comando irá instalar o react e o react dom
</p></div></p><p id="93bb499b-e3cd-4c62-aa5b-20c4533e4083" class=""><mark class="highlight-yellow">⇒ npm i -D @babel/core @babel/cli babel-loader @babel/preset-env @babel/preset-react</mark><div class="indented"><p id="97e3f543-6619-46fd-bb5c-6e1f52852bba" class="">Este comando irá instalar o babel e as dependências necessárias para que ele funcione</p><p id="97f7adbe-40ac-4a35-a483-96e637aac0e8" class="">
</p></div></p><p id="9287f091-b42e-475d-8de6-0f44b7a41be1" class=""><mark class="highlight-orange">⇒ npm i -D clean-webpack-plugin</mark><div class="indented"><p id="c868d6db-7d07-4bf7-b3b8-9b7fe2784470" class="">Instala plugin para limpar a pasta dist antes do build</p><p id="7eb8ef10-d390-44ed-a3ec-2253d37d2dde" class="">
</p></div></p><p id="3365eb97-20a1-470d-a046-788e9a6c977e" class=""><mark class="highlight-yellow">⇒ npm i -D html-webpack-plugin</mark><div class="indented"><p id="cd165e06-dde1-46be-8f4e-4fec688421d6" class="">Este comando irá instalar um plugin que gerará um arquivo HTML5 para incluir todos os seus pacotes webpack usando tags.</p></div></p><p id="fa2898ab-c739-4152-897e-208baadb6d44" class="">
</p><p id="879117df-fdfd-4de9-8dfa-389fe93b5613" class=""><mark class="highlight-blue_background"><strong>Passo 3: Criando a estrutura de pastas:</strong></mark><div class="indented"><p id="32a9ec1d-9042-478b-b335-c52ef4625d55" class="">Criar pastas abaixo:<div class="indented"><p id="780617f2-1449-4e37-b8a9-1a95405ad0c3" class="">./src</p><p id="1fd6142b-b313-4ffe-beab-a7213f12f4a2" class="">./src/components</p><p id="92c70436-70a1-4db0-b180-56053325d0dc" class="">./public</p></div></p></div></p><p id="9c2ca54e-f8a4-4d3f-85d9-221a1125901b" class="">
</p><p id="71aa6d55-6320-4722-8317-e1c9c24a73f7" class=""><mark class="highlight-blue_background"><strong>Passo 4: Configurando a estrutura de arquivos:</strong></mark></p><p id="40038a7d-f0fb-4970-83ba-6b03210bc5d6" class="">
</p><p id="98ec8dd5-6193-461d-bb54-c39a75da0b1d" class="">⇒ Criar arquivo <mark class="highlight-yellow_background"><strong>src</strong></mark><mark class="highlight-yellow_background">/index.jsx</mark> e adicionar as configurações abaixo:<div class="indented"><pre id="ad2570bb-6db5-4f2b-8955-96310d26e0bf" class="code"><code>import React from &#x27;react&#x27;;
import ReactDOM from &#x27;react-dom/client&#x27;;
import App from &#x27;./App.jsx&#x27;;

const root = ReactDOM.createRoot(document.getElementById(&#x27;root&#x27;));
root.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);</code></pre></div></p><p id="9f0a4c4b-9a9f-45ad-ae56-ffdbf9af2ae1" class="">
</p><p id="342dd639-1865-4a4c-8598-6cefc549a5e7" class="">⇒ Criar arquivo <mark class="highlight-yellow_background">src/App.jsx</mark> e adicionar as configurações abaixo:<div class="indented"><pre id="699d4117-bf32-4147-b4fa-047328a80946" class="code"><code>import React from &quot;react&quot;;

const App = () =&gt; {
  return (
    &lt;&gt;
      &lt;h1&gt;New Webpack App&lt;/h1&gt;
    &lt;/&gt;
  );
};

export default App;</code></pre><p id="dee443dd-460a-4cbc-b62f-c5d449817d8b" class="">
</p></div></p><p id="815aa6b4-3453-412f-8a7e-b366458491bb" class="">⇒ Criar arquivo <mark class="highlight-yellow_background">src/index.html</mark> com a configuração padrão do Emmet (! + Enter) e criar as tags abaixo dentro do &lt;body&gt;:<div class="indented"><pre id="f3adef6c-9041-4479-9a01-ac9aa5621cd3" class="code"><code>&lt;body&gt;
  &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
  &lt;script src=&quot;index.jsx&quot;&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre></div></p><p id="2a6e5fcd-1a5e-4795-a604-12b748d13544" class="">
</p><p id="fcbfe777-baeb-4093-88e8-5d3d596f5cc4" class="">⇒ Alterar o package.json e adicionar/alterar os scripts abaixo:<div class="indented"><pre id="6e9213e3-9207-49b8-90f0-86ee4d0f9746" class="code"><code>&quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;,
    &quot;start&quot;: &quot;webpack-dev-server --mode development --open&quot;,
    &quot;build&quot;: &quot;webpack --mode production&quot;
  }</code></pre><p id="38905cf1-9773-4ca0-bcb5-3c0209c72d0f" class="">
</p></div></p><p id="f2515944-5de6-4895-940e-f959dfd46bc0" class=""><mark class="highlight-blue_background"><strong>Passo 5: Configurando o webpack.config.jsx e .babelrc:</strong></mark></p><p id="941dc353-4a58-4423-9e77-0c62acb92036" class="">⇒ Criar arquivo <mark class="highlight-yellow_background">src/webpack.config.jsx</mark> e adicionar as configurações abaixo:<div class="indented"><pre id="2921a555-8170-4e13-bbcf-4d0b410af447" class="code"><code>const path = require(&quot;path&quot;);
const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
const { CleanWebpackPlugin } = require(&quot;clean-webpack-plugin&quot;);

module.exports = {
  mode: &quot;development&quot;,
  entry: path.resolve(__dirname, &quot;./src/index.jsx&quot;),
  output: {
    filename: &quot;build.js&quot;,
    path: path.resolve(__dirname, &quot;static&quot;),
  },
  module: {
    rules: [
      {
        //Jsx &amp; Js
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: &quot;babel-loader&quot;,
          options: {
            presets: [&quot;@babel/preset-env&quot;, &quot;@babel/preset-react&quot;],
          },
        },
      },
      {
        //Svgs
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: &quot;asset/inline&quot;,
      },
      {
        //Imagens
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: &quot;asset/resource&quot;,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: &quot;index.html&quot;,
      template: path.resolve(__dirname, &quot;./public/index.html&quot;),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, &quot;public&quot;),
    },
    compress: true,
    hot: true,
    port: 3333,
  },
};</code></pre></div></p><p id="04a2d235-3abb-44a2-9b12-3deae3ef2b38" class="">⇒ Criar arquivo <mark class="highlight-yellow_background">.babelrc</mark> na pasta raiz e adicionar as configurações abaixo:<div class="indented"><pre id="7d0e1bff-f4c6-40a2-bb4c-8b998aba0c66" class="code"><code>{
  &quot;presets&quot;: [&quot;@babel/preset-env&quot;, &quot;@babel/preset-react&quot;],
}</code></pre></div></p><p id="1387c3e3-d3da-4368-973b-1a713bda727e" class="">
</p><p id="d9e9df63-43ff-402b-8ea3-e2dd55840dfc" class=""><mark class="highlight-blue_background"><strong>Passo 6: Criando o .gitignore:</strong></mark></p><p id="1c352a2a-013b-4469-bc22-9263eee9d33a" class="">⇒ Criar arquivo <mark class="highlight-yellow_background">.gitignore</mark> com os comandos abaixo:<div class="indented"><pre id="f424aea8-d050-4e8b-90bf-34972cea3d47" class="code"><code># dependencies
/node_modules
/.pnp
.pnp.js

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local</code></pre><p id="d522f9a2-d3e1-41a1-9a40-b1a91d4709b2" class="">
</p></div></p><p id="db7ad240-abf6-413b-8cca-47f74285f5fd" class=""><mark class="highlight-blue_background"><strong>Passo 7: Rodando o projeto:</strong></mark></p><p id="52850f35-9956-4eac-9a89-793cd03ca323" class=""><mark class="highlight-yellow">⇒ npm start</mark></p><p id="33376f9c-c1c0-4b9b-80a3-ed4386883bba" class="">
</p><p id="2f44939b-68d8-4755-a40d-7aef22e3d3e1" class=""><mark class="highlight-blue_background"><strong>Passo 8: Rodando o build:</strong></mark></p><p id="1d0b7550-2160-47cf-aa42-32705726629f" class=""><mark class="highlight-yellow">⇒ npm run build</mark></p><p id="bd0b5c30-8cd7-4bd6-9daa-2a306f134f5f" class="">
</p></div></article></body></html>
