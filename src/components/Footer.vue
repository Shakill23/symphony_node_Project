<template>
    <div class="footer-container">
      <div class="footerTop">
        <div class="row py-4 px-4">
          <div class="col col-4">
            <h4 id="h4-foooter">About Symphony</h4>
            <p id="p">Brand Story</p><br>
            <p id="p">Symphony Community</p><br>
            <p id="p"><router-link class="nav-link" to="/news">Discounts</router-link></p>
          </div>
          <div class="col col-4">
            <h4 id="h4-foooter">Customer Service</h4><br>
            <p id="p">FAQ</p><br>
            <p id="p">Refunds</p><br>
            <p id="p"><router-link class="nav-link" to="/news">Promotions</router-link></p><br>
            <p id="p"><router-link class="nav-link" to="/contact">Contact Us</router-link></p><br>
            <p id="p">Terms and Conditions</p><br>
            <p id="p">Membership</p><br>
          </div>
          <div class="col col-4">
            <h4 id="h4-foooter">News</h4><br>
            <p id="p"><router-link class="nav-link" to="/news">News</router-link></p><br>
            <p id="p">Partnerships</p><br>
            <div class="social-icons" id="i">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-pinterest"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-tiktok"></i>
            </div>
          </div>
        </div>
      </div>
  
      <div class="footerBottom py-3">
        <div class="row">
          <div class="col-12 text-center">
            <p class="lead">
              Symphony &copy; <span>{{ cYear }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer-container {
    width: 100%;
  }
  
  .footerTop {
    background-color: #006600;
    color: white;
    padding: 20px;
  }
  
  .footerBottom {
    background-color: #003200;
    color: white;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
  }
  
  #p, h4 {
    text-align: start;
  }
  </style>
  