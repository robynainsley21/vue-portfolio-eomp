<template>
    <div v-if="skills?.length" class="row gap-5 mb-5">
        <div v-for="skill in skills" :key="skill.id" class="card skill-card" data-aos="fade-up">
            <div class="skillIcon mt-4">
                <img class="m-auto" :src="skill.img_url" alt="skill-img" />
            </div>
            <div class="text-center mt-4 skill-text">
                <h4>{{ skill.skill }}</h4>
                <p>{{ skill.description }}</p>
            </div>
        </div>
    </div>
    <SpinnerComp v-else />
</template>

<script setup>
import SpinnerComp from "@/components/Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const skills = computed(() => store.state.skills);

onMounted(() => {
    store.dispatch("fetchSkills");
});
</script>

<style></style>