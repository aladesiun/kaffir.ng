<template>
  <section class="hero">
      <div class="container" data-aos="zoom-in">
          <div class="hero-text">
              <h1>Welcome to <span>Kaffir</span></h1>
              <p>Your number one Tech Solution partner, We help startup organization achieve their aim</p>
              <p>you have a great idea you need hands on ? contact us now to get started</p>
              <a href="#">Learn More</a>
          </div>
          <div class="hero-asset">
              <img src="../assets/undraw_programming_re_kg9v.svg" alt="programmer-image">
              <img src="../assets/undrawpair.svg" alt="programmer-image">
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

section.hero{
    width: 100%;
    min-height: 85vh;
    background: #f3f3f3;
    padding-bottom: 20px;
    .container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 70px;
        .hero-text{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1{
                font-size: 40px;
                padding-bottom: 10px;
                span{
                    color: $primary-color;
                    font-size: 50px;
                }
            }
            p{
                color: #808080;
                line-height: 1.5em;
                padding-bottom: 10px;
            }
            a{
                color: #fff;
                background: $primary-color;
                padding: 10px 20px;
                text-decoration: none;
            }
            a:hover{
                color: $primary-color;
                background: #fff;
                border: 1px solid $primary-color;
            }
        }
        .hero-asset{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 90%;
            }
        }
    }
}

@media (max-width:870px){
    section.hero{
        .container{
            flex-direction: column;
            .hero-asset{
                width: 100%;
                padding-top: 50px;
                img{
                    width: 100%;
                }
            }
        }
    }
}

@media (max-width:600px){
    section.hero{
        min-height: 90vh;
    }
}
</style>