<template>
  <div>
    <button id="foot">
      <button class="button-os">
        <a href="#">{{ buttonName }}</a>
      </button>
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ColorButton',
  props: {
    buttonName: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
#foot {
  position: relative;
  top: 15px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: none;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 8px #d9d4e7;
  width: 200px;
  height: 65px;
  background-color: #d9d4e7;
  animation-duration: 5s;
}

.button-os {
  position: absolute;
  width: 200px;
  height: 65px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  background-color: #f9f8fc;
  border: 1px solid #0e172c;
  transition: background-color 2.2s;
  transition-duration: 3s;
  transition: 1.5s;
}

.button-os a {
  font-size: 20px;
  display: block;
  text-decoration: none;
  color: #0e172c;
  transition: 1.5s;
}

button {
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 8px rgb(207, 207, 207);
}

button:hover {
  border: none;
  padding: 15px;
  border-radius: 15px;
  box-shadow: inset 0 0 8px #f9f8fc;
}

.button-os:hover {
  position: absolute;
  top: 30px;
  background-color: #fec7d7;
}

.button-os a:hover {
  letter-spacing: 5px;
}
</style>
