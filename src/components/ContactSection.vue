<template>
    <div class="row contact-content">
        <div class="col-md-6">
            <div v-if="contact?.length">
                <p>{{ contact[0].number }}</p>
            </div>
            <SpinnerComp v-else />
        </div>
        <form class="col-md-6 form-box" action="https://formspree.io/f/xwkgyjal" method="POST" id="contact-form"
            target="_blank">
            <div class="d-flex justify-content-between contact-box">
                <div class="mb-3 contact-item">
                    <label for="exampleInputName1" class="form-label" name="name">Your name:</label>
                    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp"
                        required />
                </div>
                <div class="mb-3 contact-item">
                    <label for="exampleInputEmail1" class="form-label">Your email:</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required />
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Your message:</label>
                <input name="message" type="text" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="d-flex justify-content-between">
                <button type="submit" class="btn submit-btn fw-bold">Submit</button>
                <button type="reset" class="btn pink-btn fw-bold">Clear</button>
            </div>
        </form>
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