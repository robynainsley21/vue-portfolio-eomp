<template>
  <div>
    <section class="row" id="landing">
      <LandingSection />
    </section>
    <section
      class="row max-height animate__fadeInUp animate__infinite"
      id="about"
    >
      <h2 class="display-2 p-4 text-center">About</h2>
      <div class="row">
        <AboutSection />
        <div class="line"></div>
      </div>
    </section>
    <section class="row resume-background" id="resume">
      <div class="blur-background">
        <h2 class="display-2 p-4 text-center">Resume</h2>
        <ResumeSection />
      </div>
    </section>
    <section class="row" id="skills">
      <div class="line"></div>
      <h2 class="display-2 p-4 text-center">Skills</h2>
      <SkillsSection />
    </section>
    <section class="row" id="testimonials">
      <div class="line"></div>
      <h2 class="display-2 p-4 text-center">Testimonials</h2>
      <TestimonialSection />
    </section>
    <section class="row text-center" id="projects">
      <div class="line"></div>
      <h2 class="display-2 p-4 mb-5 mt-3">Projects</h2>
      <ProjectsSection />
    </section>
    <section class="row" id="contact">
      <div class="line"></div>
      <h2 class="display-2 text-center m-0 p-0">Contact</h2>
      <ContactSection />
    </section>
  </div>
</template>

<script>
import LandingSection from "@/components/LandingSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ResumeSection from "@/components/ResumeSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    LandingSection,
    AboutSection,
    ResumeSection,
    SkillsSection,
    TestimonialSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>
