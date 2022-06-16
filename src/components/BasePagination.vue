<template>
  <div class="w-full text-center">
    <slot v-if="localList.length > 0" :list="localList" />
    <el-empty 
      v-if="localList.length === 0 && !loading" 
      description=" " 
      class="mt-36 text-sm text-gray-500"
    >
      {{ t('message.empty') }}
    </el-empty>
    <div class="flex items-center justify-center">
      <el-pagination
        v-if="localList.length > 0"
        v-model:currentPage="currentPage"
        :page-size="size"
        layout="prev, pager, next, jumper"
        :total="total"
        class="mt-12"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { pickBy } from 'lodash'
import api from '/src/api/index.js'
import { useI18n } from 'vue-i18n'
// import emitter from '/src/until/eventbus'
export default {
  props: {
    size: {
      type: Number,
      default: 4
    },
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const { t } = useI18n()
    const loading = ref(true)
    // emitter.emit('changeLoadingState', true)
    const currentPage = ref(1)
    const localList = ref([])
    const total = ref(0)
    const askApi = function(more = true) {
      loading.value = true
      // emitter.emit('changeLoadingState', true)
      let newParams = {}
      if(!more) {
        currentPage.value = 1
      }
      Object.assign(newParams, props.params, { currentPage: currentPage.value, size: props.size })
      api.get(props.url, pickBy(newParams)).then((res) => {
        if(res.data.code === 20000) {
          total.value = res.data.data.total
          localList.value = res.data.data.records
        } else {
          total.value = 0
          localList.value = []
        }
        loading.value = false
        // emitter.emit('changeLoadingState', false)
      })
    }
    askApi()
    watch(() => props.params, (value) => {
      console.log('vvv', value)
      askApi(false)
    }, {
      deep: true
    })
    return {
      t,
      loading,
      currentPage,
      localList,
      total,
      askApi,
      handleCurrentChange(page) {
        askApi()
      }
    }
  }
}
</script>