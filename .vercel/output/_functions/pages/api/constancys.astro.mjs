import { p as prisma } from '../../chunks/prisma_BYYoCNip.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const body = await request.json();
  try {
    await prisma.constancys.create({
      data: body
    });
    return new Response(
      JSON.stringify({ response: "Request created" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ response: "Error in the server " + error }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
