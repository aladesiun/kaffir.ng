<template>
    <section class="projects">
        <div class="container">
            <div class="title">
            <h2>Featured Projects</h2>
            </div>
            <div class="projects-container">
                <Project :img=calculatorImg imgTitle="Calculator image" title="Lorem Ipsum" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore est quos cupiditate ullam at debitis veniam architecto! Sed, obcaecati." link='https://www.nairaland.com'/>
                <Project :img=calculatorImg imgTitle="Calculator image" title="Lorem Ipsum" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore est quos cupiditate ullam at debitis veniam architecto! Sed, obcaecati." link='https://www.nairaland.com'/>
                <Project :img=calculatorImg imgTitle="Calculator image" title="Lorem Ipsum" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore est quos cupiditate ullam at debitis veniam architecto! Sed, obcaecati." link='https://www.nairaland.com'/>
                
            </div>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue'

export default {
    data(){
        return{
            calculatorImg: require('../assets/calc.jpg')
        }
    },
    components:{Project}
}
</script>

<style lang="scss" scoped>
$primary-color: #4f52ff;

section.projects{
    width: 100%;
    padding: 50px 0;
    background-color: #f7f7f7;
    margin-top: 100px;
    .container{
        width: 80%;
        margin: 0 auto;
        .title{
            h2{
                color: $primary-color;
                font-size: 35px;
                font-weight: bolder;
            }
        }
        .projects-container{
            padding: 30px 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 50px;
        }
    }
}

@media (max-width:1050px){
    section.projects{
        .container{
            .projects-container{
                grid-template-columns: 1fr 1fr;
            }
        }
    }
}

@media (max-width:700px){
    section.projects{
        .container{
            .projects-container{
                grid-template-columns: 1fr;
            }
        }
    }
}

</style>
