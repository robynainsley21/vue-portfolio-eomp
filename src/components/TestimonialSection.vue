<template>
    <div class="row">
        <div class="row gap-5" v-if="testimonials?.length">
            <div class="card testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
                <div class="text-center">
                    <img :src="testimonial.img_url" alt="person-img" />
                    <p class="card-title fw-bold">{{ testimonial.name }}</p>
                    <p>{{ testimonial.title }}</p>
                </div>
                <div class="testimonial-content">
                    <p>{{ testimonial.testimonial }}</p>
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
const testimonials = computed(() => store.state.testimonials);

onMounted(() => store.dispatch("fetchTestimonials"));
</script>

<style></style>