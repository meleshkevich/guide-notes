import { useSSRContext, defineComponent, mergeProps, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, ref, reactive, createTextVNode, toDisplayString, withDirectives, vModelText } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRouter, n as navigateTo } from './server.mjs';
import { u as useAuth, a as useSupabase } from './useAuth.350c094b.mjs';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@supabase/supabase-js';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "n-card n-card-base" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NIcon",
  __ssrInlineRender: true,
  props: {
    icon: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["n-icon", __props.icon]
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NButton",
  __ssrInlineRender: true,
  props: {
    to: null,
    icon: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NIcon = _sfc_main$3;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.to ? "a" : "button"), mergeProps({
        href: __props.to,
        class: "n-button n-transition n-button-base hover:n-button-hover active:n-button-active focus-visible:n-focus-base n-disabled:n-disabled"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
              if (__props.icon) {
                _push2(ssrRenderComponent(_component_NIcon, {
                  icon: __props.icon,
                  class: "n-button-icon"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                __props.icon ? (openBlock(), createBlock(_component_NIcon, {
                  key: 0,
                  icon: __props.icon,
                  class: "n-button-icon"
                }, null, 8, ["icon"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  setup(__props) {
    const authState = ref("login");
    const authError = ref("");
    const showEmailConfirmMessage = ref(false);
    const input = reactive({
      password: "",
      email: ""
    });
    useRouter();
    const { signUp, signIn, signOut, user } = useAuth();
    const toggleAuthState = () => {
      if (authState.value === "login")
        authState.value = "singup";
      else
        authState.value = "login";
      authError.value = "";
    };
    const handleSubmit = async () => {
      try {
        if (authState.value == "login") {
          await signIn({ email: input.email, password: input.password });
          navigateTo("/profile");
          console.log("loggedin user::", user);
        } else {
          await signUp({ email: input.email, password: input.password });
          showEmailConfirmMessage.value = true;
        }
        input.email = "", input.password = "";
      } catch (err) {
        authError.value = err.message;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NCard = __nuxt_component_0$1;
      const _component_NButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0c8818ef>`);
      _push(ssrRenderComponent(_component_NCard, { class: "card" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!showEmailConfirmMessage.value) {
              _push2(`<div data-v-0c8818ef${_scopeId}><h3 data-v-0c8818ef${_scopeId}>${ssrInterpolate(authState.value)}</h3><div class="input-container" data-v-0c8818ef${_scopeId}><input${ssrRenderAttr("value", input.email)} placeholder="Email" data-v-0c8818ef${_scopeId}><input${ssrRenderAttr("value", input.password)} placeholder="Password" type="password" data-v-0c8818ef${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_NButton, { onClick: handleSubmit }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Submit`);
                  } else {
                    return [
                      createTextVNode("Submit")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (authError.value) {
                _push2(`<p class="error" data-v-0c8818ef${_scopeId}>${ssrInterpolate(authError.value)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p data-v-0c8818ef${_scopeId}>${ssrInterpolate(authState.value === "login" ? "Dont have an account? Create one now!" : "Already have an account ? go ahead and login!")}</p></div>`);
            } else {
              _push2(`<div data-v-0c8818ef${_scopeId}><h3 data-v-0c8818ef${_scopeId}>Check your mail for confirmation message</h3></div>`);
            }
          } else {
            return [
              !showEmailConfirmMessage.value ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("h3", null, toDisplayString(authState.value), 1),
                createVNode("div", { class: "input-container" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => input.email = $event,
                    placeholder: "Email"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, input.email]
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => input.password = $event,
                    placeholder: "Password",
                    type: "password"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, input.password]
                  ])
                ]),
                createVNode(_component_NButton, { onClick: handleSubmit }, {
                  default: withCtx(() => [
                    createTextVNode("Submit")
                  ]),
                  _: 1
                }),
                authError.value ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "error"
                }, toDisplayString(authError.value), 1)) : createCommentVNode("", true),
                createVNode("p", { onClick: toggleAuthState }, toDisplayString(authState.value === "login" ? "Dont have an account? Create one now!" : "Already have an account ? go ahead and login!"), 1)
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("h3", null, "Check your mail for confirmation message")
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0c8818ef"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabase();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0a115f30><div class="container" data-v-0a115f30>`);
      _push(ssrRenderComponent(_component_AuthCard, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a115f30"]]);

export { index as default };
//# sourceMappingURL=index.9be83e10.mjs.map
