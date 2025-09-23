import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_biKA018U.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as Logo } from '../chunks/Layout_ChF4b5DL.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CiXXCKLj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "index": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="justify-center h-[82.5vh] bg-gradient"> <article class="index flex flex-col items-center gap-6 text-white animate__animated animate__fadeIn"> ${renderComponent($$result2, "Image", $$Image, { "src": Logo, "alt": "Instituto Tecnico Logo", "class": "w-16", "loading": "eager" })} <div class="flex flex-col items-center gap-2 uppercase"> <h1 class="text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">Institución Educativa</h1> <h2 class="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Instituto Técnico</h2> </div> <p class="prose text-xl lg:text-xl xl:text-2xl 2xl:text-3xl w-[80%] text-center text-white">
Formando líderes del futuro con excelencia académica y valores humanos.
</p> </article> </main> ` })}`;
}, "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/index.astro", void 0);

const $$file = "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
