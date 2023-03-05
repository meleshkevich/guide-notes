import { a as useState, u as useRouter, n as navigateTo } from './server.mjs';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlemZlcmVteXR1dmR3eWtuenhnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Nzk0MjIyMSwiZXhwIjoxOTgzNTE4MjIxfQ.ZbcRyTMQTOj1wlYA24J8tGSrv3q_KER-szPl3NlsC5g";
const SUPABASE_URL = "https://gezferemytuvdwyknzxg.supabase.co";
const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return {
    supabase
  };
};
const useAuth = () => {
  const user = useState("user", () => null);
  useRouter();
  const { supabase } = useSupabase();
  supabase.auth.onAuthStateChange((e, session) => {
    user.value = (session == null ? void 0 : session.user) || null;
  });
  const signUp = async ({ email, password, ...metadata }) => {
    const { user: u, error } = await supabase.auth.signUp(
      {
        email,
        password
      },
      {
        data: metadata
      }
    );
    if (error)
      throw error;
    return u;
  };
  const signIn = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error)
      throw error;
    return u;
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw error;
    navigateTo("/");
  };
  const isLoggedIn = () => {
    return !!user.value;
  };
  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn
  };
};

export { useSupabase as a, useAuth as u };
//# sourceMappingURL=useAuth.350c094b.mjs.map
