<template>
  <section class="about">
        <div class="title">
            <h2>About <span>Kaffir</span></h2>
        </div>
       <div class="container" data-aos="fade-up">
           <div class="about-text">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere tenetur ducimus veniam id temporibus at nemo reiciendis, voluptatibus dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere tenetur ducimus veniam id temporibus at nemo reiciendis, voluptatibus dicta!</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere tenetur ducimus veniam id temporibus at nemo reiciendis, voluptatibus dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere tenetur ducimus veniam id temporibus at nemo reiciendis, voluptatibus dicta!</p>
           </div>
           <div class="about-asset">
               <img src="../assets/undraw_team_spirit_re_yl1v.svg" alt="about-image">
           </div>
       </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    mounted(){
        AOS.init({
            duration:800,
        })
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #4f52ff;

section.about{
    width: 80%;
    margin: 50px auto;
    .title{
            display: flex;
            align-items: flex-start;
            padding-bottom: 5px;
            h2{
                font-size: 30px;
                border-bottom: 5px solid $primary-color;
                span{
                    color: $primary-color;
                }
            }
    }
    .container{
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 50px;
       padding-top: 40px;
        .about-asset{
            width: 50%;
            img{
               width: 100%;
            }
        }
        .about-text{
            width: 50%;
            align-self: flex-start;
            p{
                line-height: 1.5em;
                padding: 10px 0;
                color: #808080;
            }
        }
    }
}

@media (max-width:900px){
section.about{
    .container{
        flex-direction: column;
        .about-text{
            width:100%;
            order:2;
        }
        .about-asset{
            width:100%;
            order: 1;
        }
    }
}
}
</style>