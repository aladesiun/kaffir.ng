<template>
    <section class="header" ref="header">
            <header>
                <div class="logo">
                    <img src="../assets/kkf.png" alt="kaffir.ng logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div class="menu-btn" @click="toggleMobileMenu">
                    <img src="../assets/icon-hamburger.svg" alt="icon bar">
                </div>
            </header>
            <div class="mobile-menu" ref="mobileMenu">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
    </section>
    <div id="scrollTop" ref="top" @click="scrollToTop" class="justify-center items-center">
        <p><i class="fa fa-long-arrow-up"></i></p>
    </div>
</template>

<script>
export default {
  methods:{
      toggleMobileMenu(){
          this.$refs.mobileMenu.classList.toggle('show')
      },
      scrollToTop(){
          // For Chrome, Firefox, and Opera
          document.documentElement.scrollTop = 0;
          //For Safari
          document.body.scrollTop = 0;
      }
  },
  mounted(){
      const header = document.querySelector('.header')
      const MobileMenu = document.querySelector('.mobile-menu')
      window.addEventListener('resize', ()=>{
          let headerWidth = header.getBoundingClientRect().width;
          if(headerWidth > 855){
               MobileMenu.classList.remove('show')
          }
      })
      window.addEventListener('scroll', ()=>{
          let screenHeght = window.pageYOffset;
          if(screenHeght > 400){
              this.$refs.top.classList.add('show')
          }else{
              this.$refs.top.classList.remove('show')
          }
      })

  },
  beforeUnmount(){
      window.removeEventListener('resize', this.oneresize)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$primary-color: #4f52ff;

section.header{
    position: relative;
    background-color: #fff;
    width: 100%;
    height: auto;
    min-height: 11vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    header{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            width: 50%;
            img{
                width: 20%;
            }
        }
        nav{
           ul{
               li{
                   display: inline-block;
                   padding: 0 15px;
                   a{
                       text-decoration: none;
                       color: $primary-color;
                   }
                   a:hover{
                       text-decoration: underline;
                   }
               }
           }
        }
        .menu-btn{
            display: none;
        }
    }
    .mobile-menu{
        display: none;
    }
}
#scrollTop.show{
    display: flex!important;
}
#scrollTop{
    position: fixed;
    bottom: 5%;
    display: none;
    right: 7%;
    height: 30px;
    background: #4f52ff;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
}


.mobile-menu.show{
    display: block !important;
}

@media (max-width:870px){
    section.header{
        header{
            .logo{
                img{
                    width: 40%;
                }
            }
            nav{
                display: none;
            }
            .menu-btn{
                display: block;
                cursor: pointer;
            }
        }
        .mobile-menu{
            position: absolute;
            top: 15vh;
            padding: 10px 0;
            width: 100%;
            background: #fff;
            z-index: 100;
            nav{
                width: 80%;
                margin: 0 auto;
                ul{
                    li{
                        padding: 10px 0;
                        list-style: none;
                        a{
                            color: $primary-color;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
        
    }
    
}

@media (max-width:600px){
    section.header{
        height: 10vh;
        header{
            .logo{
                img{
                    width: 50%;
                }
            }
        }
        .mobile-menu{
            top: 10vh;
        }
    }
}
</style>


