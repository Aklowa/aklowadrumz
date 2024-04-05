import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("aklowa_logo.CwJrAolC.svg");
const _sfc_main = {
  __name: "logo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-wrap items-center justify-between" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><img class="h-20 lg:ml-10"${ssrRenderAttr("src", _imports_0)} alt="Aklowa Logo"${_scopeId}><p class="main_text text-black"${_scopeId}><span${_scopeId}>A</span><span${_scopeId}>K</span><span${_scopeId}>L</span><span${_scopeId}>O</span><span${_scopeId}>W</span><span${_scopeId}>A</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("img", {
                  class: "h-20 lg:ml-10",
                  src: _imports_0,
                  alt: "Aklowa Logo"
                }),
                createVNode("p", { class: "main_text text-black" }, [
                  createVNode("span", null, "A"),
                  createVNode("span", null, "K"),
                  createVNode("span", null, "L"),
                  createVNode("span", null, "O"),
                  createVNode("span", null, "W"),
                  createVNode("span", null, "A")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const logo = _sfc_main;

export { _imports_0 as _, logo as l };
//# sourceMappingURL=logo-CNU-nTlX.mjs.map
