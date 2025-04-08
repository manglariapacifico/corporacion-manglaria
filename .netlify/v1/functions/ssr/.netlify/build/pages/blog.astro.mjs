import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderTransition } from '../chunks/astro/server_jI5cH59c.mjs';
import 'kleur/colors';
import { $ as $$Nav } from '../chunks/Nav_Bj_nJQim.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_kkJ1VDTh.mjs';
import { $ as $$Layout } from '../chunks/Layout_5IGRvs6z.mjs';
import { f as formatDate } from '../chunks/fetcher_BpbBtXqt.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_DwzgsMR_.mjs';
import { g as getAll } from '../chunks/get-all_BXKQtr_F.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data, error } = await getAll({
    type: "blog",
    page: Astro2.url.searchParams.get("page") || "1"
  });
  if (error) return Astro2.redirect("/404");
  const { data: posts, pagination } = data;
  if (!posts.length) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Proyectos" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Nuestro Blog", "description": "Historias que inspiran, voces que conectan. En nuestro blog encontrar\xE1s relatos sobre cuidado, comunidad y memoria en Buenaventura. \xA1Lee, siente y \xFAnete a este tejido de transformaci\xF3n!" })} ${maybeRenderHead()}<section class="px-8 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative mb-20"> ${posts.map(
    ({ title, slug, image, description, createdAt, _id }) => renderTemplate`<a${addAttribute(`/blog/${slug}`, "href")} class="group flex flex-col onverflow-hidden"> <picture class="rounded-lg mb-3 aspect-video w-full overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover fil brightness-50 group-hover:brightness-100 transition-all duration-300"${addAttribute(renderTransition($$result2, "l6nghpa6", "", `img-${_id}`), "data-astro-transition-scope")}> </picture> <div class="p-2"> <span class="text-sm text-primary-500 font-league font-semibold"> ${formatDate(createdAt)} </span> <h3 class="text-xl font-montserrat font-bold line-clamp-2"> ${title} </h3> <p class="text-slate-600 font-light text-sm line-clamp-3"> ${description} </p> </div> </a>`
  )} </section> ${pagination.totalPages > 1 && renderTemplate`<section class="mb-20"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": pagination.currentPage, "totalPages": pagination.totalPages })} </section>`}` })}`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/pages/blog/index.astro", "self");

const $$file = "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
