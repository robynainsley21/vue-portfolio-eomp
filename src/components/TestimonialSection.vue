<template>
    <div class="row">
        <div class="row gap-5 mb-5" >
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" v-if="testimonials?.length">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
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