<template>
  <div class="container">
    <h2>Welcome, admin</h2>
    <div class="card-container">
      <NotesForm />
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="sailing" label="Sailing" width="180" />
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="type" label="Type" width="100" />
        <el-table-column prop="service" label="Service" />
        <el-table-column label="Operations">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
const { supabase } = useSupabase();
const { user } = useAuth();
const tableData = ref([]);
// const notesResponse = ref([]);
definePageMeta({ middleware: "auth" });
if (process.client) {
  const notesResponse = await supabase.from("notes").select();
  // show notes from current user
  // .from("notes")
  // .select()
  // .eq("user_id", user.value.id);

  // show all notes from DB
  notesResponse.data.forEach((el) => {
    tableData.value.push({
      sailing: el.sailing,
      date: el.date,
      type: el.type,
      service: el.service,
    });
  });
}
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
