import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";

const portfolioURL = "https://robynainsley21.github.io/vue-data-eomp/data";

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    experiences: null,
    skills: null,
    testimonials: null,
    projects: null,
    contact: null,
  },
  getters: {},
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value;
    },
    setAbout(state, value) {
      state.about = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setExperiences(state, value) {
      state.experiences = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setContact(state, value) {
      state.contact = value;
    },
  },
  actions: {
    async fetchJobTitle(context) {
      try {
        let { jobTitle } = await (await axios.get(portfolioURL)).data;
        context.commit("setJobTitle", jobTitle);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the job title",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchAbout(context) {
      try {
        let { about } = await (await axios.get(portfolioURL)).data;
        context.commit("setAbout", about);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch about details",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchEducation(context) {
      try {
        let { education } = await (await axios.get(portfolioURL)).data;
        context.commit("setEducation", education);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch education details",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchExperiences(context) {
      try {
        let { experiences } = await (await axios.get(portfolioURL)).data;
        context.commit("setExperiences", experiences);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch experience details",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchSkills(context) {
      try {
        let { skills } = await (await axios.get(portfolioURL)).data;
        context.commit("setSkills", skills);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch skills details",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (await axios.get(portfolioURL)).data;
        context.commit("setTestimonials", testimonials);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch testimonials details",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProjects(context) {
      try {
        let { projects } = await (await axios.get(portfolioURL)).data;
        context.commit("setProjects", projects);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch projects details",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchContact(context) {
      try {
        let { contact } = await (await axios.get(portfolioURL)).data;
        context.commit("setContact", contact);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch contact details",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});
