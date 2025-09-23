import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_biKA018U.mjs';
import 'kleur/colors';
import { N as NoticeIcon, $ as $$Layout } from '../chunks/Layout_ChF4b5DL.mjs';
import { g as getNotices } from '../chunks/collections_pptSmV7P.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { M as MainHeader } from '../chunks/MainHeader_JfCYZORp.mjs';
import '../chunks/fields_CodvNvHD.mjs';
import 'formik-validator-zod';
import 'sweetalert2';
export { renderers } from '../renderers.mjs';

function NoticeCard({ notice, width }) {
  const { body, data } = notice;
  const { img, title, span, date } = data;
  const Content = body;
  return /* @__PURE__ */ jsxs("section", { className: `group flex flex-col items-center ${width ?? ""} h-[29rem] lg:h-[27rem] 2xl:h-[32rem] pb-12 border-1 border-muted rounded-xl
        shadow-difused cursor-pointer animate--card hover:shadow-hover hover:text-primary`, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("img", { src: img, alt: `${title}`, loading: "eager", width: "100%" }) }),
    /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-4 p-4", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-primary/15 group-hover:bg-primary group-hover:text-white text-primary font-bold text-sm px-2 py-[1px] rounded-xl", children: span }),
          /* @__PURE__ */ jsx("span", { className: "text-[12px] text-neutral font-semibold", children: date })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-lg/5 xs:text-2xl/5 lg:text-lg/5 2xl:text-2xl/5 font-bold tracking-tight 2xl:tracking-normal", children: title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-md 2xl:text-lg text-surface/80", children: /* @__PURE__ */ jsx("p", { children: Content }) })
    ] })
  ] });
}

const $$Noticias = createComponent(async ($$result, $$props, $$slots) => {
  const headerData = {
    icon: NoticeIcon.src,
    title: "Noticias",
    description: "Las \xFAltimas noticias de nuestra comunidad educativa"
  };
  const notices = await getNotices();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "MainHeader", MainHeader, { "data": headerData, "iconAnimation": "animate__heartBeat" })} <article class="flex flex-col lg:flex-row lg:flex-wrap gap-10 lg:gap-7 items-center justify-center 
            w-full xl:w-[80%] animate__animated animate__fadeIn"> ${notices.map((notice) => renderTemplate`${renderComponent($$result2, "NoticeCard", NoticeCard, { "notice": notice, "width": "w-[85%] sm:w-[70%] md:w-[60%] lg:w-[30%]" })}`)} </article> </main> ` })}`;
}, "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/noticias.astro", void 0);

const $$file = "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/noticias.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Noticias,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
