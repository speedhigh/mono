<template>
  <footer class="absolute bottom-0 inset-x-0 text-xs border-t z-50">
    <div class="w-full h-[8.75rem] bg-gray-100 px-[22.5rem] flex items-center">
      <img :src="logoImg" alt="HSD国际株式会社" width="266" height="60">
      <div class="ml-auto space-y-4 cursor-pointer">
        <p>
          <span class="hover:font-bold">关于使用</span>
          <span class="ml-8 hover:font-bold">安全政策</span>
          <span class="ml-8 hover:font-bold">使用注意事项</span>
        </p>
        <div class="flex items-center justify-end space-x-2.5">
          <p class="hover:font-bold">关于我们</p>
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M249 336c0 11 5 21 12 29 8 7 19 12 29 12 11 0 22-5 29-12a41 41 0 0 0 0-58 41 41 0 0 0-58 0c-7 7-12 18-12 29zm320 213a33 33 0 0 0 32 32c9 0 17-3 24-9 5-6 9-15 9-23 0-9-3-17-9-23s-15-10-23-10c-9 0-17 4-23 10s-10 14-10 23zM459 336c0 11 5 21 12 29 8 7 18 12 29 12s22-5 29-12a41 41 0 0 0 0-58 41 41 0 0 0-58 0c-7 7-12 18-12 29zm0 0" fill="#04BE02"/><path d="M842 27H182C95 27 24 98 24 186v659c0 88 71 159 158 159h660c88 0 159-71 159-159V186c-1-88-72-159-159-159zM390 682c-37 0-66-8-104-15l-103 52 30-90C139 578 94 511 94 429c0-141 134-252 296-252 146 0 274 89 299 208l-29-1c-140 0-251 105-251 234 0 22 3 42 9 62l-28 2zm437 103 22 74-81-44c-30 8-59 15-89 15-141 0-252-96-252-215 0-118 111-215 252-215 133 0 252 97 252 215 0 67-45 126-104 170zm0 0" fill="#04BE02"/><path d="M731 549c0 8 3 17 9 23s15 9 23 9c9 0 17-3 23-9s10-15 10-23c0-9-4-17-10-23s-14-10-23-10c-8 0-17 4-23 10s-9 14-9 23zm0 0" fill="#04BE02"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full h-12 leading-[3rem] bg-primary text-white text-center">
      © 2022 HSD国际株式会社。保留所有权力。
    </div>
  </footer>
</template>

<script setup>
import logoImg from '/src/assets/images/logo.png'
</script>