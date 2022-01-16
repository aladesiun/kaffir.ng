<template>
    <section class="header">
            <header>
                <div class="logo">
                    <img src="../assets/kaffir-white.png" alt="kaffir.ng logo">
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
            <div class="mobile-menu">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
    </section>

</template>

<script>
export default {
  methods:{
      toggleMobileMenu(){
          const MobileMenu = document.querySelector('.mobile-menu')
          MobileMenu.classList.toggle('show')
      }
  },
  mounted(){
      const header = document.querySelector('.header')
      const MobileMenu = document.querySelector('.mobile-menu')
      window.addEventListener('resize', ()=>{
          let headerHeight = header.getBoundingClientRect().width;
          if(headerHeight > 855){
               MobileMenu.classList.remove('show')
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $primary-color;
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
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
                       color: #fff;
                   }
                   a:hover{
                       color: $primary-color;
                   }
               }
           }
        }
        .menu-btn{
            display: none;
        }
    }
}

.mobile-menu{
    display: none !important;
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
        top:15vh;
        width: 100%;
        background: $primary-color;
        border-top: 1px solid #808080;
        nav{
            width: 80%;
            margin: 0 auto;
            padding: 10px 0;
            ul{
                li{
                    list-style: none;
                    padding: 10px 0;
                    a{
                        color: #fff;
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


