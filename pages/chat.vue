<template>
  <div>
    <input v-model="message" border="1 dark-400" rounded="xl" p="2" />
    <button p="2" @click="sendMessage" v-text="'Send'" />
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
const { send } = useChatgpt()
const data = ref('')

const message = ref('')
async function sendMessage() {
  const response = await send(message.value)
  data.value = response
}
</script>

<style scoped></style>
