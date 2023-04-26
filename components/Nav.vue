<script setup>
const { signOut, isLoggedIn, user } = useAuth();
</script>
<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/"> Home </NuxtLink>
      </li>
      <li v-if="isLoggedIn()"><NuxtLink to="/profile"> Profile </NuxtLink></li>
      <li v-if="isLoggedIn()" class="logout" @click="signOut">
        Logout, {{ user.identities[0].identity_data.email }}
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: black;
  height: 10vh;
}
ul {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 2rem;
}
li {
  color: white;
  margin-right: 1rem;
}
.logout {
  margin-left: auto;
  cursor: pointer;
}
</style>
