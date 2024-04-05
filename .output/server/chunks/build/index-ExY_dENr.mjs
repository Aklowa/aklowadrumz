import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { l as logo, _ as _imports_0$7 } from './logo-CNU-nTlX.mjs';
import { useSSRContext, ref, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_1$2 } from './int_eent2-DVCVtL1s.mjs';
import { _ as _imports_2$2 } from './edu-B5RRmMRL.mjs';
import { _ as _imports_3$2 } from './int_eent-UjNOfrLI.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './server.mjs';
import 'vue-router';
import 'gsap';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const _sfc_main$a = {
  name: "pink-navbar",
  components: {
    logo
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_logo = resolveComponent("logo");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "relative flex flex-wrap items-center justify-between" }, _attrs))}><div class="container mx-auto flex flex-wrap items-center justify-between"><div class="w-full relative flex justify-between lg:w-auto sm:px-0 lg:static lg:block lg:justify-start">`);
  _push(ssrRenderComponent(_component_logo, null, null, _parent));
  _push(`<button class="text-black cursor-pointer text-xl ml-10 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: "'fas' fa-bars"
  }, null, _parent));
  _push(`</button></div><div class="${ssrRenderClass([{ "hidden": !$data.showMenu, "flex": $data.showMenu }, "lg:flex lg:flex-grow items-center"])}"><ul class="flex flex-col lg:flex-row list-none ml-auto"><li class="nav-item"><a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#about">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: ["fas", "address-card"]
  }, null, _parent));
  _push(`<span class="ml-2">About</span></a></li><li class="nav-item"><a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#service">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: ["fas", "briefcase"]
  }, null, _parent));
  _push(`<span class="ml-2">Services</span></a></li><li class="nav-item"><a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#gallery">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: ["fas", "images"]
  }, null, _parent));
  _push(`<span class="ml-2">Gallery</span></a></li><li class="nav-item"><a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#album">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: ["fas", "record-vinyl"]
  }, null, _parent));
  _push(`<span class="ml-2">Album</span></a></li><li class="nav-item"><a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#team">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: ["fas", "people-group"]
  }, null, _parent));
  _push(`<span class="ml-2">Team</span></a></li><li class="nav-item"><a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#contact">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-lg leading-lg text-black opacity-75",
    icon: ["fas", "envelopes-bulk"]
  }, null, _parent));
  _push(`<span class="ml-2">Contact</span></a></li></ul></div></div></nav>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/navbars.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const navbars = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$9 = {
  __name: "headtext",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><h1 class="text-3xl font-extrabold sm:text-5xl"> Your Best Cultural Troupe </h1><p class="mt-4 max-w-lg sm:text-xl/relaxed"> An African Cultural Heritage group with over decades of outstanding performances in music, dance and folk music. Aklowa Drum Band have performed in many countries, as well as global events. </p></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/headtext.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const headtext = _sfc_main$9;
const _imports_0$6 = "" + buildAssetsURL("Nat.BJULWv2-.webp");
const _sfc_main$8 = {
  components: {
    navbars,
    headtext
  },
  setup() {
    const isSticky = ref(false);
    return {
      isSticky
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_headtext = resolveComponent("headtext");
  const _component_NuxtLink = __nuxt_component_0;
  const _component_navbars = resolveComponent("navbars");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-6e0ad8d6><section class="h-screen relative bg-white" data-v-6e0ad8d6><img${ssrRenderAttr("src", _imports_0$6)} class="absolute inset-0 object-cover w-full h-full z-0" alt="background image" data-v-6e0ad8d6><div class="absolute col-start-1 row-start-1 bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" data-v-6e0ad8d6></div><div class="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-v-6e0ad8d6><div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" data-v-6e0ad8d6>`);
  _push(ssrRenderComponent(_component_headtext, null, null, _parent));
  _push(`<div class="mt-8 flex justify-center" data-v-6e0ad8d6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog/history",
    class: "block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get to know us `);
      } else {
        return [
          createTextVNode(" Get to know us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section><nav id="topNav" class="${ssrRenderClass([{ "sticky-nav": $setup.isSticky }, "bg-rose-100 text-center transition-all duration-500"])}" data-v-6e0ad8d6><ul class="list-none font-semibold text-uppercase" data-v-6e0ad8d6>`);
  _push(ssrRenderComponent(_component_navbars, null, null, _parent));
  _push(`</ul></nav></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/headers.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Headers = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-6e0ad8d6"]]);
const _imports_0$5 = "" + buildAssetsURL("gp_pic.DYRYdZxv.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "about" }, _attrs))}><div class="py-16 dark:bg-gray-100"><div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"><div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"><div class="md:5/12 lg:w-5/12"><img${ssrRenderAttr("src", _imports_0$5)} alt="aklowa_group_picture" class="rounded-lg" width="" height=""></div><div class="md:7/12 lg:w-6/12"><h2 class="text-2xl text-gray-900 text-center font-bold md:text-4xl"> Who we are </h2><p class="mt-6 text-gray-600"> Aklowa Drum Band is part of Aklowa UK Organization. This mother organization was setup by the late Felix Cobbson in the year 1977. He introduced the element of Traditional African Culture to thousands of people who visited the African Village at United Kingdom. </p><p class="mt-4 text-gray-600"> Currently, the group has a repertory of 32 traditional African cutural dance, 12 contemporary dance pieces and more than 1,000 African folk songs and rhythms. </p></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/aboutus.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$4 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23c44e89'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20256%20256'%20enable-background='new%200%200%20256%20256'%20xml:space='preserve'%3e%3cpath%20d='M87.002,70.047c4.24,10.293,16.021,15.2,26.315,10.96c6.352-2.617,10.643-8.108,12.009-14.347l16.375,4.657l2.249-6.608%20l-16.786-11.215l1.627-13.675c0.305-2.567-1.299-4.975-3.785-5.682l-21.375-6.079c-2.486-0.707-5.118,0.497-6.209,2.84%20l-5.668,12.175L72.12,44.281l-2.249,6.607l16.784,4.774C85.058,60.178,85.034,65.269,87.002,70.047z%20M127.515,131.464H103.24%20L90.648,85.99c-1.821-8.031-8.992-14.15-17.406-14.15H28.81c-3.065,0-6.129,1.628-7.849,4.309L3.343,106.947%20c-2.68,4.299-0.961,9.699,3.257,12.339c3.843,2.397,9.538,0.931,12.329-3.065l15.04-26.115h23.303L28.588,139.57%20c-3.346,5.771-3.663,12.812-0.848,18.86l14.36,30.856l-12.663,48.457c-1.77,6.999,2.397,14.018,9.214,15.849%20c6.999,1.77,14.008-2.397,15.849-9.214l13.401-53.029c0.718-2.721,0.627-5.947-0.809-8.678l-1.224-2.589l17.204,9.912L66.1,236.236%20c-2.468,6.706,0.708,14.362,7.373,16.901c6.766,2.579,14.221-0.819,16.719-7.596l20.744-56.69%20c2.569-7.009-0.293-14.827-6.766-18.529l-36.664-20.926l14.342-25.053l5.234,18.492c1.184,4.05,4.898,6.834,9.117,6.834h31.314%20c5.065,0.183,8.862-3.65,9.052-8.616C136.739,136.519,132.368,131.908,127.515,131.464z%20M190.205,60.283%20c16.823-6.387,25.937-24.044,22.136-41.086c-0.049,0.876-0.442,1.597-0.804,2.401c-2.273,5.056-8.353,7.364-13.409,5.09%20c-0.804-0.362-1.557-0.838-2.195-1.263c-5.544-4.565-13.392-6.16-20.387-3.504c-10.494,3.984-16.014,15.798-11.935,26.542%20C167.69,59.206,179.462,64.361,190.205,60.283z%20M253.942,204.308c0,0-4.046-64.753-29.837-88.016%20c-0.17-0.153-0.337-0.295-0.506-0.443V69.487l21.414-9.347c5.463-2.386,8.391-8.52,6.81-14.269L241.496,8.319%20c-1.258-4.578-5.99-7.268-10.569-6.01c-4.578,1.259-7.269,5.991-6.009,10.569l9.151,33.277l-18.992,8.29l-38.175,16.952%20c-7.452,3.31-12.559,10.408-13.325,18.525l-1.897,20.062l-22.306-12.783c-4.12-2.361-9.373-0.936-11.734,3.184%20c-2.361,4.12-0.935,9.373,3.184,11.734l30.013,17.2c1.772,1.016,3.736,1.526,5.703,1.526c1.805,0,3.612-0.429,5.275-1.29%20c3.478-1.801,5.775-5.204,6.146-9.106l1.797-19.007l8.947,20.92c0,0,1.934,13.718-22.757,31.354%20c-28.32,20.228-18.711,62.202-18.711,62.202s8.44-2.941,20.734-4.623v31.425c0.008,6.093,5.169,11.046,11.126,11.126%20c6.093-0.008,11.038-5.166,11.126-11.126v-32.395c4.144,0.236,8.392,0.733,12.656,1.583l-0.259,0.118l8.408,33.344%20c1.498,5.906,7.713,9.447,13.508,8.068c5.906-1.498,9.44-7.708,8.068-13.508l-6.186-24.531%20C250.962,216.192,253.942,204.308,253.942,204.308z'/%3e%3c/svg%3e";
const _imports_1$1 = "" + buildAssetsURL("drum.6DINpBNV.svg");
const _imports_2$1 = "" + buildAssetsURL("music.CKLFjvLE.svg");
const _imports_3$1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='acrobatic-2'%20data-name='Line%20Color'%20xmlns='http://www.w3.org/2000/svg'%20class='icon%20line-color'%3e%3cpath%20id='primary'%20d='M10.8,3l6.55,2.45a1,1,0,0,1,.36,1.65L15.8,9,13,8.05A1.13,1.13,0,0,0,12.64,8H8.58a1,1,0,0,0-.67.26L6,10'%20style='fill:%20none;%20stroke:%20rgb(0,%200,%200);%20stroke-linecap:%20round;%20stroke-linejoin:%20round;%20stroke-width:%202;'%3e%3c/path%3e%3cpath%20id='secondary-upstroke'%20d='M15.9,9.34l.18.66a4.21,4.21,0,0,1-2.86,5.17h0'%20style='fill:%20none;%20stroke:%20rgb(44,%20169,%20188);%20stroke-linecap:%20round;%20stroke-linejoin:%20round;%20stroke-width:%202;'%3e%3c/path%3e%3cpath%20id='primary-2'%20data-name='primary'%20d='M11,21h1a1,1,0,0,0,1-1V14'%20style='fill:%20none;%20stroke:%20rgb(0,%200,%200);%20stroke-linecap:%20round;%20stroke-linejoin:%20round;%20stroke-width:%202;'%3e%3c/path%3e%3ccircle%20id='primary-3'%20data-name='primary'%20cx='11'%20cy='14'%20r='2'%20style='fill:%20none;%20stroke:%20rgb(0,%200,%200);%20stroke-linecap:%20round;%20stroke-linejoin:%20round;%20stroke-width:%202;'%3e%3c/circle%3e%3c/svg%3e";
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="service" class="dark:bg-gray-100"><div><section class="max-w-8xl mx-auto container pt-16"><div><div role="contentinfo" class="flex items-center flex-col px-4"><div tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"> What we do </div></div><div tabindex="0" aria-label="group of cards" class="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"><div tabindex="0" aria-label="card 1" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"><div class="w-20 h-20 relative mr-5"><div class="absolute top-0 right-0 bg-pink-100 border-black rounded w-16 h-16 mt-2 mr-1"></div><div class="absolute bottom-0 left-0 bg-white rounded border border-red-500 w-16 h-16 flex items-center justify-center mt-2 mr-3"><img${ssrRenderAttr("src", _imports_0$4)} alt="African dance"></div></div><div class="w-10/12"><h2 tabindex="0" class="focus:outline-none text-lg font-bold leading-tight text-gray-800"> African Dance </h2><p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2"> We are well known for giving splendid display of pure african dance at both local and international events. </p></div></div><div tabindex="0" aria-label="card 2" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"><div class="w-20 h-20 relative mr-5"><div class="absolute top-0 right-0 bg-pink-100 border-black rounded w-16 h-16 mt-2 mr-1"></div><div class="absolute bottom-0 left-0 bg-white rounded border border-red-500 w-16 h-16 flex items-center justify-center mt-2 mr-3"><img${ssrRenderAttr("src", _imports_1$1)} alt="traditional songs"></div></div><div class="w-10/12"><h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"> Traditional Songs </h2><p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2"> We have a repertoire of traditional songs for all occasions. We perform such songs at events. </p></div></div><div tabindex="0" aria-label="card 3" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"><div class="w-20 h-20 relative mr-5"><div class="absolute top-0 right-0 bg-pink-100 border-black rounded w-16 h-16 mt-2 mr-1"></div><div class="absolute bottom-0 left-0 bg-white rounded border border-red-500 w-16 h-16 flex items-center justify-center mt-2 mr-3"><img${ssrRenderAttr("src", _imports_2$1)} alt="learn music"></div></div><div class="w-10/12"><h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"> Education and Workshop </h2><p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2"> We organise workshops to train individuals and groups on <strong>African Cultural Art</strong>. We have trained more many people, both the young and old in many countries. </p></div></div><div tabindex="0" aria-label="card 4" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"><div class="w-20 h-20 relative mr-5"><div class="absolute top-0 right-0 bg-pink-100 border-black rounded w-16 h-16 mt-2 mr-1"></div><div class="absolute bottom-0 left-0 bg-white rounded border border-red-500 w-16 h-16 flex items-center justify-center mt-2 mr-3"><img${ssrRenderAttr("src", _imports_3$1)} alt="acrobatics"></div></div><div class="w-10/12"><h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"> Acrobatics </h2><p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2"> We perform acrobatic dance at events. </p></div></div></div></div></section></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/feat.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Features = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$3 = "" + buildAssetsURL("W1.BXhe-NPf.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "gallery" }, _attrs))}><section class="dark:bg-gray-100"><div role="contentinfo" class="flex items-center flex-col px-4 py-5 mb-10"><div tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"> Gallery </div></div><div class="grid grid-cols-1 mx-2 md:px-2 md:grid-cols-2 lg:grid-cols-2 gap-4"><div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"><img${ssrRenderAttr("src", _imports_0$3)} alt="Img by Meri\xE7 Da\u011Fl\u0131 https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg"><div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg"><h2 class="text-xl font-semibold"> Dance Performance </h2><div class="mt-1 flex flex-wrap gap-1 text-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog/dance",
    class: "block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more `);
      } else {
        return [
          createTextVNode(" Learn more ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"><img${ssrRenderAttr("src", _imports_1$2)} alt="Img by Meri\xE7 Da\u011Fl\u0131 https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg"><div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg"><h2 class="text-xl font-semibold"> International Events </h2><div class="mt-1 flex flex-wrap gap-1 text-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog/intEvents",
    class: "block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more `);
      } else {
        return [
          createTextVNode(" Learn more ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"><img${ssrRenderAttr("src", _imports_2$2)} alt="Img by Meri\xE7 Da\u011Fl\u0131 https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg"><div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg"><h2 class="text-xl font-semibold"> Training &amp; Workshop </h2><div class="mt-1 flex flex-wrap gap-1 text-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog/workshop",
    class: "block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more `);
      } else {
        return [
          createTextVNode(" Learn more ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"><img${ssrRenderAttr("src", _imports_3$2)} alt="Img by Meri\xE7 Da\u011Fl\u0131 https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg"><div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg"><h2 class="text-xl font-semibold"> Acrobatics </h2><div class="mt-1 flex flex-wrap gap-1 text-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog/acrobatics",
    class: "block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more `);
      } else {
        return [
          createTextVNode(" Learn more ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/gall.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Gall = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = "" + buildAssetsURL("ak2.C5yBkVdz.webp");
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23c44e89'%20width='30px'%20height='30px'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.a{fill:none;stroke:%23000000;stroke-linecap:round;stroke-linejoin:round;}.b{fill:%23000000;}%3c/style%3e%3c/defs%3e%3ccircle%20class='a'%20cx='24'%20cy='24'%20r='21.5'/%3e%3cpath%20class='a'%20d='M32.2807,29.7009c1.112-.451,3.0916-1.0492,3.6872-.3272.6446.7814-.17,2.4769-.92,3.7942'/%3e%3cpath%20class='a'%20d='M11.7984,30.2234c1.7586,1.3965,6.9532,3.5343,12.4876,3.5343a17.0029,17.0029,0,0,0,10.1671-3.0789'/%3e%3cpath%20class='a'%20d='M20.4043,20.125v3.3a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2v-3.3'/%3e%3cline%20class='a'%20x1='24.4043'%20y1='23.425'%20x2='24.4043'%20y2='25.425'/%3e%3cpath%20class='a'%20d='M10.4,22.225a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v3.2'/%3e%3cline%20class='a'%20x1='10.4001'%20y1='20.225'%20x2='10.4001'%20y2='25.425'/%3e%3cpath%20class='a'%20d='M14.4,22.225a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v3.2'/%3e%3ccircle%20class='b'%20cx='31.88'%20cy='17.675'%20r='0.7'/%3e%3cline%20class='a'%20x1='31.88'%20y1='20.125'%20x2='31.88'%20y2='25.425'/%3e%3cpath%20class='a'%20d='M26.5407,24.9733a2.249,2.249,0,0,0,1.6448.4472h.4487a1.3236,1.3236,0,0,0,1.3222-1.325h0a1.3236,1.3236,0,0,0-1.3222-1.325h-.8974a1.3235,1.3235,0,0,1-1.3221-1.325h0a1.3235,1.3235,0,0,1,1.3221-1.325h.4487a2.2494,2.2494,0,0,1,1.6449.4472'/%3e%3cpath%20class='a'%20d='M37.6,24.4176a1.9991,1.9991,0,0,1-1.7366,1.0074h0a2,2,0,0,1-2-2v-1.3a2,2,0,0,1,2-2h0a1.9989,1.9989,0,0,1,1.7346,1.0039'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23c44e89'%20width='30px'%20height='30px'%20viewBox='0%200%2048%2048'%20id='b'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.c{stroke:%23000000;stroke-linecap:round;stroke-linejoin:round;}%3c/style%3e%3c/defs%3e%3ccircle%20class='c'%20cx='25.8'%20cy='15.3'%20r='3.3'/%3e%3ccircle%20class='c'%20cx='24.8'%20cy='31.8'%20r='4.1'/%3e%3cline%20class='c'%20x1='26'%20y1='12'%20x2='15.3'%20y2='10.8'/%3e%3cline%20class='c'%20x1='25.1'%20y1='27.7'%20x2='11.8'%20y2='26.2'/%3e%3cpath%20class='c'%20d='m29.4,22.6c5.5,0,10,4.5,10,10s-4.5,10-10,10H12.2c-2.1,0-3.6-1.9-3.2-4L16,6.6c.1-.6.7-1,1.3-1h11.8c4.7,0,8.4,3.8,8.4,8.5,0,4.5-3.5,8.3-8.1,8.5'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23c44e89'%20width='30px'%20height='30px'%20viewBox='0%200%20192%20192'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23000000'%20stroke-linecap='round'%20stroke-width='8'%20d='M140.672%20157.486a76.004%2076.004%200%200%201-102.464-12.128%2076.001%2076.001%200%200%201%20107.15-107.15%2076.004%2076.004%200%200%201%2012.128%20102.464'/%3e%3cpath%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='15'%20stroke-width='8'%20d='M124.807%20142.105a54.364%2054.364%200%201%201%2017.296-17.296'/%3e%3cpath%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='15'%20stroke-width='8'%20d='M95.997%20117.193c11.705%200%2021.193-9.488%2021.193-21.193%200-11.704-9.488-21.193-21.193-21.193-11.704%200-21.193%209.489-21.193%2021.193%200%2011.705%209.489%2021.193%2021.193%2021.193Z'/%3e%3cpath%20fill='%23000000'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='15'%20stroke-width='3.799'%20d='M95.997%2098.103a2.103%202.103%200%201%200%200-4.205%202.103%202.103%200%200%200%200%204.205Z'/%3e%3cpath%20fill='%23000000'%20d='m121.193%20121.196%2041.871%2041.625Z'/%3e%3cpath%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='15'%20stroke-width='12'%20d='m121.193%20121.196%2041.871%2041.625'/%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='30px'%20height='30px'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23ff80ff'%20stroke='%23ff80ff'%20stroke-width='0.624'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%3e%3cstyle%3e.a{fill:none;stroke:%23ff00ff;stroke-linecap:round;stroke-linejoin:round;}%3c/style%3e%3c/defs%3e%3ccircle%20class='a'%20cx='24'%20cy='24'%20r='14'/%3e%3cpath%20class='a'%20d='M31,24,19,31V17Z'/%3e%3ccircle%20class='a'%20cx='24'%20cy='24'%20r='21.5'/%3e%3c/g%3e%3c/svg%3e";
const _imports_5 = "" + buildAssetsURL("ak3.BFXlJ7Ff.webp");
const _imports_6 = "" + buildAssetsURL("ak4.SQ5tBvRH.webp");
const _imports_7 = "" + buildAssetsURL("ak1.DS3_IlgS.jpg");
const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const thumbsSwiper = ref(0);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Autoplay, FreeMode, Navigation, Thumbs]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "album" }, _attrs))} data-v-12265ced><div class="dark:bg-gray-100" data-v-12265ced><div class="max-w-8xl mx-auto container pt-16" data-v-12265ced><div role="contentinfo" class="flex items-center flex-col px-4 py-5 mb-10" data-v-12265ced><div tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4" data-v-12265ced> Our Albums </div></div>`);
  _push(ssrRenderComponent(_component_Swiper, {
    style: {
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff"
    },
    autoplay: {
      delay: 5e3,
      disableOnInteraction: true
    },
    "space-between": 10,
    navigation: true,
    thumbs: { swiper: $setup.thumbsSwiper.value },
    modules: $setup.modules,
    class: "mySwiper2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<section class="relative w-full bg-white" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt="Background Image" class="absolute inset-0 object-cover w-full h-full z-0" data-v-12265ced${_scopeId2}><div class="absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" data-v-12265ced${_scopeId2}></div><div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-v-12265ced${_scopeId2}><div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" data-v-12265ced${_scopeId2}><h1 class="text-3xl text-center font-extrabold sm:text-5xl" data-v-12265ced${_scopeId2}> Aklowa Djormo <strong class="block font-extrabold text-rose-700" data-v-12265ced${_scopeId2}> Cross Tradition </strong></h1><p class="mt-10 max-w-lg text-left sm:text-xl/relaxed" data-v-12265ced${_scopeId2}> Get the tracks on: </p><div class="mt-2 flex flex-nowrap align-center gap-4 text-center" data-v-12265ced${_scopeId2}><a href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="Amazon Music" class="w-6 h-6" data-v-12265ced${_scopeId2}></a><a href="https://www.boomplay.com/artists/2882588" class="block rounded-full bg-white text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="Boomplay" class="w-6 h-6" data-v-12265ced${_scopeId2}></a><a href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt="Qobuz" class="w-6 h-6" data-v-12265ced${_scopeId2}></a><a href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt="YouTube" class="w-6 h-6" data-v-12265ced${_scopeId2}></a></div></div></div></section>`);
            } else {
              return [
                createVNode("section", { class: "relative w-full bg-white" }, [
                  createVNode("img", {
                    src: _imports_0$2,
                    alt: "Background Image",
                    class: "absolute inset-0 object-cover w-full h-full z-0"
                  }),
                  createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                  createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                    createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                      createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                        createTextVNode(" Aklowa Djormo "),
                        createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Cross Tradition ")
                      ]),
                      createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                      createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                        createVNode("a", {
                          href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                          class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "Amazon Music",
                            class: "w-6 h-6"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.boomplay.com/artists/2882588",
                          class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "Boomplay",
                            class: "w-6 h-6"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            src: _imports_3,
                            alt: "Qobuz",
                            class: "w-6 h-6"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            src: _imports_4,
                            alt: "YouTube",
                            class: "w-6 h-6"
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<section class="relative w-full bg-white" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} alt="Background Image" class="absolute inset-0 object-cover w-full h-full z-0" data-v-12265ced${_scopeId2}><div class="absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" data-v-12265ced${_scopeId2}></div><div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-v-12265ced${_scopeId2}><div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" data-v-12265ced${_scopeId2}><h1 class="text-3xl text-center font-extrabold sm:text-5xl" data-v-12265ced${_scopeId2}> Aklowa Djormo <strong class="block font-extrabold text-rose-700" data-v-12265ced${_scopeId2}> Near and Far </strong></h1><p class="mt-10 max-w-lg text-left sm:text-xl/relaxed" data-v-12265ced${_scopeId2}> Get the tracks on: </p><div class="mt-2 flex flex-nowrap align-center gap-4 text-center" data-v-12265ced${_scopeId2}><a href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="text-primary"${ssrRenderAttr("src", _imports_1)} data-v-12265ced${_scopeId2}></a><a href="https://www.boomplay.com/artists/2882588" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_2)} data-v-12265ced${_scopeId2}></a><a href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_3)} data-v-12265ced${_scopeId2}></a><a href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_4)} data-v-12265ced${_scopeId2}></a></div></div></div></section>`);
            } else {
              return [
                createVNode("section", { class: "relative w-full bg-white" }, [
                  createVNode("img", {
                    src: _imports_5,
                    alt: "Background Image",
                    class: "absolute inset-0 object-cover w-full h-full z-0"
                  }),
                  createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                  createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                    createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                      createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                        createTextVNode(" Aklowa Djormo "),
                        createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Near and Far ")
                      ]),
                      createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                      createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                        createVNode("a", {
                          href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                          class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "text-primary",
                            src: _imports_1
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.boomplay.com/artists/2882588",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_2
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_3
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_4
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<section class="relative w-full bg-white" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt="Background Image" class="absolute inset-0 object-cover w-full h-full z-0" data-v-12265ced${_scopeId2}><div class="absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" data-v-12265ced${_scopeId2}></div><div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-v-12265ced${_scopeId2}><div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" data-v-12265ced${_scopeId2}><h1 class="text-3xl text-center font-extrabold sm:text-5xl" data-v-12265ced${_scopeId2}> Aklowa Drum Band <strong class="block font-extrabold text-rose-700" data-v-12265ced${_scopeId2}> Kpo keke </strong></h1><p class="mt-10 max-w-lg text-left sm:text-xl/relaxed" data-v-12265ced${_scopeId2}> Get the tracks on: </p><div class="mt-2 flex flex-nowrap align-center gap-4 text-center" data-v-12265ced${_scopeId2}><a href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="text-primary"${ssrRenderAttr("src", _imports_1)} data-v-12265ced${_scopeId2}></a><a href="https://www.boomplay.com/artists/2882588" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_2)} data-v-12265ced${_scopeId2}></a><a href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_3)} data-v-12265ced${_scopeId2}></a><a href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_4)} data-v-12265ced${_scopeId2}></a></div></div></div></section>`);
            } else {
              return [
                createVNode("section", { class: "relative w-full bg-white" }, [
                  createVNode("img", {
                    src: _imports_6,
                    alt: "Background Image",
                    class: "absolute inset-0 object-cover w-full h-full z-0"
                  }),
                  createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                  createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                    createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                      createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                        createTextVNode(" Aklowa Drum Band "),
                        createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Kpo keke ")
                      ]),
                      createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                      createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                        createVNode("a", {
                          href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                          class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "text-primary",
                            src: _imports_1
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.boomplay.com/artists/2882588",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_2
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_3
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_4
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<section class="relative w-full bg-white" data-v-12265ced${_scopeId2}><img${ssrRenderAttr("src", _imports_7)} alt="Background Image" class="absolute inset-0 object-cover w-full h-full z-0" data-v-12265ced${_scopeId2}><div class="absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" data-v-12265ced${_scopeId2}></div><div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-v-12265ced${_scopeId2}><div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" data-v-12265ced${_scopeId2}><h1 class="text-3xl text-center font-extrabold sm:text-5xl" data-v-12265ced${_scopeId2}> Aklowa Drum Band <strong class="block font-extrabold text-rose-700" data-v-12265ced${_scopeId2}> Hot African Drum Beat </strong></h1><p class="mt-10 max-w-lg text-left sm:text-xl/relaxed" data-v-12265ced${_scopeId2}> Get the tracks on: </p><div class="mt-2 flex flex-nowrap align-center gap-4 text-center" data-v-12265ced${_scopeId2}><a href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="text-primary"${ssrRenderAttr("src", _imports_1)} data-v-12265ced${_scopeId2}></a><a href="https://www.boomplay.com/artists/2882588" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_2)} data-v-12265ced${_scopeId2}></a><a href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_3)} data-v-12265ced${_scopeId2}></a><a href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ" class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" data-v-12265ced${_scopeId2}><img class="serv_img_2 text-primary"${ssrRenderAttr("src", _imports_4)} data-v-12265ced${_scopeId2}></a></div></div></div></section>`);
            } else {
              return [
                createVNode("section", { class: "relative w-full bg-white" }, [
                  createVNode("img", {
                    src: _imports_7,
                    alt: "Background Image",
                    class: "absolute inset-0 object-cover w-full h-full z-0"
                  }),
                  createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                  createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                    createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                      createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                        createTextVNode(" Aklowa Drum Band "),
                        createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Hot African Drum Beat ")
                      ]),
                      createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                      createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                        createVNode("a", {
                          href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                          class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "text-primary",
                            src: _imports_1
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.boomplay.com/artists/2882588",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_2
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_3
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                          class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        }, [
                          createVNode("img", {
                            class: "serv_img_2 text-primary",
                            src: _imports_4
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("section", { class: "relative w-full bg-white" }, [
                createVNode("img", {
                  src: _imports_0$2,
                  alt: "Background Image",
                  class: "absolute inset-0 object-cover w-full h-full z-0"
                }),
                createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                  createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                    createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                      createTextVNode(" Aklowa Djormo "),
                      createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Cross Tradition ")
                    ]),
                    createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                    createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                      createVNode("a", {
                        href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                        class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "Amazon Music",
                          class: "w-6 h-6"
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.boomplay.com/artists/2882588",
                        class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "Boomplay",
                          class: "w-6 h-6"
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "Qobuz",
                          class: "w-6 h-6"
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          src: _imports_4,
                          alt: "YouTube",
                          class: "w-6 h-6"
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("section", { class: "relative w-full bg-white" }, [
                createVNode("img", {
                  src: _imports_5,
                  alt: "Background Image",
                  class: "absolute inset-0 object-cover w-full h-full z-0"
                }),
                createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                  createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                    createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                      createTextVNode(" Aklowa Djormo "),
                      createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Near and Far ")
                    ]),
                    createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                    createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                      createVNode("a", {
                        href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                        class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "text-primary",
                          src: _imports_1
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.boomplay.com/artists/2882588",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_2
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_3
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_4
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("section", { class: "relative w-full bg-white" }, [
                createVNode("img", {
                  src: _imports_6,
                  alt: "Background Image",
                  class: "absolute inset-0 object-cover w-full h-full z-0"
                }),
                createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                  createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                    createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                      createTextVNode(" Aklowa Drum Band "),
                      createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Kpo keke ")
                    ]),
                    createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                    createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                      createVNode("a", {
                        href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                        class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "text-primary",
                          src: _imports_1
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.boomplay.com/artists/2882588",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_2
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_3
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_4
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("section", { class: "relative w-full bg-white" }, [
                createVNode("img", {
                  src: _imports_7,
                  alt: "Background Image",
                  class: "absolute inset-0 object-cover w-full h-full z-0"
                }),
                createVNode("div", { class: "absolute bg-white/75 bg-opacity-70 w-full h-full sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
                createVNode("div", { class: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" }, [
                  createVNode("div", { class: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" }, [
                    createVNode("h1", { class: "text-3xl text-center font-extrabold sm:text-5xl" }, [
                      createTextVNode(" Aklowa Drum Band "),
                      createVNode("strong", { class: "block font-extrabold text-rose-700" }, " Hot African Drum Beat ")
                    ]),
                    createVNode("p", { class: "mt-10 max-w-lg text-left sm:text-xl/relaxed" }, " Get the tracks on: "),
                    createVNode("div", { class: "mt-2 flex flex-nowrap align-center gap-4 text-center" }, [
                      createVNode("a", {
                        href: "https://music.apple.com/us/artist/aklowa-drum-band/1397843030",
                        class: "block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "text-primary",
                          src: _imports_1
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.boomplay.com/artists/2882588",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_2
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_3
                        })
                      ]),
                      createVNode("a", {
                        href: "https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ",
                        class: "block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                      }, [
                        createVNode("img", {
                          class: "serv_img_2 text-primary",
                          src: _imports_4
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Swiper, {
    onSwiper: $setup.setThumbsSwiper,
    "space-between": 10,
    "slides-per-view": 4,
    "free-mode": true,
    "watch-slides-progress": true,
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$2)} data-v-12265ced${_scopeId2}>`);
            } else {
              return [
                createVNode("img", { src: _imports_0$2 })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_5)} data-v-12265ced${_scopeId2}>`);
            } else {
              return [
                createVNode("img", { src: _imports_5 })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_6)} data-v-12265ced${_scopeId2}>`);
            } else {
              return [
                createVNode("img", { src: _imports_6 })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_7)} data-v-12265ced${_scopeId2}>`);
            } else {
              return [
                createVNode("img", { src: _imports_7 })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: _imports_0$2 })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: _imports_5 })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: _imports_6 })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: _imports_7 })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Alb/Albums.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Album = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-12265ced"]]);
const _imports_0$1 = "" + buildAssetsURL("Ben22.BdUK9TKZ.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "team" }, _attrs))}><section class="py-6 dark:bg-gray-100 dark:text-gray-800"><div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10"><h1 class="text-4xl font-bold leading-none text-center sm:text-5xl"> The talented people behind the scenes </h1><div class="flex flex-row flex-wrap-reverse justify-center mt-8"><div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100"><img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"${ssrRenderAttr("src", _imports_0$1)}><div class="flex-1 my-4"><p class="text-xl font-semibold leading-snug"> Benjamin Borketey </p><p>Band Leader</p></div><div class="flex items-center justify-center p-3 space-x-3 border-t-2"><a rel="noopener noreferrer" href="#" title="Email" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></a><a rel="noopener noreferrer" href="#" title="Twitter" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path></svg></a><a rel="noopener noreferrer" href="#" title="LinkedIn" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5"><path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path></svg></a><a rel="noopener noreferrer" href="#" title="GitHub" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg></a></div></div><div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100"><img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4"><div class="flex-1 my-4"><p class="text-xl font-semibold leading-snug"> Leroy Jenkins </p><p>Visual Designer</p></div><div class="flex items-center justify-center p-3 space-x-3 border-t-2"><a rel="noopener noreferrer" href="#" title="Email" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></a><a rel="noopener noreferrer" href="#" title="Twitter" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path></svg></a><a rel="noopener noreferrer" href="#" title="LinkedIn" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5"><path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path></svg></a><a rel="noopener noreferrer" href="#" title="GitHub" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg></a></div></div><div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100"><img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5"><div class="flex-1 my-4"><p class="text-xl font-semibold leading-snug"> Leroy Jenkins </p><p>Visual Designer</p></div><div class="flex items-center justify-center p-3 space-x-3 border-t-2"><a rel="noopener noreferrer" href="#" title="Email" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></a><a rel="noopener noreferrer" href="#" title="Twitter" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path></svg></a><a rel="noopener noreferrer" href="#" title="LinkedIn" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5"><path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path></svg></a><a rel="noopener noreferrer" href="#" title="GitHub" class="dark:text-gray-50 hover:dark:text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg></a></div></div></div></div></section></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/ourTeam.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Team = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("contact.B5m2RqnZ.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))}><div class="grid w-full grid-cols-1 gap-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800"><div class="flex flex-col md:flex-row mx-2 bg-red-100 rounded justify-between"><div class="md:w-1/2 space-y-2 mx-2 px-2"><h2 class="text-4xl font-bold leading-tight lg:text-5xl"> Let&#39;s talk! </h2><div class="dark:text-gray-600"> We are at your service </div><div class="space-y-4 pl-4"><p class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg><span>Fake address, 9999 City</span></p><p class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z"></path></svg><span>+61 42 34 20 46 5</span></p><p class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg><span>aklowadrumz@gmail.com</span></p></div></div><div class="md:w-1/2"><img${ssrRenderAttr("src", _imports_0)} alt="" class="p-6 h-auto md:h-96"></div></div><form class="space-y-6 mx-5"><div><label for="name" class="text-sm">Full name</label><input id="name" type="text" placeholder="" class="w-full p-3 border border-black rounded dark:bg-gray-100"></div><div><label for="email" class="text-sm">Email</label><input id="email" type="email" class="w-full p-3 rounded border border-black dark:bg-gray-100"></div><div><label for="message" class="text-sm">Message</label><textarea id="message" rows="3" class="w-full p-3 rounded border border-black dark:bg-gray-100"></textarea></div><button type="submit" class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-rose-600 dark:text-gray-50"> Send Message </button></form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/contactUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "px-4 divide-y dark:bg-blue-100 dark:text-gray-800" }, _attrs))}><div class="container flex flex-col justify-between py-1 mx-auto space-y-8 lg:flex-row lg:space-y-0"><div class="lg:w-1/3"><a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start"><div class="flex items-center justify-center w-25 h-25 rounded-full"><img class="h-20"${ssrRenderAttr("src", _imports_0$7)} alt="Aklowa Logo"></div><span class="self-center text-2xl font-semibold">Aklowa Drum Band</span></a></div><div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4"><div class="space-y-3 col-end-7 col-span-2"><div class="uppercase dark:text-gray-900"> Social media </div><div class="flex justify-start space-x-3"><a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current"><path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path></svg></a><a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path></svg></a><a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current"><path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path></svg></a></div></div></div></div><div class="py-3 text-sm text-center"> \xA9 2024 Aklowa Drum Band. All rights reserved. </div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/foot/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Headers, null, null, _parent));
      _push(ssrRenderComponent(About, null, null, _parent));
      _push(ssrRenderComponent(Features, null, null, _parent));
      _push(ssrRenderComponent(Gall, null, null, _parent));
      _push(ssrRenderComponent(Album, null, null, _parent));
      _push(ssrRenderComponent(Team, null, null, _parent));
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ExY_dENr.mjs.map
