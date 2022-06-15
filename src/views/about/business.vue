<template>
  <div>
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-[3.75rem]"></div>
    <!-- 経営理念
    <div class="space-y-8">
      <div class="mt-[3.75rem] flex items-center space-x-2.5">
        <div class="w-1 h-[1.63rem] bg-blue-500 rounded-sm" />
        <p class="text-2xl">経営理念</p>
      </div>
      <p class="text-sm leading-[1.88rem] font-light">
        ここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに
        経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書くここに経営理念を書く
      </p>
    </div>
    -->
    <!-- 社名の由来
    <div class="space-y-8">
      <div class="mt-[3.75rem] flex items-center space-x-2.5">
        <div class="w-1 h-[1.63rem] bg-blue-500 rounded-sm" />
        <p class="text-2xl">社名の由来</p>
      </div>
      <p class="text-sm leading-[1.88rem] font-light">
        ここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書く

        ここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書くここに社名の由来を書く

        ここに社名の由来を書くここに社名の由来を書く
      </p>
    </div>
    -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
const msg = ref({})
api.get('/article/getDetailByTitle', { title: '经营理念' }).then((res) => {
  Object.assign(msg.value, res.data.data)
})
</script>