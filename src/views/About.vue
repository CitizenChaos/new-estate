<template>
  <div class="about">
    <div class="theme_font_color">This is an about page</div>
    <el-form :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="活动名称" prop="namee">
        <el-input v-model="ruleForm.namee"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      ruleForm: {
        namee: ''
      },
      rules: {
        namee: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
