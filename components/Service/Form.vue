<template>
  <el-card class="card">
    <el-input
      class="card-input"
      v-model="notesInput.sailing"
      placeholder="Sailing"
    />
    <!-- <el-input
      class="card-input"
      v-model="notesInput.date"
      placeholder="Date"
    ></el-input> -->
    <el-date-picker
      v-model="notesInput.date"
      type="date"
      placeholder="Pick a day"
      size="default"
    />
    <el-input
      class="card-input"
      v-model="notesInput.type"
      placeholder="Type"
    ></el-input>
    <el-input
      class="card-input"
      v-model="notesInput.service"
      placeholder="Service"
    ></el-input>
    <el-button type="primary" @click="handleSubmit">Add service</el-button>
  </el-card>
</template>
<script setup>
const notesInput = reactive({
  sailing: "",
  date: "",
  type: "",
  service: "",
});

const { supabase } = useSupabase();
const { user } = useAuth();

const handleSubmit = async () => {
  if (!notesInput.sailing || !notesInput.service) return;
  await supabase.from("notes").insert({
    sailing: notesInput.sailing,
    date: notesInput.date,
    type: notesInput.type,
    service: notesInput.service,
    user_id: user.value.id,
  });
  (notesInput.sailing = ""),
    (notesInput.date = ""),
    (notesInput.type = ""),
    (notesInput.service = "");
};
</script>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;

  /* flex-direction: row; */
}
.card-input {
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}
</style>
