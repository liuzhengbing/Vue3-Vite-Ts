<script setup lang="ts">
import { ref } from 'vue';
import vueSvg from '@/assets/vue.svg';

defineProps({
  msg: String
});
const a = 2;
let b: number | string = 3;
const c = 4;
// const d = 5;
b = '222';
console.log('2222', a, b, c);
const count = ref(0);
if (a === 2) {
  console.log(
    '11111 components/HelloWorld.vuecomponents/HelloWorldHelloWorld',
    'vuecomponents/HelloWorlHelloWorld.vuecomponents/HelloWorlHelloWorld.vuecomponents/HelloWorlHelloWorld.vuecomponents/HelloWorl.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuevuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vue'
  );
}
</script>
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>
        components/HelloWorld.vuecomponents/HelloWorldHelloWorld.vuecomponents/HelloWorlHelloWorld.vuecomponents/HelloWorlHelloWorld.vuecomponents/HelloWorlHelloWorld.vuecomponents/HelloWorl.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuevuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vuecomponents/HelloWorld.vue
      </code>
      to test HMR
    </p>
  </div>
  <img :src="vueSvg" />
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
