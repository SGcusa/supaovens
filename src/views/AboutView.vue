<template>
  <section>
    <div class="about-us">
      <hr>
      <div class="our-service-sec">
        <h1 class="oss-header">Our Story</h1>
      </div>
      <hr>
        <p class="header-text">Founded in 2019 by Simphiwe Bhusa, Supa Ovens has rapidly become a trusted name in the world of pizza ovens. Located in the heart of Cape Town, at 27055 Shumani Street, Strand, we pride ourselves on delivering high-quality, handcrafted pizza ovens to homes and businesses nationwide.</p>
      <div class="row">
        <div class="col-5 abt-section abt-right slide-in-left">
          <h3>Our Mission</h3>
          <p>At Supa Ovens, our mission is simple: to bring the joy of authentic, homemade pizza to everyone. We believe that you don’t need to be a qualified chef to make delicious pizza. With our expertly crafted ovens and a bit of creativity, anyone can create their own culinary masterpieces.</p>
        </div>
        <div class="col-5 abt-section slide-in-right">
          <h3>Quality Craftsmanship</h3>
          <p>Our ovens are a testament to meticulous craftsmanship and innovation. Each unit is handcrafted to perfection, combining traditional techniques with modern technology to ensure durability, efficiency, and exceptional cooking results. We offer a range of customizable options to meet your specific needs, from size and color to additional features.</p>
        </div>
      </div>
      <div class="row">
        <marquee class="display-1" behavior="sroll" direction="right" loop="15">
          About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us - About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us
        </marquee>
      </div>
      <div class="row">
        <div class="col-5 abt-section abt-right slide-in-left">
          <h3>Customer Satisfaction</h3>
          <p>We are committed to providing excellent customer service and support. Our dedicated team is here to help you choose the perfect oven, guide you through the installation process, and ensure your complete satisfaction. Join hundreds of satisfied customers who have chosen Supa Ovens for their reliable and efficient pizza cooking solutions.</p>
        </div>
        <div class="col-5 abt-section slide-in-right">
          <h3>Nationwide Delivery</h3>
          <p>We understand the importance of convenience, which is why we offer nationwide delivery. No matter where you are, we’ll bring your pizza oven right to your doorstep, so you can start enjoying homemade pizza as soon as possible.</p>
        </div>
      </div>
      <div class="row about">
        <div class="col-5 abt-section fade-in">
          <h3>Our Team</h3>
          <p>Our team at Supa Ovens is passionate about pizza and dedicated to excellence. We are here to support you every step of the way, from selecting the right oven to mastering the art of pizza making.</p>
          <p>Thank you for choosing Supa Ovens. We look forward to helping you create delicious, homemade pizza and making your cooking experience unforgettable.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="business-name fade-in">
      <h1>Supa Ovens</h1>
      <h6>Founded in 2019 By Simphiwe Bhusa</h6>
    </div>
    <footer>
      <hr>
      <div class="row">
        <div class="col-6 footer-sec">
          <div class="contact-secfade-in">
            <div class="contact-header">
              <h4>Contact</h4>
            </div>
            <p>27055 Shumani Street, Strand, Cape Town, 7140</p>
            <p>069-292-9578</p>
            <p>gcusaaa@gmail.com</p>
          </div>
          <hr>
          <div class="menu-and-socials">
            <div class="row">
              <div class="col-6 fade-in">
                  <h4>Menu</h4>
                  <div class="menu-1">
                    <router-link to="/products"><button class="s-btn">Our Services</button></router-link>
                  </div>
                  <div class="menu-2">
                    <router-link to="/team"><button class="s-btn">Meet the Team</button></router-link>
                  </div>
                  <div class="menu-3">
                    <router-link to="/about"><button class="s-btn">About Us</button></router-link>
                  </div>
                </div>
              <div class="col-6 fade-in">
                <h4>Socials</h4>
                <div class="social-1">
                  <button class="s-btn">Facebook</button>
                </div>
                <div class="social-2">
                  <button class="s-btn">Instagram</button>
                </div>
                <div class="social-3">
                  <button class="s-btn">Linkedin</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 fade-in">
                <div class="abt-header">
                <h4>Working Hours</h4>
                </div>
                <div class="abt-content">
                  <p>Monday - Friday 09:00 - 17:00</p>
                    <p>Saturday 09:00 - 17:00</p>
                    <p>Sunday CLOSED</p>
                  </div>
                </div>
              <div class="col-6">
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="get-in-touch">
            <h4>Get in Touch</h4>
          </div>
          <hr>
          <div class="contact-form">
            <div class="mb-4">
              <div class="row">
                <div class="col-6 fade-in">
                  <label for="exampleFormControlInput1" class="form-label">First name <i class="bi bi-asterisk"></i></label>
                  <input type="text" class="form-control" id="exampleFormControlInput1">
                </div>
                <div class="col-6 fade-in">
                  <label for="exampleFormControlInput1" class="form-label">Last name <i class="bi bi-asterisk"></i></label>
                  <input type="text" class="form-control" id="exampleFormControlInput1">
                </div>
              </div>
            </div>
            <div class="mb-4 fade-in">
              <label for="exampleFormControlInput1" class="form-label">Email address <i class="bi bi-asterisk"></i></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-4 fade-in">
              <label for="exampleFormControlTextarea1" class="form-label">Query</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
          <div class="cnt-btn fade-in">
            <button class="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </footer>
    <div class="below-footer">
      <div class="ts-and-cs">
        <div class="left-sec">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div class="right-sec">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </section>
