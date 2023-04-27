<template>
  <div class="container">
    <h2>Welcome, admin</h2>
    <div class="card-container">
      <NotesForm />
    </div>
  </div>
</template>
<script setup>
definePageMeta({ middleware: "auth" });
</script>
<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  height: 90vh;
}
h3 {
  font-size: 2rem;
}

.card-container {
  margin-top: 1rem;
}
</style>
