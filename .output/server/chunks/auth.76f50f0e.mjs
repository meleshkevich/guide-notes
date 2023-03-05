import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useAuth } from './useAuth.350c094b.mjs';
import 'vue';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'vue-router';
import 'vue/server-renderer';
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

const auth = defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn()) {
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth.76f50f0e.mjs.map
