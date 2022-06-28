<template>
  <main>

    <!--  生命之幸 | 幸好在NMN上 -->
    <section class="w-full h-[62.5rem] relative">
      <img :src="BannerA" width="100%" height="1000" alt="背景图1" class="absolute inset-0 w-full h-full">
      <div class="relative w-full h-full pt-48 pb-32 text-center text-white">
        <!-- <img :src="ProductA" alt="药品图片A" width="336" height="312" class="mx-auto w-[336px] h-[312px]"> -->
        <div class="flex justify-center">
          <vue3VideoPlay v-bind="options" class="shadow-lg" />
        </div>
        <h2 class="mt-[5.88rem] text-5xl font-bold">生命の幸 · 幸はNMN</h2>
        <div class="mt-10 text-lg font-bold leading-[1.88rem]">
          <p>NMN純度と吸収効率、持続時間にこだわった</p>
          <p>国産NMNサプリメント</p>
          <p>さあ、年齢から自由になろう</p>
        </div>
        <button class="mt-10 w-[12.5rem] h-10 rounded-3xl border border-white font-bold hover:border-2">
          製品のビデオを見る
        </button>
      </div>
    </section>

    <!-- · 纯度 99.9%* | 吸收效率提高 6 倍* | 32倍高持久性* -->
    <section class="w-full h-[62.5rem] relative">
      <img :src="BannerB" width="100%" height="1000" alt="背景图2" class="absolute inset-0 w-full h-full">
      <div class="relative w-full h-full py-28 px-36">
        <div class="flex items-center space-x-[4.19rem]">
          <!-- · 純度99.9%* -->
          <div>
            <h2 class="text-[2.63rem] text-[#FA1F91] font-bold">· 純度99.9%*</h2>
            <p class="mt-7 ml-[1.81rem] text-2xl font-bold">国内自社製造の高品質NMN採用</p>
          </div>
          <!-- · 吸収効率が6倍向上* -->
          <div>
            <h2 class="text-[2.63rem] text-primary font-bold">· 吸収効率が6倍向上*</h2>
            <p class="mt-7 ml-[1.81rem] text-2xl font-bold">新技術、耐酸性カプセル「Acid ProTec®」</p>
          </div>
          <!-- · 32倍高持続長効性* -->
          <div>
            <h2 class="text-[2.63rem] text-[#FA8B1F] font-bold">· 32倍高持続長効性*</h2>
            <p class="mt-7 ml-[1.81rem] text-2xl font-bold">最新の研究に基づく「ロングエフェクト処方®」</p>
          </div>
        </div>
        <div class="mt-32 flex items-end space-x-[25.81rem] px-28">
          <div class="flex-shrink-0 w-[37.5rem] h-[30rem] bg-white p-12 rounded-2xl shadow-xl">
            <h3 class="text-3xl font-bold text-center">独特な品質保証システム</h3>
            <div class="mt-7 mx-auto w-[4.25rem] h-1.5 rounded bg-gray-900" />
            <div class="mt-10 text-lg leading-10">
              <p>· 特殊技術“低毒素製法”で安全性を確保</p>
              <p>· 自社独自に、熱に強いNMN原料を製造</p>
              <p>· ロット毎に原料真正テスト実施</p>
              <p>· ヒト臨床検査実施</p>
              <p>· アンチエイジングドック™結果検証済</p>
              <p>· 急性毒性試験・放射能検査の安全性検査済</p>
            </div>
          </div>
          <div class="flex-shrink-0 text-center">
            <img :src="PorductB" alt="药品图片B" width="350" height="311" class="w-[350px] h-[311px]">
            <button class="mt-11 w-40 h-10 rounded-3xl border border-gray-900 font-bold hover:border-2">詳細を表示</button>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 right-10">*第三者機関の検査による最高値**第三者機関での研究結果**</div>
    </section>

    <!--  先进技术浓缩成一粒，提供高规格和真正的体验 -->
    <section class="w-full h-[62.5rem] relative">
      <img :src="BannerC" width="100%" height="1000" alt="背景图3" class="absolute inset-0 w-full h-full">
      <div class="relative w-full h-full pt-32 pb-28 text-center text-white">
        <div class="mx-auto text-5xl font-bold leading-[4.38rem]">
          <p>ハイスペックで真の体感を実現</p>
          <p>1粒に凝縮された先進テクノロジー</p>
        </div>
        <div class="mt-10 w-20 h-2 rounded bg-white mx-auto" />
        <div class="mt-10 text-xl leading-[1.88rem]">
          <p>数々の改良を重ねて到達した、インフィニクス史上最高の吸収効率を誇るNMNサプリメント。国内自社製造した</p>
          <p>最高純度99.9％のNMNを、同量のNMN配合製品と比べて、より多く、長時間にわたり身体に届けます。</p>
        </div>
        <div class="mt-20 w-[1200px] mx-auto flex space-x-[1.88rem]">
          <!-- NMN純度99.9% -->
          <div class="flex-shrink-0 w-[23.75rem] h-60 rounded-[6.25rem] relative">
            <img :src="BtnPink" alt="NMN純度99.9%" width="380" height="240" class="absolute inset-0 w-full h-full">
            <div class="relative text-center pt-20 pb-14 space-y-2.5">
              <p class="text-4xl font-bold">NMN純度</p>
              <p class="text-5xl font-bold">99.9%</p>
            </div>
          </div>
          <!-- 吸収量6倍 -->
          <div class="flex-shrink-0 w-[23.75rem] h-60 rounded-[6.25rem] relative">
            <img :src="BtnBlue" alt="吸収量6倍" width="380" height="240" class="absolute inset-0 w-full h-full">
            <div class="relative text-center pt-20 pb-14 space-y-2.5">
              <p class="text-4xl font-bold">吸収量</p>
              <p class="text-5xl font-bold">6倍</p>
            </div>
          </div>
          <!-- 持続時間32倍 -->
          <div class="flex-shrink-0 w-[23.75rem] h-60 rounded-[6.25rem] relative">
            <img :src="BtnYellow" alt="持続時間32倍" width="380" height="240" class="absolute inset-0 w-full h-full">
            <div class="relative text-center pt-20 pb-14 space-y-2.5">
              <p class="text-4xl font-bold">持続時間</p>
              <p class="text-5xl font-bold">32倍</p>
            </div>
          </div>
        </div>
        <!-- 詳細を表示 -->
        <button class="mt-[6.31rem] w-[17.88rem] h-[3.38rem] bg-primary hover:bg-blue-400 text-white text-xl font-bold rounded-[1.69rem]">詳細を表示</button>
      </div>
    </section>

    <!-- 质量保证体系 -->
    <section class="w-full h-[62.5rem] relative">
      <img :src="BannerD" width="100%" height="1000" alt="背景图4" class="absolute inset-0 w-full h-full">
      <div class="relative w-full h-full flex items-center">
        <div class="w-full h-[21.88rem] bg-[rgba(255,255,255,0.8)] text-center pt-20 pb-16">
          <h2 class="text-3xl font-bold">品質保証体制</h2>
          <div class="mt-12 text-lg w-[50rem] leading-[1.88rem] mx-auto text-left">
            私たちインフィニクスは、常に最高のNMNをお届けするために各種検査・試験を実施しています。また、安心してご使用いただくために、様々な取組みをしています。これからも、お届けからその後に至るまで、想定される一つひとつのリスクを低減してまいります。
          </div>
        </div>
        <div class="absolute bottom-48 inset-x-0 w-full text-center">
          <button class="w-[17.88rem] h-[3.38rem] bg-primary hover:bg-blue-400 text-white text-xl rounded-[1.69rem]">詳細を表示</button>
        </div>
      </div>
    </section>

    <!-- 如何享用 -->
    <section class="w-full h-[62.5rem] relative">
      <img :src="BannerE" width="100%" height="1000" alt="背景图5" class="absolute inset-0 w-full h-full">
      <div class="relative w-full h-full flex items-center">
        <div class="w-full h-[21.88rem] bg-[rgba(255,255,255,0.8)] text-center pt-20 pb-16">
          <h2 class="text-3xl font-bold">お召し上がり方</h2>
          <div class="mt-12 text-lg w-[50rem] leading-[1.88rem] mx-auto text-left">
            貴重なNMNの魅力を余すことなくご体感いただくために、理想的な摂取タイミングと摂取方法をまとめました。また、お届け時のフレッシュな品質を保つための保管方法をお伝えします。
          </div>
        </div>
        <div class="absolute bottom-48 inset-x-0 w-full text-center">
          <button class="w-[17.88rem] h-[3.38rem] bg-primary hover:bg-blue-400 text-white text-xl rounded-[1.69rem]">詳細を表示</button>
        </div>
      </div>
    </section>

    <!-- 客户意见 -->
    <section class="w-full pt-24 pb-28 bg-white">
      <h2 class="text-5xl font-bold text-center">お客様の声</h2>
      <div class="mt-[3.75rem] w-[1200px] mx-auto grid grid-cols-2 gap-x-[3.75rem] gap-y-12">
        <div 
          v-for="item in commentList"
          :key="item.id"
          class="w-full h-[13.75rem] rounded-[1.88rem] bg-gray-100 pt-7 pb-5 pl-8 pr-10"
        >
          <div class="flex items-center">
            <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="i > item.star ? 'text-gray-300' : 'text-[#FCBF02]'" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="mt-3 font-bold">{{ item.name }}</p>
          <p class="mt-4 line-2 h-[52.2px] leading-[1.63rem]">{{ item.content }}</p>
          <div class="mt-4 flex items-center space-x-2">
            <img :src="Avatar" alt="光大健康" width="39" height="36" class="flex-shrink-0 w-9 h-9 rounded-full">
            <div class="text-sm">
              <p>光大健康</p>
              <p class="text-primary hover:underline cursor-pointer" @click="viewDetail('http://www.guangdajiankang.com')">www.guangdajiankang.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import api from '/src/api/index.js'
