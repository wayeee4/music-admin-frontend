<template>
  <n-layout>
    <n-layout-content content-style="padding: 24px;min-height:100vh;max-height:100vh;">
      <n-card hoverable>
        <n-tabs
            class="card-tabs"
            default-value="signin"
            size="large"
            animated
            style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="signin" tab="登录">
            <n-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
              <n-form-item-row path="username" label="用户名">
                <n-input v-model:value="loginForm.username" placeholder="请输入邮箱或者昵称"/>
              </n-form-item-row>
              <n-form-item-row path="password" label="密码">
                <n-input v-model:value="loginForm.password" type="password" show-password-on="mousedown"
                         placeholder="请输入密码"/>
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="handleLoginClick">
              登录
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <n-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules">
              <n-form-item-row path="email" label="邮箱">
                <n-auto-complete
                    v-model:value="registerForm.email"
                    blur-after-select
                    :input-props="{
      autocomplete: 'disabled'
    }"
                    :options="emailOptions"
                    placeholder="请输入邮箱"
                />
              </n-form-item-row>
              <n-form-item-row path="password" label="密码">
                <n-input v-model:value="registerForm.password" show-password-on="mousedown" :maxlength="32"
                         type="password"
                         placeholder="请输入密码"/>
              </n-form-item-row>
              <n-form-item-row path="confirmPassword" label="重复密码">
                <n-input v-model:value="registerForm.confirmPassword" show-password-on="mousedown" :maxlength="32"
                         type="password" placeholder="请确认密码"/>
              </n-form-item-row>
              <n-form-item-row path="nickname" label="用户名">
                <n-input v-model:value="registerForm.nickname" placeholder="请输入用户名" :maxlength="20"/>
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="handleRegisterClick">
              注册
            </n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import {computed, reactive, ref, toRaw} from "vue";
import userApi from '@/api/user'
import router from "@/router/index.js";

const loginForm = reactive({
  username: '',
  password: ''
})
const loginFormRef = ref(null)
const loginFormRules = {
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
}
const handleLoginClick = async (e) => {
  e.preventDefault()
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      //   校验成功 登录
      login(toRaw(loginForm))
    }
  });
}

async function login(postForm) {
  const res = await userApi.login(postForm)
  const {user, token} = res
  localStorage.setItem('music-access-token', token)
  await router.push({path: '/home'})
  $message.success(`欢迎回来`)
}

const registerForm = ref({
  email: '',
  password: '',
  confirmPassword: '',
  nickname: '',
})
const registerFormRef = ref(null)

function validatePasswordSame(rule, value) {
  return value === registerForm.value.password;
}

const registerFormRules = {
  email: {
    required: true,
    message: '请输入邮箱',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  },
  confirmPassword: [{
    required: true,
    message: '请确认密码',
    trigger: 'blur'
  }, {
    validator: validatePasswordSame,
    message: "两次密码输入不一致",
    trigger: ["blur", "password-input"]
  }],
  nickname: {
    required: true,
    message: '请确认昵称',
    trigger: 'blur'
  }
}
const handleRegisterClick = (e) => {
  e.preventDefault();
  registerFormRef.value?.validate((errors) => {
    if (!errors) {
      message.success("Valid");
    } else {
      console.log(errors);
      console.log(errors[0])
      message.error(errors[0][0].message);
    }
  });
}

const emailOptions = computed(() => {
  return ["@gmail.com", "@qq.com", "@foxmail.com", "@outlook.com", "@126.com", "@163.com",].map((suffix) => {
    const prefix = registerForm.value.email.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix
    };
  });
})
</script>

<style>
.n-layout .n-layout-scroll-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 960px) {
  .n-card {
    width: 50%;
  }
}

@media screen and (min-width: 1280px) {
  .n-card {
    width: 30%;
  }
}

</style>