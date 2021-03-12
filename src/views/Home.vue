<template>
  <div class="home">
    <el-button class="custom_btn_32">32</el-button>
    <el-button class="custom_btn_32" disabled>32</el-button>
    <el-button class="custom_btn_plain_32">32</el-button>
    <el-button class="custom_btn_plain_32" disabled>32</el-button>
    <div style="margin-top:20px;"></div>
    <el-button class="custom_btn_36">36</el-button>
    <el-button class="custom_btn_36" disabled>36</el-button>
    <el-button class="custom_btn_plain_36">36</el-button>
    <el-button class="custom_btn_plain_36" disabled>36</el-button>
    <staff-swiper />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import StaffSwiper from '@/components/StaffSwiper.vue'

export default defineComponent({
  components: {
    StaffSwiper
  },
  setup() {
    const state = reactive({})

    return {
      ...toRefs(state)
    }
  }
})
</script>
