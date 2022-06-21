<template>
  <div>
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-[3.75rem]" />
    <!-- 会社の紹介
    <div class="mt-[3.75rem] flex items-center space-x-2.5">
      <div class="w-1 h-[1.63rem] bg-blue-500 rounded-sm" />
      <p class="text-2xl">会社の紹介</p>
    </div>
    <div class="mt-8 text-sm leading-[1.88rem] font-light">
      <p>
        日本HSD国際株式会社は2019年4月に設立されました。本社は福岡にあります。主に医薬品、健康食品、医療機器を取り扱う会社です。主に深海の粋、美体つき、生命の源、肝臓エキス、目守りなど10種類以上の健康シリーズを携わっています。20種類以上のヘルスケア製品もあります。及び腰専門と八味丸などの日本の売れ筋医薬品も販売しています。また常に新しい健康食品を開発しており、医療機器としては、血圧モニター、血糖値測定器、呼吸器機械および高齢者医療機器などの小型医療機器を経営しています。それは人々の健康のために、高品質で先進的な健康製品を提供することを目的としています。
      </p>
      <p>
        2021年に当社は、すべての医薬品、医療機器を取り扱うことができる「医薬品販売業許可証」を取得し、同年、香港のHSE-INT NETWORK LIMITEDと戦略の契約を締結しました。唯一の医薬品サプライヤーとして、HSE-INT NETWORK LIMITEDにすべてのサービスを提供します。
      </p>
      <p>
        弊社は、薬剤師、医薬品登録販売業者、医療専門家の翻訳者など、医療分野を専門とする多数の担当者がおり、医薬品と健康的な食品の消費に関する幅広いオンライン相談サービスを顧客に提供できます。
      </p>
      <p>
        会社設立以来、安全で信頼できる日本の医薬品や医療機器をパートナーに提供するために、いくつかの外国企業と戦略的パートナーシップを結び、エンドユーザーはアジアのいくつかの国にいます。
      </p>
    </div>
    -->
    <!-- 会社概要
    <div class="mt-14 flex items-center space-x-2.5">
      <div class="w-1 h-[1.63rem] bg-blue-500 rounded-sm" />
      <p class="text-2xl">会社概要</p>
    </div>
    <table class="table-auto mt-[1.88rem] w-full">
      <tbody>
        <tr>
          <td class="td-title">商号</td>
          <td>HSD国際株式会社</td>
        </tr>
        <tr>
          <td class="td-title">本店</td>
          <td>崎玉県さいたま市見沼区東門前45-1</td>
        </tr>
        <tr>
          <td class="td-title">会社成立の年月日</td>
          <td>平成31年4月11日</td>
        </tr>
        <tr>
          <td class="td-title">代表者</td>
          <td>徐匯勇</td>
        </tr>
        <tr>
          <td class="td-title">本社所在地</td>
          <td>崎玉県さいたま市見沼区東門前45-1崎玉県さいたま市見沼区東門前45-1</td>
        </tr>
        <tr>
          <td class="td-title">資本金</td>
          <td>500万円</td>
        </tr>
      </tbody>
    </table>
     -->
    <!-- 組織図
    <div class="mt-14 flex items-center space-x-2.5">
      <div class="w-1 h-[1.63rem] bg-blue-500 rounded-sm" />
      <p class="text-2xl">組織図</p>
    </div>
    <div class="mt-[2.31rem] w-full h-[40.19rem] bg-red-200" />
    -->
  </div>
</template>


<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const msg = ref({})

api.get('/aboutus/getDetail', { title: t('message.aboutCompany') }).then((res) => {
  Object.assign(msg.value, res.data.data)
  setTimeout(() => emitter.emit('changeLoadingState', false), 50)
})
</script>

<style scoped>
td {
  @apply border text-base p-4
}
.td-title {
  @apply font-bold bg-gray-300 w-56
}
</style>