<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid p-3">
            <a class="navbar-brand" href="#landing">
                <img src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png" alt="logo"
                    loading="lazy" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <a class="navbar-brand" href="#landing">
                        <img src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png" alt="logo"
                            loading="lazy" />
                    </a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav fw-bolder ms-auto">
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="#landing">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#resume">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#testimonials">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavComp",
};
</script>

<style></style>