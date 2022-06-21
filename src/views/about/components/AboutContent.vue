<template>
  <div v-loading="showLoading">
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-[3.75rem]"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  text: String
})
const showLoading = ref(true)
const msg = ref({})
api.get('/aboutus/getDetail', { title: t(props.text) }).then((res) => {
  if(res.data.code === 20000) Object.assign(msg.value, res.data.data)
  setTimeout(() => showLoading.value = false, 50)
})
</script>