</template>





<script>
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
});
</script>






<style scoped>
h1{
font-size: 80px;
font-weight: 700;
margin-top: 15%;
}

h2{
font-size: 60px;
font-weight: 700;
padding: 40px;
}

h3{
font-size: 40px;
font-weight: 700;
padding-top: 20px;
}

h4{
font-size: 25px;
font-weight: 700;
padding: 30px 0px 20px 0px;
}

.s-btn, .tm-btn{
border: none;
background-color: transparent;
}

.contact-btn, .home-summary-text, .cu-btn{
margin-bottom: 100px;
}


.row, .cnt-btn{
display: flex;
justify-content: center;
}

.header-text, .oss-header{
text-align: left;
}

.header-text{
padding: 20px 0px 20px 0px;
width: 70%;
}

.s-btn:hover{
letter-spacing: 1px;
font-weight: bold;
}



marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  animation: marquee 15s linear infinite;
  background-color: black;
  color: white;
  text-transform: uppercase;
  letter-spacing: 8px;
  padding: 80px 0px;
  margin: 80px 0px;
}

@keyframes marquee {
  from {
      transform: translateX(100%);
  }
  to {
      transform: translateX(-100%);
  }
}

.abt-section{
  margin: 4% 0%;
  text-align: left;
}

.abt-section h3, .abt-section p{
  padding: 20px 50px 20px 20px;
}

.abt-right{
  border-right: 1px solid rgb(184, 184, 184);
}







.contact-sec, .get-in-touch{
height: 200px;
}

.contact-sec{
display: flex;
flex-direction: column;
justify-content: center;
}

.contact-sec p {
margin: 3px;
padding: 0px;
}

.get-in-touch{
padding: 41px 0px 0px 20px;
}

.contact-form, .menu-and-socials, .contact-sec{
padding: 30px 0px 0px 20px;
}
.contact-header{
padding: 0px 0px 10px 0px;
}

.menu-1, .menu-2, .menu-3, .social-1, .social-2, .social-3{
padding-top: 10px;
}

.form-label{
display: flex;
}

.form-control{
border: 1px solid;
padding: 10px;
}

.bi-asterisk{
font-size: 8px;
padding-left: 8px;
}

.below-footer{
background-color: rgb(234, 234, 234);
padding: 25px 0px 10px 0px;
margin-top: 20px;
}

.submit-btn{
width: 100%;
margin-left: 20px;
}

.right-sec{
padding-right: 20px;
}

.ts-and-cs, .left-sec{
display: flex;
justify-content: space-between;
}

.footer-sec{
border-right: 1px solid rgb(184, 184, 184);
}

.row, .cnt-btn{
display: flex;
justify-content: center;
}

.col-4{
margin-top: 20px;
}

footer, .left-sec p, .about-us{
padding-left: 50px;
padding-right: 50px;
}

.card-body, footer{
text-align: left;
}

.submit-btn{
color: white;
background-color: black;
border: 1px solid black;
border-radius: 20px;
padding: 8px 30px 8px 30px;
text-transform: capitalize;
}







/* SCROLL ANIMATION */
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-out;
}

.fade-in.visible {
  opacity: 1;
}

.slide-in-left {
  transform: translateX(-100%);
  transition: transform 1s ease-out;
}

.slide-in-left.visible {
  transform: translateX(0);
}

.slide-in-right {
  transform: translateX(100%);
  transition: transform 1s ease-out;
}

.slide-in-right.visible {
  transform: translateX(0);
}

</style>