<template>
  <div class="login-layout">
    <div class="gastly">
      <gastly />
    </div>
    <div class="login-container">
      <div class="left-container">
        <div class="title"><span>登录</span></div>
        <div class="input-container">
          <n-form :model="formValue">
            <n-form-item>
              <input
                type="text"
                name="username"
                v-model="formValue.username"
                required=""
                autocomplete="off"
              />
              <label>用户名</label>
            </n-form-item>
            <n-form-item>
              <input
                type="password"
                name="password"
                required=""
                v-model="formValue.password"
                autocomplete="off"
              />
              <label>密码</label>
            </n-form-item>
          </n-form>
        </div>
        <div class="message-container">
          <n-popconfirm :negative-text="null" positive-text="好的">
            <template #icon>
              <n-icon color="red">
                <hand-icon />
              </n-icon>
            </template>
            <template #trigger>
              <span>忘记密码</span>
            </template>
            <pre>你的用户名是：sanqiu,密码是：123456,下次别再忘啦QWQ</pre>
          </n-popconfirm>
        </div>
      </div>
      <div class="right-container">
        <div class="register-container">
          <n-popconfirm :negative-text="null" positive-text="不注就不注">
            <template #icon>
              <n-icon color="red">
                <hand-icon />
              </n-icon>
            </template>
            <template #trigger> <span class="register">注册</span> </template>
            <pre>你连数据库都没有你注册个毛线啊？</pre>
          </n-popconfirm>
        </div>
        <div class="action-container">
          <span @click="handleSubmit">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gastly from '../../components/gastly/gastly.vue'
import { useMessage, NIcon } from 'naive-ui'
import { AnimalCat16Regular } from '@vicons/fluent'
import { MdHand as HandIcon } from '@vicons/ionicons4'
import { useLoginStore } from '../../store'
import { phoneLogin } from '../../service/login'

export default defineComponent({
  name: 'login-layout',
  components: {
    gastly,
    HandIcon
  },
  setup() {
    const { accountLoginAction } = useLoginStore()

    const formValue = ref({ username: '', password: '' })

    const onlyUser = ref({ username: 'sanqiu', password: '123456' })

    const message = useMessage()

    const handleSubmit = () => {
      if (formValue.value.username === '') {
        message.warning('用户名不能为空QAQ！', {
          icon: () => h(NIcon, null, { default: () => h(AnimalCat16Regular) })
        })
      } else if (formValue.value.password === '') {
        message.warning('密码不能为空QAQ！', {
          icon: () => h(NIcon, null, { default: () => h(AnimalCat16Regular) })
        })
      } else {
        const postData = {
          phone: formValue.value.username,
          password: formValue.value.password
        }
        phoneLogin(postData).then((res) => {
          if (res.code !== 200) return message.error(res.message)
          accountLoginAction(postData, res)
          message.success('登陆成功')
        })
      }
    }

    return {
      formValue,
      onlyUser,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="less">
.login-layout {
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    rgb(114, 135, 254),
    rgb(130, 88, 186)
  );
  position: relative;
}
.gastly {
  position: absolute;
  right: 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.login-container {
  width: 600px;
  height: 315px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 50px 0 rgb(59, 45, 159);
  border-radius: 15px;
  background-color: rgb(94, 76, 194);
}
.left-container {
  display: inline-block;
  background-image: linear-gradient(
    to bottom right,
    rgb(118, 76, 163),
    rgb(92, 103, 211)
  );
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 330px;
  padding: 28px 60px;
}
.title {
  color: #fff;
  font-size: 18px;
  font-weight: 200;
}
.title span {
  border-bottom: 3px solid rgb(237, 221, 22);
}
.input-container {
  padding: 20px 0;
}
.input-container input {
  border: 0;
  background: none;
  outline: 0;
  color: #fff;
  margin: 0;
  padding: 5px 0;
  display: block;
  width: 100%;
  transition: 0.2s;
  border-bottom: 1px solid rgb(199, 191, 219);
}
.input-container input:hover {
  border-bottom-color: #fff;
}
.input-container label {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  margin: 0;
  padding: 5px 0;
  pointer-events: none;
  transition: 0.5s;
}
.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
.message-container {
  font-size: 14px;
  transition: 0.2s;
  color: rgb(199, 191, 219);
  cursor: pointer;
}
.message-container:hover {
  color: #fff;
}
.right-container {
  display: inline-block;
  width: 145px;
  height: calc(100% - 120px);
  vertical-align: top;
  padding: 60px 0;
}
.register-container {
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 200;
}
.register-container span {
  border-bottom: 3px solid rgb(237, 221, 22);
  cursor: pointer;
}
.action-container {
  color: #fff;
  font-size: 10px;
  text-align: center;
  height: 100%;
  position: relative;
}
.action-container span {
  border: 1px solid rgb(237, 221, 22);
  padding: 10px;
  display: inline-block;
  line-height: 25px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  left: calc(72px - 25px);
  transition: 0.2s;
  cursor: pointer;
}
.action-container span:hover {
  background-color: rgb(237, 221, 22);
  color: rgb(95, 76, 194);
}
</style>
