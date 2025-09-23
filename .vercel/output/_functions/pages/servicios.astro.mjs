import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_biKA018U.mjs';
import 'kleur/colors';
import { W as WhiteDocumentIcon, D as DocumentIcon, b as Logo, G as GraduationHatIcon, c as WhiteCalendarIcon, d as CalendarIcon, a as NotificationIcon, N as NoticeIcon, P as PhoneIcon, $ as $$Layout } from '../chunks/Layout_ChF4b5DL.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { C as Card } from '../chunks/Card_Ck-ZrIwR.mjs';
import '../chunks/fields_CodvNvHD.mjs';
import 'formik-validator-zod';
import 'sweetalert2';
export { renderers } from '../renderers.mjs';

function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return /* @__PURE__ */ jsx("div", { className: "loading" });
  return children;
}

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const servicesRequests = [
    {
      icon: DocumentIcon.src,
      title: "Solicitud de constancias",
      description: "Solicita constancias de estudio, notas y otros documentos acad\xE9micos",
      color: "primary",
      type: "modal",
      modal: {
        modalIcon: WhiteDocumentIcon.src,
        modalTitle: "Solicitud de constancias",
        modalDescription: "Completa el formulario para solicitar tu constancia.",
        modalColor: "primary",
        modalForm: "ConstancyForm",
        formApi: "constancys"
      }
    },
    {
      icon: GraduationHatIcon.src,
      title: "Actas de grado",
      description: "Solicita duplicados de actas de grado y certificados de graduaci\xF3n",
      color: "secondary",
      type: "modal",
      modal: {
        modalIcon: Logo.src,
        modalTitle: "Actas de grado",
        modalDescription: "Solicita duplicados de tu acta de grado.",
        modalColor: "secondary",
        modalForm: "CertificateForm",
        formApi: "certificates"
      }
    },
    {
      icon: CalendarIcon.src,
      title: "Citas con la rectora",
      description: "Agenda una cita personal con la rectora de la instituci\xF3n",
      color: "primary",
      type: "modal",
      modal: {
        modalIcon: WhiteCalendarIcon.src,
        modalTitle: "Citas con la rectora",
        modalDescription: "Solicita una cita personal con la rectora.",
        modalColor: "gradient",
        modalForm: "AppointmentForm",
        formApi: "appointments"
      }
    },
    {
      icon: NotificationIcon.src,
      title: "Novedades",
      description: "Mantente informado sobre las \xFAltimas novedades institucionales",
      color: "secondary",
      type: "link"
    },
    {
      icon: NoticeIcon.src,
      title: "Noticias",
      description: "Lee las noticias m\xE1s recientes de nuestra comunidad educativa",
      color: "primary",
      type: "link"
    },
    {
      icon: PhoneIcon.src,
      title: "Contacto",
      description: "Lee las noticias m\xE1s recientes de nuestra comunidad educativa",
      color: "secondary",
      type: "link"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="!gap-4"> <h1 class="main-title text-[30px] font-bold animate__animated animate__fadeIn">Nuestros servicios</h1> ${renderComponent($$result2, "Loader", Loader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/components", "client:component-export": "Loader" }, { "default": ($$result3) => renderTemplate` <article class="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 w-[90%] py-4 
                animate__animated animate__fadeInLeft"> ${servicesRequests.map((service) => renderTemplate`${renderComponent($$result3, "Card", Card, { "data": service, "width": "w-[75%] md:w-[45%] lg:w-[35%] xl:w-[28%] 2xl:w-[25%] md:h-[13rem]", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/components", "client:component-export": "Card" })}`)} </article> ` })} </main> ` })}`;
}, "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/ladig/Documents/Proyects/Astro/instituto-tecnico/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Servicios,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
