<template>
    <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
    </div>
    <div class="row" id="landing-content">
        <h1 class="landing-title text-center">Hi, I'm <span>Robyn</span>.</h1>

        <div class="image-box border-animation col-md-6">
            <img v-if="jobTitle?.img_url" src="{{ jobTitle[0].img_url }}" alt="landing-img" loading="lazy" />
            <SpinnerComp v-else />
        </div>
        <div class="landing-text col-md-6">
            <h4>Robyn Carnow</h4>
            <p v-if="jobTitle?.length">
                <span>{{ jobTitle[0]?.title }}</span>
            </p>
            <SpinnerComp v-else />
        </div>
    </div>
</template>

<script setup>
import SpinnerComp from "@/components/Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const jobTitle = computed(() => store.state.jobTitle);
onMounted(() => {
    store.dispatch("fetchJobTitle");
});
</script>

<style></style>