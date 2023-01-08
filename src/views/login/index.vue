<template>
  <div class="login-index">
    <div class="wrap-box">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="login-form"
      >
        <div class="text">欢迎登录</div>
        <el-form-item label="账号" prop="loginName">
          <el-input v-model="ruleForm.loginName" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password />
        </el-form-item>

        <el-form-item>
          <div class="login-button">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              登录
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </div>
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
  await formEl.validate()
  await fetchToken()
  Promise.all([fetchUserInfo(), fetchMenuList()])
  // fetchUserInfo()
  // fetchMenuList()
  console.log(userStore)
}

const fetchToken = async () => {
  const res = await Api.fetchToken(JSON.parse(JSON.stringify(ruleForm)))
  // const res = await API.login.login(JSON.parse(JSON.stringify(ruleForm)))
  if (res.success) {
    userStore.setToken(res.data)
  }
}

const fetchUserInfo = async () => {
  const res = await Api.fetchUserInfo()
  if (res.success) {
    userStore.setUserInfo(res.data.userInfo)
  }
}
const fetchMenuList = async () => {
  const res = await Api.fetchMenuList()
  if (res.success) {
    userStore.setMenuList(res.data)
  }
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="less">
.login-index {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff url('@/assets/images/1.jpg') no-repeat fixed center;
  .wrap-box {
    div.text {
      text-align: center;
      font-size: 24px;
      color: aquamarine;
      margin-bottom: 15px;
    }
    width: 500px;
    height: 500px;
    background-color: rgba(209, 198, 198, 0.7);
    border-radius: 10px;
    // box-shadow: 10px 10px 5px #888888;
    .login-form {
      margin-top: 160px;
      .login-button {
        margin: auto;
      }
    }
  }
}
</style>
