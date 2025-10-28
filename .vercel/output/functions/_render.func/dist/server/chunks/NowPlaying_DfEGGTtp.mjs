import { c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_C_NycY3L.mjs';
import 'kleur/colors';
import 'clsx';

const $$NowPlaying = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="flex flex-row items-center gap-4 mb-6"><a${addAttribute(
    "https://www.youtube.com/watch?v=fZLaKFXn8sQ&list=RDfZLaKFXn8sQ&start_radio=1",
    "href"
  )} target="_blank"><img${addAttribute("ferdi ozbegen", "alt")}${addAttribute(
    "https://i.scdn.co/image/ab67616d0000b2736447a4ef0fba264728685f35",
    "src"
  )}${addAttribute(111, "height")}${addAttribute(111, "width")} loading="eager" decoding="async"></a><div class="flex items-center"><span class="animate-spin mr-2">💿</span><a${addAttribute(
    "https://www.youtube.com/watch?v=fZLaKFXn8sQ&list=RDfZLaKFXn8sQ&start_radio=1",
    "href"
  )} target="_blank" class="flex-1 min-w-0"><span class="block max-w-50 line-clamp-1 sm:max-w-lg sm:line-clamp-2">
Playing <span class="font-bold">${"\xD6zledim Seni"}</span> by
<span class="font-bold">Atilla Kaya</span></span></a></div></div>`}`;
}, "/Users/erenturkoglu/erenworld.github.io/src/components/NowPlaying.astro", void 0);

const $$file = "/Users/erenturkoglu/erenworld.github.io/src/components/NowPlaying.astro";
const $$url = undefined;

export { $$NowPlaying as default, $$file as file, $$url as url };
