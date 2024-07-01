<template>
    <footer class="text-center fixed-bottom">
        <div class="row">
            <p class="lead mt-4">
                Robyn's Portfolio &copy; <span>{{ cYear }}</span>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear(),
        };
    },
};
</script>

<style></style>