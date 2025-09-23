import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_biKA018U.mjs';
import 'kleur/colors';
import { P as PhoneIcon, O as OrangePhoneIcon, E as EmailIcon, L as LocationIcon, $ as $$Layout } from '../chunks/Layout_ChF4b5DL.mjs';
import 'react/jsx-runtime';
import 'react';
import { M as MainHeader } from '../chunks/MainHeader_JfCYZORp.mjs';
import { C as Card } from '../chunks/Card_Ck-ZrIwR.mjs';
import '../chunks/fields_CodvNvHD.mjs';
import 'formik-validator-zod';
import 'sweetalert2';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const headerData = {
    icon: PhoneIcon.src,
    title: "Contacto",
    description: "Nuestra informaci\xF3n de contacto"
  };
  const contactCards = [
    {
      icon: OrangePhoneIcon.src,
      title: "Tel\xE9fono",
      description: "(123) 456-7890",
      color: "primary"
    },
    {
      icon: EmailIcon.src,
      title: "Email",
      description: "rectoria@instecnico.edu.co",
      color: "secondary"
    },
    {
      icon: LocationIcon.src,
      title: "Direcci\xF3n",
      description: "Calle 3a #768 Santander de Quilichao",
      color: "primary"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "MainHeader", MainHeader, { "data": headerData, "iconAnimation": "animate__swing" })} <article class="flex flex-col lg:flex-row gap-14 items-center justify-center animate__animated animate__fadeIn"> ${contactCards.map((contact) => renderTemplate`${renderComponent($$result2, "Card", Card, { "data": contact, "width": "w-[18rem] h-[11rem] xs:w-[20rem] lg:w-[15rem] 2xl:w-[18rem]" })}`)} </article> </main> ` })}`;
}, "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
