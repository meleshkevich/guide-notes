<template>
  <el-card class="card">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="sailing" label="Sailing" width="180" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="type" label="Type" width="100" />
      <el-table-column prop="service" label="Service" />
      <el-table-column label="Operations">
        <el-button size="small" @click="handleSelect()">Select</el-button>
        <el-button
          v-if="isAdmin"
          size="small"
          type="danger"
          @click="handleDelete()"
          >Delete</el-button
        >
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script setup>
const { supabase } = useSupabase();
const { user } = useAuth();
const { isAdmin, userData } = useUser();
const tableData = ref([]);

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
const handleDelete = async (e) => {
  // await supabase.from("notes").delete().eq("id", e);
  console.log(e, "handleDelete");
};
</script>
<style scoped>
.card {
  margin-top: 1rem;
  padding: 1rem;
}
</style>
