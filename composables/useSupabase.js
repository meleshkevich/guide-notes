import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlemZlcmVteXR1dmR3eWtuenhnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Nzk0MjIyMSwiZXhwIjoxOTgzNTE4MjIxfQ.ZbcRyTMQTOj1wlYA24J8tGSrv3q_KER-szPl3NlsC5g";
const SUPABASE_URL = "https://gezferemytuvdwyknzxg.supabase.co";
const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return {
    supabase,
  };
};
export default useSupabase;
