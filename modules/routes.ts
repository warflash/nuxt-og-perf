import { resolve } from "pathe";
import { defineNuxtModule } from "@nuxt/kit";
import { createCommonJS } from "mlly";
const { __dirname } = createCommonJS(import.meta.url);

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook("pages:extend", (pages) => {

      const dummyRoutes = Array.from({ length: 1000 }, (_, i) => {
        return {
          name: `dummy-${i}`,
          path: `/dummy-${i}`,
          file: resolve(__dirname, "../components/pageComponent.vue"),
          children: [],
        };
      });

      pages.push(...dummyRoutes);
    });
  },
});