import BannerA from '/src/assets/images/nmn/banner-a.webp'
import ProductA from '/src/assets/images/nmn/product_a.webp'
import BannerB from '/src/assets/images/nmn/banner-b.webp'
import PorductB from '/src/assets/images/nmn/product-b.webp'
import BannerC from '/src/assets/images/nmn/banner-c.webp'
import BtnPink from '/src/assets/images/nmn/btn-pink.png'
import BtnBlue from '/src/assets/images/nmn/btn-blue.png'
import BtnYellow from '/src/assets/images/nmn/btn-yellow.png'
import BannerD from '/src/assets/images/nmn/banner-d.webp'
import BannerE from '/src/assets/images/nmn/banner-e.webp'
import Avatar from '/src/assets/images/nmn/avatar.png'
import emitter from '/src/until/eventbus'

window.scrollTo({ top: 0, behavior: "instant" })

const options = reactive({
  width: '555px', //播放器高度
  height: '312px', //播放器高度
  color: "#4799FF", //主题色
  control: false, //是否显示控制器
  title: '', //视频名称
  src: '', //视频源
})

if(sessionStorage.getItem("swiperList")) {
  options.title = JSON.parse(sessionStorage.getItem("swiperList"))[0].title
  options.src = JSON.parse(sessionStorage.getItem("swiperList"))[0].href
} else {
  options.title = '视频'
  options.src = 'https://yuyihui-re.oss-cn-beijing.aliyuncs.com/NMN.mp4'
}

const commentList = ref([])
api.get('/comment/getList').then((res) => {
  commentList.value = res.data.data
  setTimeout(() => emitter.emit('changeLoadingState', false), 50)
})
const viewDetail = function(url) {
  window.open(url)    // row中的数据是表格scope.row  由后台接口返回
}
</script>