<template>
  <div>
    <div class="container">
      <h3>Available services</h3>

      <div class="card-container">
        <el-card class="card">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="sailing" label="Sailing" width="180" />
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="type" label="Type" width="100" />
            <el-table-column prop="service" label="Service" width="200" />
            <el-table-column label="Operations">
              <el-button size="small" @click="handleSelect($event.target)"
                >Select</el-button
              >
            </el-table-column>
          </el-table>
        </el-card>
      </div>
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
const handleSelect = async (e) => {
  // await supabase.from("notes").delete().eq("id", e);
  console.log(e, "handleSelect");
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
