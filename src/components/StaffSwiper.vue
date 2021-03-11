<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">slider1</div>
      <div class="swiper-slide">slider2</div>
      <div class="swiper-slide">slider3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/swiper.min.css'

export default defineComponent({
  setup() {
    const state = reactive({})
    onMounted(async () => {
      new Swiper('.swiper-container', {
        autoplay: true //可选选项，自动滑动
      })
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped></style>
