<template>
  <el-card class="card">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="sailing" label="Sailing" width="150" />
      <el-table-column prop="date" label="Date" width="100" />
      <el-table-column prop="type" label="Type" width="100" />
      <el-table-column prop="service" label="Service" width="150" />

      <el-table-column
        v-if="isAdmin"
        prop="assigned_to"
        label="Guide"
        width="150"
      />
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
  notesResponse.data.forEach(async (el) => {
    const res = await supabase
      .from("users")
      .select()
      .eq("user_id", el.assigned_to);
    const guideName = `${res.data[0].first_name} ${res.data[0].last_name}`;
    console.log(guideName, "res");
    tableData.value.push({
      id: el.id,
      sailing: el.sailing,
      date: el.date,
      type: el.type,
      service: el.service,
      assigned_to: guideName,
    });
  });
}

onMounted(() => {
  setTimeout(() => {
    setRowsIndexes();
    guideName();
    console.log(tableData.value, "tableData.value");
  }, 0);
});

const guideName = async () => {
  const uuid = "5ef9d62d-5162-439e-9760-d5f2e265d853";
  const res = await supabase.from("users").select().eq("user_id", uuid);

  console.log(res.data[0].first_name, "notesResponse guide name");
  return "completed guide name";
};

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

  const rowIndex = e.parentNode.getAttribute("row");
  const id = tableData.value[rowIndex].id;
  await supabase
    .from("notes")
    .update({
      assigned_to: user.value.id,
    })
    .eq("id", id);
  fetchData();
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
