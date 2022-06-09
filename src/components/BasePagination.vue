<template>
  <div v-loading="loading" class="w-full text-center">
    <slot v-if="localList.length > 0" :list="localList" />
    <el-empty 
      v-if="localList.length === 0 && !loading" 
      description=" " 
      class="mt-36 text-sm text-gray-500"
    >
      暂无数据
    </el-empty>
    <div class="flex items-center justify-center">
      <el-pagination
        v-if="localList.length > 0"
        v-model:currentPage="currentPage"
        :page-size="size"
        layout="prev, pager, next, jumper"
        :total="total"
        class="mt-12"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { pickBy } from 'lodash'
import api from '/src/api/index.js'
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
    const loading = ref(true)
    const currentPage = ref(1)
    const localList = ref([])
    const total = ref(0)
    const askApi = function(more = true) {
      loading.value = true
      let newParams = {}
      if(!more) {
        currentPage.value = 1
      }
      Object.assign(newParams, props.params, { currentPage: currentPage.value, size: props.size })
      api.get(props.url, pickBy(newParams)).then((res) => {
        console.log('data', res)
        if(res.data.code === 20000) {
          total.value = res.data.data.total
          localList.value = res.data.data.records
        } else {
          total.value = 0
          localList.value = []
        }
        loading.value = false
      })
    }
    askApi()
    watch(props.params, (value) => {
      console.log('params',value)
      askApi(false)
    }, {
      deep: true
    })
    watch(() => props.size, value => {
      askApi()
    })
    watch(() => props.url, value => {
      askApi()
    })
    return {
      loading,
      currentPage,
      localList,
      total,
      askApi,
      handleSizeChange(value) {
        console.log(value)
      },
      handleCurrentChange(page) {
        askApi()
      }
    }
  }
}
</script>