<template>
    <div class="project" data-aos="fade-up">
        <img :src=img :alt=imgTitle>
        <p id="title">{{title}}</p>
        <p id="about-project">{{about}}</p>
        <br>
        <a :href=link>Learn More</a>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    props: {
        img: String,
        imgTitle: String,
        title: String,
        about: String,
        link: String,
    },
    mounted(){
        AOS.init({
            duration:800,
        })
    }
}
</script>

<style lang="scss" scoped>

$primary-color: #4f52ff;
.project{
    background: #fff;
    padding: 20px;
     img{
        width: 100%;
    }
    #title{
        padding: 10px 0;
        color: $primary-color;
        font-weight: bolder;
        font-size: 20px;
    }
    #about-project{
        line-height: 1.5em;
        color: #808080;
    }
    a{
        text-decoration: none;
        background-color: $primary-color;
        color: #fff;
        padding: 10px 20px;
    }
}

</style>