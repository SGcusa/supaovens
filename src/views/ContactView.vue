<template>
    <section>
      <div class="services">
        <hr>
        <div class="our-service-sec">
          <h1 class="oss-header">Get in Touch</h1>
        </div>
        <hr>
        <div class="contact-form">
              <div class="mb-4">
                <div class="row">
                  <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">First name <i class="bi bi-asterisk"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1">
                  </div>
                  <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Last name <i class="bi bi-asterisk"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1">
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Email address <i class="bi bi-asterisk"></i></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="gcusaaa@gmail.com">
              </div>
              <div class="mb-4">
                <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div class="cnt-btn">
              <button class="submit-btn">Submit</button>
            </div>
      </div>
    </section>
  
    <section>
    <div class="business-name">
      <h1>Supa Ovens</h1>
      <h6>Founded in 2019 By Simphiwe Bhusa</h6>
    </div>
    <footer>
      <hr>
      <div class="row">
        <div class="col-6 footer-sec">
          <div class="contact-sec">
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
              <div class="col-6">
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
              <div class="col-6">
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
              <div class="col-6">
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
                <div class="col-6">
                  <label for="exampleFormControlInput1" class="form-label">First name <i class="bi bi-asterisk"></i></label>
                  <input type="text" class="form-control" id="exampleFormControlInput1">
                </div>
                <div class="col-6">
                  <label for="exampleFormControlInput1" class="form-label">Last name <i class="bi bi-asterisk"></i></label>
                  <input type="text" class="form-control" id="exampleFormControlInput1">
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">Email address <i class="bi bi-asterisk"></i></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-4">
              <label for="exampleFormControlTextarea1" class="form-label">Query</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
          <div class="cnt-btn">
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
  
  .services{
  padding-left: 50px;
  padding-right: 50px;
  }
  
  .row, .cnt-btn{
  display: flex;
  justify-content: center;
  }
  
  .products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding-top: 40px;
  }
  
  .product {
  padding: 20px;
  text-align: left;
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
  



.contact-header{
  padding: 0px 0px 0px 0px;
}
  
.menu-1, .menu-2, .menu-3, .social-1, .social-2, .social-3, contact-sec p{
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
  
  footer, .left-sec p{
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
  
  </style>