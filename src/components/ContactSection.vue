<template>
  <div class="row contact-content">
    <div class="row contact-background">
      <div class="col-md-6 contact-details" v-if="contact?.length">
        <h6 class="display-6 p-3 m-0">Let's get in touch.</h6>
        <p class="icon-box">
          <i class="fa-solid fa-phone mx-3"></i>{{ contact[0].number }}
        </p>
        <p class="icon-box">
          <i class="fa-brands fa-github mx-3"></i
          ><a :href="contact[0].github" target="_blank">GitHub</a>
        </p>
        <p class="icon-box">
          <i class="fa-brands fa-linkedin-in mx-3"></i
          ><a :href="contact[0].linkedin" target="_blank">LinkedIn</a>
        </p>
        <p class="icon-box">
          <i class="fa-solid fa-location-dot mx-3"></i>{{ contact[0].location }}
        </p>
      </div>
      <SpinnerComp v-else />
      <form
        class="col-md-6 form-box"
        action="https://formspree.io/f/xwkgyjal"
        method="POST"
        id="contact-form"
        target="_blank"
      >
        <div class="d-flex justify-content-between contact-box">
          <div class="mb-3 contact-item">
            <label
              for="exampleInputName1"
              class="form-label top-label"
              name="name"
              >Your name:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3 contact-item">
            <label for="exampleInputEmail1" class="form-label top-label"
              >Your email:</label
            >
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>
        <div class="mb-3 contact-item">
          <label class="form-label">Your message:</label>
          <input
            name="message"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn contact-btn fw-bold">Submit</button>
          <button type="reset" class="btn contact-btn fw-bold">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import SpinnerComp from "@/components/Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const contact = computed(() => store.state.contact);

onMounted(() => {
  store.dispatch("fetchContact");
});
</script>

<style></style>
