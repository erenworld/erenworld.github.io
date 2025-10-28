import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_9v-lkmmB.mjs';
import { manifest } from './manifest_CX6pi6G4.mjs';

const serverIslandMap = new Map([
	['NowPlaying', () => import('./chunks/NowPlaying_DfEGGTtp.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/now-playing.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/_slug_/og.png.astro.mjs');
const _page5 = () => import('./pages/_slug_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/now-playing.ts", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/rss.xml.ts", _page3],
    ["src/pages/[slug]/og.png.ts", _page4],
    ["src/pages/[slug]/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "d6d550fd-bd9f-409e-b57a-8ad01bd1d904",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
