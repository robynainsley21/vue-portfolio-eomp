<template>
    <div v-if="projects?.length" class="row gap-4">
        <div class="card p-0 project-card" v-for="project in projects" :key="project.id">
            <div class="m-auto text-center project-header">
                <img :src="project.img_url" alt="project-img" />
                <p>{{ project.projectName }}</p>
                <p>{{ project.description }}</p>
            </div>
            <div class="buttons-box">
                <a class="btn" type="button" :href="project.github" target="blank">GitHub</a>
                <a class="btn" type="button" :href="project.hosted_link" target="blank">Live site</a>
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
const projects = computed(() => store.state.projects);

onMounted(() => store.dispatch("fetchProjects"));
</script>

<style></style>