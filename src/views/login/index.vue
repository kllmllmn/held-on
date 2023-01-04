<template>
  <div class="login-index">
    <div class="wrap-box">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-form-item label="账号" prop="loginName">
          <el-input v-model="ruleForm.loginName" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Api from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/useUserStore'

const userStore = useUserStore()
const ruleFormRef = ref()
const ruleForm = reactive({
  loginName: '',
  password: '',
})

const rules = {
  loginName: [
    {
      required: true,
      message: 'Please input',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: 'Please input ', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
}

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await Api.login(JSON.parse(JSON.stringify(ruleForm)))
      if (res.success) {
        userStore.setToken(res.data)
        console.log(userStore)
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="less">
.login-index {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff url('@/assets/images/1.jpg') no-repeat fixed center;
  .wrap-box {
    display: flex;
    width: 500px;
    height: 500px;
    background-color: rgb(209, 198, 198);
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #888888;
  }
}
</style>
