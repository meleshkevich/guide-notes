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

// const tableData = [
//   {
//     date: "2016-05-03",
//     name: "Tom",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "2016-05-02",
//     name: "Tom2",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "2016-05-04",
//     name: "Tom3",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "2016-05-01",
//     name: "Tom4",
//     address: "No. 189, Grove St, Los Angeles",
//   },
// ];
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
