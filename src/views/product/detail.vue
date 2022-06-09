<template>
  <main>
    <section class="px-[25.5rem] border-b-[0.5rem] border-b-primary">
      <div class="py-20 flex justify-center space-x-[3.75rem]">
        <div class="w-[25.13rem] h-[25.13rem] rounded flex-shrink-0 bg-gray-500"></div>
        <div class="flex-grow">
          <div class="w-[8.75rem] h-10 border border-primary rounded leading-9 text-primary text-center">第三類医薬品</div>
          <h1 class="mt-7 text-[2rem] font-bold">ローヤルゼリー体制改善錠剤</h1>
          <h3 class="mt-4 text-2xl font-bold">保健製品</h3>
          <div class="mt-12">
            <div class="grid grid-cols-2 border-b">
              <div class="col-span-1 bg-gray-100 text-lg text-center leading-[3rem]">単一製品の容量</div>
              <div class="col-span-1 bg-gray-100 text-lg text-center leading-[3rem] border-l border-gray">メーカー</div>
              <div class="col-span-1 text-lg text-center leading-[3rem]">500mg</div>
              <div class="col-span-1 text-lg text-center leading-[3rem] border-l border-gray-200">HSD国際株式会社</div>
            </div>
          </div>
          <div class="mt-12 flex space-x-10">
            <button class="bg-primary hover:bg-blue-400 active:bg-primary text-white w-[16.25rem] h-[3.75rem] rounded flex items-center justify-center">
              <p>よくある質問</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="bg-primary hover:bg-blue-400 active:bg-primary text-white w-[16.25rem] h-[3.75rem] rounded flex items-center justify-center">
              <p>オンライン買い物</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="px-[22.5rem] py-20">
      <h2 class="text-[2rem] font-bold text-center">製品詳細</h2>
      <div class="text-lg leading-9 mt-16">
        ローヤルゼリーは、働きバチの下咽頭および下顎腺から分泌される乳白色のゼラチン状物質で、女王ハチになる幼虫の食糧となります。俗に、「体質を改善する」「免疫力を向上させる」「若々しさを保つ」「血圧を下げる」などと言われています。
      </div>
    </section>
    <section class="p-[5.63rem] flex justify-around bg-gray-100">
      <div v-for="i in 5" :key="i" class="w-[18.75rem] h-[23.13rem] p-5 bg-white shadow-md rounded-[1.25rem] cursor-pointer">
        <div class="w-full h-[16.25rem] bg-gray-300 rounded"></div>
        <h3 class="mt-7 text-2xl font-bold text-center">HMB代謝錠剤</h3>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>