import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CWjIzt2w.mjs';
import { manifest } from './manifest_Bng2YZ-a.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/appointments.astro.mjs');
const _page2 = () => import('./pages/api/certificates.astro.mjs');
const _page3 = () => import('./pages/api/constancys.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/noticias.astro.mjs');
const _page6 = () => import('./pages/novedades.astro.mjs');
const _page7 = () => import('./pages/servicios.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/appointments.ts", _page1],
    ["src/pages/api/certificates.ts", _page2],
    ["src/pages/api/constancys.ts", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/noticias.astro", _page5],
    ["src/pages/novedades.astro", _page6],
    ["src/pages/servicios.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5cab7cbf-d77a-49b5-9292-ee21e6d20e2d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
