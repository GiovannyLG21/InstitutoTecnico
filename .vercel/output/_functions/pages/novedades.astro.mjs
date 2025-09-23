import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_biKA018U.mjs';
import 'kleur/colors';
import { C as ClockIcon, a as NotificationIcon, $ as $$Layout } from '../chunks/Layout_ChF4b5DL.mjs';
import { a as getUpdates } from '../chunks/collections_pptSmV7P.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { M as MainHeader } from '../chunks/MainHeader_JfCYZORp.mjs';
import '../chunks/fields_CodvNvHD.mjs';
import 'formik-validator-zod';
import 'sweetalert2';
export { renderers } from '../renderers.mjs';

function UpdateCard({ update }) {
  const spanRef = useRef(null);
  const spanHoverAnimation = () => {
    if (spanRef.current) spanRef.current.classList.add("animate__bounce");
  };
  const spanHoverAnimationOut = () => {
    if (spanRef.current) spanRef.current.classList.remove("animate__bounce");
  };
  const { body, data } = update;
  const { title, span, date, type } = data;
  const Content = body;
  const cardColor = type === 1 ? "border-l-primary" : "border-l-secondary";
  const shadowHoverColor = type === 1 ? "hover:shadow-hover" : "hover:shadow-hover-secondary";
  const titleHoverColor = type === 1 ? "group-hover:text-primary" : "group-hover:text-secondary";
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `group flex flex-col gap-4 py-6 px-5 rounded-xl shadow-difused
            border-1 border-muted border-l-5 ${cardColor} cursor-pointer animate--card ${shadowHoverColor}`,
      onMouseEnter: spanHoverAnimation,
      onMouseLeave: spanHoverAnimationOut,
      children: [
        /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsx("h1", { className: `text-lg sm:text-xl 2xl:text-2xl font-bold ${titleHoverColor}`, children: title }),
            span && /* @__PURE__ */ jsx(
              "span",
              {
                ref: spanRef,
                className: "text-[10px] sm:text-xs 2xl:text-sm px-3 py-1 rounded-2xl bg-primary text-white animate__animated",
                children: span
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex flex-row items-center gap-1 text-xs 2xl:text-base text-neutral", children: [
            /* @__PURE__ */ jsx("img", { src: ClockIcon.src, alt: "Clock icon", className: "w-5" }),
            date
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm 2xl:text-base", children: Content }) })
      ]
    }
  );
}

const $$Novedades = createComponent(async ($$result, $$props, $$slots) => {
  const headerData = {
    icon: NotificationIcon.src,
    title: "Novedades institucionales",
    description: "Mantente informado sobre las \xFAltimas actualizaciones"
  };
  const updates = await getUpdates();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Novedades" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "MainHeader", MainHeader, { "data": headerData, "iconAnimation": "animate__headShake" })} <article class="flex flex-col gap-6 md:w-[90%] lg:w-[75%] xl:w-[60%] animate__animated animate__fadeIn"> ${updates.map((update) => renderTemplate`${renderComponent($$result2, "UpdateCard", UpdateCard, { "update": update, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/components", "client:component-export": "UpdateCard" })}`)} </article> </main> ` })}`;
}, "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/novedades.astro", void 0);

const $$file = "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/novedades.astro";
const $$url = "/novedades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Novedades,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
