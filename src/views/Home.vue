<template>
  <div class="home">
    <el-button>111</el-button>
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
