<template>
  <div class="row justify-content-center align-items-center" v-if="about?.length" id="about-content" data-aos="fade-up">
    <div class="col-md-6 d-flex justify-content-center">
      <img :src="about[0]?.img_url" alt="about-img" />
    </div>
    <div class="col-md-6 about-text">
      <p>{{ about[0]?.text1 }}</p>
      <p>{{ about[0]?.text2 }}</p>
      <ul class="wrapper d-flex justify-content-center align-items-center">
        <a :href="about.github" target="_blank" class="icon github">
          <span class="tooltip">Github</span>
          <span><i class="fab fa-github"></i></span>
        </a>
        <a :href="about.linkedin" target="_blank" class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <span><i class="fab fa-linkedin"></i></span>
        </a>
        <span class="location"><i class="fa-solid fa-location-dot mx-2"></i>{{ about[0]?.location }}</span>
      </ul>
    </div>
  </div>
  <SpinnerComp v-else />
</template>

<script setup>
import SpinnerComp from "@/components/Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const about = computed(() => store.state.about);

onMounted(() => {
  store.dispatch("fetchAbout");
});
</script>

<style></style>
