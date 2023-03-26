<template>
  <div>
    <!-- flex -->
    <div bg="dark-600" text="white xl" font="mono" p="4" flex="~" gap="5">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/chat">Chat</NuxtLink>
    </div>
    <NuxtPage m="4" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Template',
  bodyAttrs: {
    class: 'bg-blue-50'
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt Template'
    }
  ]
})
</script>
