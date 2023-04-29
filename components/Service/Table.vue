<template>
  <el-card class="card">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="sailing" label="Sailing" width="150" />
      <el-table-column prop="date" label="Date" width="100" />
      <el-table-column prop="type" label="Type" width="100" />
      <el-table-column prop="service" label="Service" width="150" />
      <el-table-column prop="assigned_to" label="Guide" width="150" />
      <el-table-column label="Operations">
        <el-button
          class="select-btn"
          size="small"
          @click="handleSelect($event.target)"
          >Select</el-button
        >

        <el-button
          v-if="isAdmin"
          class="delete-btn"
          size="small"
          type="danger"
          @click="handleDelete($event.target)"
          >Delete
        </el-button>
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

const fetchData = async () => {
  tableData.value = [];
  const notesResponse = await supabase.from("notes").select();
  // show notes from current user
  // .from("notes")
  // .select()
  // .eq("user_id", user.value.id);

  // show all notes from DB
  notesResponse.data.forEach((el) => {
    tableData.value.push({
      id: el.id,
      sailing: el.sailing,
      date: el.date,
      type: el.type,
      service: el.service,
      assigned_to: el.assigned_to,
    });
  });
};

if (process.client) {
  const notesResponse = await supabase.from("notes").select();
  // show notes from current user
  // .from("notes")
  // .select()
  // .eq("user_id", user.value.id);

  // show all notes from DB
  notesResponse.data.forEach((el) => {
    tableData.value.push({
      id: el.id,
      sailing: el.sailing,
      date: el.date,
      type: el.type,
      service: el.service,
      assigned_to: el.assigned_to,
    });
  });
}

onMounted(() => {
  setTimeout(() => {
    setRowsIndexes();
    console.log(tableData.value, "tableData.value");
  }, 0);
});

const setRowsIndexes = () => {
  let selectBtns = document.querySelectorAll(".select-btn");
  let deleteBtns = document.querySelectorAll(".delete-btn");
  selectBtns.forEach((btn, i) => {
    btn.setAttribute("row", i);
  });
  deleteBtns.forEach((btn, i) => {
    btn.setAttribute("row", i);
  });
};

const handleSelect = async (e) => {
  // await supabase.from("notes").delete().eq("id", e);
  console.log(e, "handleSelect");
};
const handleDelete = async (e) => {
  const rowIndex = e.parentNode.getAttribute("row");
  const id = tableData.value[rowIndex].id;
  await supabase.from("notes").delete().eq("id", id);
  fetchData();
};
</script>
<style scoped>
.card {
  margin-top: 1rem;
  padding: 1rem;
}
</style>
