<template>
    <div class="row" id="about-content">
        <div class="col-md-6">
            <img src="" alt="about-img">
        </div>
        <div v-if="about?.length" class="col-md-6 about-text">
            <p>{{ about[0]?.text1 }}</p>
            <p>{{ about[0]?.text2 }}</p>
            <ul v-if="about?.length" class="wrapper">
           <a :href="about.github" target="_blank" class="icon github">
                <span class="tooltip">Github</span>
                <span><i class="fab fa-github"></i></span>
            </a>
            <a :href="about.linkedin" target="_blank" class="icon linkedin">
                <span class="tooltip">LinkedIn</span>
                <span><i class="fab fa-linkedin"></i></span>
            </a>
        </ul>
        </div>
        <SpinnerComp v-else />
    </div>
</template>

<script setup>
import SpinnerComp from '@/components/Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const about = computed(() => store.state.about)

onMounted(() => {
    store.dispatch('fetchAbout')
})
</script>

<style></style>