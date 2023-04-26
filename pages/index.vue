<script setup>
const { isLoggedIn } = useAuth();
const { supabase } = useSupabase();
// TODO: UI library: https://louismazel.github.io/maz-ui/
// TODO: create .env with DB credentials
</script>
<template>
  <div>
    <div class="container">
      <div v-if="isLoggedIn()">
        <h1>welcome, user!</h1>
      </div>
      <div v-else>
        <AuthCard />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
