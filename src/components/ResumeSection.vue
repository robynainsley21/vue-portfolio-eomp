<template>
  <div class="row mb-5">
    <h3 class="text-center p-4">Education</h3>
    <div class="row gap-4" v-if="education?.length">
      <div
        class="edu-box"
        v-for="edu in education"
        :key="edu.id"
        data-aos="fade-up"
      >
        <div class="col-item">
          <img :src="edu.img_url" alt="edu-img" loading="lazy" />
        </div>
        <div class="col-item">
          <h4 class="card-title mt-3">{{ edu.edu_name }}</h4>
          <p>{{ edu.date }}</p>
          <p>{{ edu.details[0] }}</p>
          <a :href="edu.site"><button class="btn">Visit</button></a>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border" role="status"></div>
    </div>

    <h3 class="text-center p-4">Experiences</h3>
    <div class="row gap-3" v-if="experiences?.length">
        <div class="edu-box mb-2" v-for="item in experiences" :key="item.id" data-aos="fade-up">
          <div class="col-item">
            <img :src="item.img_url" alt="edu-img" />
          </div>
          <div class="col-item">
            <h4 class="card-title mt-3">{{ item.company }}</h4>
            <p>{{ item.title }}</p>
            <p>{{ item.duration }}</p>
            <a :href="item.site"><button class="btn">Visit</button></a>
          </div>
      </div>
    </div>
    <SpinnerComp v-else />
  </div>
</template>

<script setup>
import SpinnerComp from "@/components/Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const education = computed(() => store.state.education);
const experiences = computed(() => store.state.experiences);

onMounted(() => {
  store.dispatch("fetchEducation");
});

onMounted(() => {
  store.dispatch("fetchExperiences");
});
</script>

<style></style>
