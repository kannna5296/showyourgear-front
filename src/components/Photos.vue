<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { Photo } from "./Photo";
import axios, { AxiosResponse } from "axios";

const photoDatas: Ref<Photo[]> = ref([]);

//TODO OpenAPIから自動化するやつやってみたい
onMounted(async () => {
  const response = await axios
    .get(import.meta.env.VITE_API_ENDPOINT + "/photo") //vue-clieじゃなくてViteでの読み方
    .then((res: AxiosResponse<Photo[]>) => {
      photoDatas.value.push(...res.data); //TODO トップ30件をとる + shuffle
    });
  console.log(response);
});
</script>

<template>
  <div class="photo-wrap">
    <div
      class="photo"
      v-for="(photo, index) in photoDatas"
      :key="index"
      :style="{
        width: (photo.width * 200) / photo.height + 'px',
        'flex-grow': (photo.width * 200) / photo.height,
      }"
    >
      <i
        :style="{
          'padding-bottom': (photo.height / photo.width) * 100 + '%',
        }"
      ></i>
      <!-- <img
        :src="photo.src"
        @click="onClickPhoto(index)"
        @load="loaded(index)"
        crossorigin="Anonymous"
      /> -->
      <img :src="photo.src" />
    </div>
  </div>
</template>

<style scoped></style>
