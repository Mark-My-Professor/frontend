<template>
  <div>
    <input v-model="message" border="1 dark-400" rounded="xl" p="2" />
    <button p="2" @click="sendMessage" v-text="'Send'" />
    <div>{{ lastAnswer }}</div>
    <div v-for="answer in answers" :key="answer">{{ answer }}</div>
  </div>
</template>

<script setup lang="ts">
const { send, lastAnswer, answers } = useStore()

const message = ref('')

// send message to store
const sendMessage = () => {
  send(message.value)
  message.value = ''
}
</script>

<style scoped></style>
