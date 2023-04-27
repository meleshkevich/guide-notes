<template>
  <div>
    <div class="container">
      <h3>Available services</h3>

      <div class="card-container" v-if="notesResponse.data">
        <el-card class="card" v-for="note in notesResponse.data" :key="note.id">
          <h2>{{ note.sailing }}</h2>
          <p>{{ note.date }}</p>
          <p>{{ note.type }}</p>
          <p>{{ note.service }}</p>
          <p class="delete" @click="deleteNote(note.id)">X - delete</p>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup>
const { supabase } = useSupabase();
const { user } = useAuth();
const notesResponse = ref({});
definePageMeta({ middleware: "auth" });
if (process.client) {
  notesResponse.value = await supabase;
  // show notes from current user
  // .from("notes")
  // .select()
  // .eq("user_id", user.value.id);

  // show all notes from DB
  notesResponse.value = await supabase.from("notes").select();
}
const deleteNote = async (e) => {
  await supabase.from("notes").delete().eq("id", e);
  console.log(e, "delete note");
};
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
.card {
  margin-top: 1rem;
  padding: 1rem;
}
.card h2 {
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}
.delete {
  cursor: pointer;
}
.delete:hover {
  color: red;
}
</style>
