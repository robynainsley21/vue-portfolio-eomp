<template>
    <div class="row">
        <h4 class="text-center p-4">Education</h4>
        <div class="row gap-4" v-if="education?.length">
            <div class="edu-box" v-for="edu in education" :key="edu.id">
                <div class="col-item">
                    <img :src="edu.img_url" alt="edu-img" loading="lazy" />
                </div>
                <div class="col-item">
                    <p class="card-title">{{ edu.edu_name }}</p>
                    <p>{{ edu.date }}</p>
                    <p>{{ edu.details[0] }}</p>
                    <a href="edu.site"><button class="btn">Visit</button></a>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
        </div>

        <h4 class="text-center p-4">Experiences</h4>
        <div class="row gap-3" v-if="experiences?.length">
            <div class="item-container">
                <div class="edu-box mb-2" v-for="item in experiences" :key="item.id">
                <div class="col-item">
                    <img :src="item.img_url" alt="edu-img" />
                </div>
                <div class="col-item">
                    <p class="card-title">{{ item.company }}</p>
                    <p>{{ item.title }}</p>
                    <p>{{ item.duration }}</p>
                    <a href="item.site"><button class="btn">Visit</button></a>
                </div>
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