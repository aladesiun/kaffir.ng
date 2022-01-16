<template>
    <div class="project">
        <img :src=img :alt=imgTitle>
        <p id="title">{{title}}</p>
        <p id="about-project">{{about}}</p>
        <br>
        <a :href=link>Learn More</a>
    </div>
</template>

<script>
export default {
    props: {
        img: String,
        imgTitle: String,
        title: String,
        about: String,
        link: String,
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