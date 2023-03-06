<script lang="ts" setup>
const notesInput = reactive({
  title: "",
  note: "",
});
</script>
<template>
  <NCard class="card">
    <input v-model="notesInput.title" placeholder="Notes title" />
    <textarea v-model="notesInput.note" placeholder="My notes"></textarea>
    <NButton>Save notes</NButton>
  </NCard>
</template>
<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
input,
textarea {
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
</style>
