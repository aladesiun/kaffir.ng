<template>
  <div class="home">
    <Header />
    <Projects />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Projects from '../components/Projects.vue'

export default {
  components:{Header, Projects}
}
</script>
