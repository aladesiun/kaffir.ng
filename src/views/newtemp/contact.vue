<template>
   <div class="page-section">
      <div class="container">
        <div class="row align-items-center " id="contact-us">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <h2 class="title-section">Get in Touch</h2>
            <div class="divider"></div>
            <p>Get reach to us we promise you a quick respons<br>Let us know if you need to speak to one of our representative</p>
  
            <ul class="contact-list">
              <li>
                <div class="icon"><span class="mai-map"></span></div>
                <div class="content">surulere, lagos, Nigeria</div>
              </li>
              <li>
                <div class="icon"><span class="mai-mail"></span></div>
                <div class="content"><a href="#">kaffirconcept@gmail.com</a></div>
              </li>
              <li>
                <div class="icon"><span class="mai-phone-portrait"></span></div>
                <div class="content"><a href="#">+234 9037 0199 67</a></div>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 py-3 wow fadeInUp">
            <div class="subhead">Contact Us</div>
            <h2 class="title-section">Drop Us a Line</h2>
            <div class="divider"></div>
            
            <form action="#">
              <div class="py-2">
                <input type="text" class="form-control" placeholder="Full name" v-model="contact.fullname">
              </div>
              <div class="py-2">
                <input type="text" class="form-control" placeholder="Email" v-model="contact.email">
              </div>
              <div class="py-2">
                <textarea rows="6" class="form-control" placeholder="Enter message" v-model="contact.meassage"> </textarea>
              </div>
              <button type="submit" class="btn btn-primary rounded-pill mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </div> <!-- .container -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            contact:{
                fullname:'',
                email:'',
                message:''
            }
        }
    }
}
</script>

<style>

</style>