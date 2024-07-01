<template>
  <div>
    <section class="row" id="landing">
      <LandingSection />
    </section>
    <section class="row" id="about">
      <h2 class="p-4 text-center">About</h2>
      <div class="row">
        <AboutSection />
      </div>
    </section>
    <section class="row" id="resume">
      <h2 class="p-4 text-center">Resume</h2>
      <ResumeSection />
    </section>
    <section class="row" id="skills">
      <h2 class="p-4 text-center">Skills</h2>
      <SkillsSection />
    </section>
    <section class="row" id="testimonials">
      <h2 class="p-4 text-center">Testimonials</h2>
      <TestimonialSection />
    </section>
    <section class="row text-center" id="projects">
      <h2 class="p-4">Projects</h2>
      <ProjectsSection />
    </section>
    <section class="row max-height" id="contact">
      <h2 class="p-4">Contact</h2>
      <ContactSection />
    </section>
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue';
import SkillsSection from '@/components/SkillsSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    ResumeSection,
    SkillsSection,
    TestimonialSection,
    ProjectsSection,
    ContactSection
  }
}
</script>