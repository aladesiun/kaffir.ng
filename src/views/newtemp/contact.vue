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
                <div class="content"><a href="mailto:feedback@kaffir.ng">feedback@kaffir.ng</a></div>
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
            
            <form action="#" @submit.prevent="sendDetails" v-if="!isdetxx">
              <div v-if="notification.Message != '' " class="alert" :class="notification.Status ? 'alert-primary d-block' : 'alert-danger' " role="alert" >
                {{notification.Message}}
              </div>
              <div class="py-2">
                <input required type="text" class="form-control" placeholder="Full name" v-model="contactDetails.fullname">
              </div>
              <div class="py-2">
                <input required type="text" class="form-control" placeholder="Email" v-model="contactDetails.email">
              </div>
                <div class="py-2">
                <input required type="number" class="form-control" placeholder="Phone" v-model="contactDetails.phone">
              </div>
              <div class="py-2">
                <textarea rows="6" class="form-control" placeholder="Enter message" v-model="contactDetails.message"> </textarea>
              </div>
              <button type="submit" class="btn btn-primary rounded-pill mt-4">Send Message</button>
            </form>
            <div v-if="isdetxx" class="thanks">
              <p class="text-lg fw-bold capitalize">Thanks for reaching out to us we will get back to you soon </p>
            </div>
          </div>
        </div>
      </div> <!-- .container -->
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import axios from 'axios'
export default defineComponent({
   setup(){
     const hascontact=ref(false)
     const isdetxx = ref(false)
     var detxx = localStorage.getItem('detxx');
     if (detxx) {
       isdetxx.value= true;
     }
     const notification= reactive({
       Message:'',
       Status:false
     })
     const contactDetails = ref({
       fullname:'',
       email:'',
       message:'',
       phone:''
     })
     const sendDetails =async ()=>{
       try {
         const response =await axios.post('https://controller.kaffir.ng/api/kaffir-contact', contactDetails.value);
         if (response.status == 200) {
           notification.Message=response.data.message;
           notification.Status=true;
           hascontact.value=true;
           var user = encodeURIComponent(JSON.stringify(contactDetails.value));
           localStorage.setItem('detxx', user);
           setTimeout(() => {
             window.location.href='/';
           }, 1000);

           

         } 
        
       } catch (error) {
         if (error.response.status == 500) {
           notification.Message='Email already exist';
         }
           notification.Message=error.response.data.message;
       }
     localStorage.setItem('hascontact', hascontact)
       
     }
   
     return{
       contactDetails,sendDetails,notification,isdetxx
     }
   }
})
</script>

<style>

</style>