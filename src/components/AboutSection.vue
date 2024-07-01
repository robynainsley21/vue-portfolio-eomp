<template>
    <div class="row" id="about-content">
        <div class="col-md-6">
            <img src="" alt="about-img">
        </div>
        <div v-if="about?.length" class="col-md-6 about-text">
            <p>{{ about[0]?.text1 }}</p>
            <p>{{ about[0]?.text2 }}</p>
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