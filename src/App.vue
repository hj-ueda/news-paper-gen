<script setup lang="ts">
import { ref } from 'vue';
import CanvasArea from './components/CanvasArea.vue';

const text = ref<string>(`ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
「」－？！
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン
一二三四五六七八九十百千万億兆
!@#$%^&*()_+-=[]{}|;':",./<>?
αβγδεζηθικλμνξοπρστυφχψω
АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
абвгдеёжзийклмнопрстуфхцчшщъыьэюя
πρστυφχψω
😊😂🔥💧✨🎉👍❤️🌟🚀🌍🍣🍕🍦🎨📚🎵👪
𠮷𩸽屮𪜀巽䕫輸鼖嶲蚈
`)
</script>

<template>
  <div style="display: flex; justify-content: center; margin-bottom: 5em;">
    <textarea cols="100" rows="5" v-model="text"></textarea>
  </div>

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <CanvasArea :text="text" />
</template>

<style scoped>
textarea {
  font-family: "10px source-han-serif";
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
}

header {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
