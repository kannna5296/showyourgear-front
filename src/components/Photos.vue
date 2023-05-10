<script setup lang="ts">
import { ref, Ref } from "vue";
import { Photo } from "./Photo";

const photoDatas: Ref<Photo[]> = ref([
  new Photo(
    "https://shopping.line-scdn.net/0h2PjuYsiybX9XDHnqrGESKAVRcQ4hfTRoKDR3XSBJLU16OS8uOz0lTHUMMB8qOioqb2MkGiBbZE1ybCt5OWwqd3MNO0YvbiohaGMmHnIKdk97P30pPmly/r800",
    200,
    300
  ),
  new Photo(
    "https://shopping.line-scdn.net/0h2PjuYsiybX9XDHnqrGESKAVRcQ4hfTRoKDR3XSBJLU16OS8uOz0lTHUMMB8qOioqb2MkGiBbZE1ybCt5OWwqd3MNO0YvbiohaGMmHnIKdk97P30pPmly/r800",
    200,
    300
  ),
]);
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
