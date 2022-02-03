<template>
  <div class="home">
    <Header />
    <Hero />
    <About />
    <Projects />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Projects from '../components/Projects.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'

export default {
  components:{Header, Hero, About, Projects}
}
</script>
