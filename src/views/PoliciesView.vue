<template>
  <section>
  <div class="flex flex-col md:flex-row md:mt-[37px] mt-[20px] mb-[35px] maw-[1920px] mauto p[40px]">
    <select id="quicklinks_dropdown" class="block md:hidden mb-[40px] border-solid border-#1B1B1B/20 border-2 rounded-[5px] ubuntu-regular text-[16px] text-black h-[34px] pl-[12px] font-bold" name="HelpCenter">
        <option class="shipping_policy__toggle_dropdown" value="shipping_policy__toggle_dropdown">Shipping Policy</option>
        <option class="refund_policy__toggle_dropdown" value="refund_policy__toggle_dropdown">Refund Policy</option>
        <option class="terms_of_service__toggle_dropdown" value="terms_of_service__toggle_dropdown">Terms of Service</option>
        <option class="faqs_toggle_dropdown" value="faqs_toggle_dropdown">FAQs</option>
    </select>
    <div id="quicklinks" class="hidden md:block mr-[80px]">
        <div class="gap-[20px] flex flex-col w-max">
        <a class="text-black ubuntu-regular text-[18px] font-bold !cursor-default" >Quick Links</a>
        <a class="text-black shipping_policy__toggle ubuntu-regular text-[14px] font-bold cursor-pointer" href="#shipping-policy">Shipping Policy</a>
        <a class="text-black refund_policy__toggle ubuntu-regular text-[14px] font-bold cursor-pointer" href="#refund-policy">Refund Policy</a>
        <a class="text-black terms_of_service__toggle ubuntu-regular text-[14px] font-bold cursor-pointer" href="#terms-of-service-policy">Terms of Service</a>
        <a class="text-black faqs_toggle ubuntu-regular text-[14px] font-bold cursor-pointer" href="#faq-policy">FAQs</a>
        </div>
    </div>
    <div id="quicklinks_info" class="">
        <div class="quicklinks_info__section shipping-policy gap-[20px] flex flex-col opac_height">
            <span class="ubuntu-regular text-black font-bold text-[16px]">Shipping within the ZA</span><p class="ubuntu-regular text-black font-normal text-[14px]">Please note that there could be additional duties to be paid once the parcel arrives in your country. Check with your government website for their clearance charges with regard to admin, duties and taxes as this is different depending on the country.</p>
        </div>
        <div class="quicklinks_info__section refund-policy gap-[20px] flex flex-col opac_height">
            <span class="ubuntu-regular text-black font-bold text-[16px]">Satisfaction Guarantee</span>
            <p class="ubuntu-regular text-black font-normal text-[14px]">We hope that you will be delighted with all the goods you receive. If for any reason you are dissatisfied, simply contact us to arrange returning the items in an unused and resaleable condition within 14 (Fourteen) working days after receipt for a full refund.</p>
            <p class="ubuntu-regular text-black font-normal text-[14px]">Please note that in these cases we do not reimburse return postage cost. If you should choose an exchange a charge will be added for the re-delivery. You are welcome to exchange your purchase at any Big Blue Store.</p>
            <span class="ubuntu-regular text-black font-bold text-[16px]">NO EXCHANGES OR REFUNDS WILL BE ALLOWED ON SALE MERCHANDISE. WE WILL CONSIDER STORE CREDIT AS COMPENSATION.</span>        
        </div>
        <div class="quicklinks_info__section terms-of-service-policy gap-[20px] flex flex-col opac_height">
            <span class="ubuntu-regular text-black font-bold text-[16px]">Prices</span>
            <p class="ubuntu-regular text-black font-normal text-[14px]">The standard rate of VAT is 15%. We reserve the right to amend or increase prices at our discretion or in the course of a sale. We operate other businesses independently, selling similar products by mail order and in our shops. The prices, although almost always the same, may vary from those shown.</p>
            <p class="ubuntu-regular text-black font-normal text-[14px]">All discount promotions exclude items on sale and delivery fees</p>
            <span class="ubuntu-regular text-[16px] font-bold text-black">Availability</span>
        </div>
        <div class="quicklinks_info__section faq-policy opac_height">
            <div class="faq_wrapper">
                <div class="faq_question flex cursor-pointer">
                    <svg class="faq_plus opac_height visible min-w-fit" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="+" d="M5.44886 13.7041V0.579102H7.67614V13.7041H5.44886ZM0 8.25524V6.02797H13.125V8.25524H0Z" fill="#1B1B1B"/>
                    </svg>

                    <svg class="faq_minus opac_height min-w-fit" width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="+" d="M0 2.25559V0.0283203H13.125V2.25559H0Z" fill="#165070"/>
                    </svg>

                    <span class="faq_title ml-[20px] text-[16px] text-black ubuntu-regular font-bold">Do I have to be registered to use the website?</span>
                </div>
                <div class="faq_answer">
                    <p class="opac_height">You can browse our products online and order as a transaction guest without having to register. However, if you would like to receive newsletters and also have the site remember you for your next visit we recommend that you do register. All we need from you are some basic details such as your name and address. We do ask you for your email address and phone number so that we can contact you about your order, but we will only use these in relation to your order, and occasionally our couriers may contact you by phone if they are having difficulty delivering your parcel. You can change your privacy settings in My Account to determine whether or not we can pass on your details to anyone else.</p>
                </div>
                <div class="border-b-2 border-gray-300 my-[20px]"></div>
            </div>
            <div class="faq_wrapper">
                <div class="faq_question flex cursor-pointer">
                    <svg class="faq_plus opac_height visible min-w-fit" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="+" d="M5.44886 13.7041V0.579102H7.67614V13.7041H5.44886ZM0 8.25524V6.02797H13.125V8.25524H0Z" fill="#1B1B1B"/>
                    </svg>

                    <svg class="faq_minus opac_height min-w-fit" width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="+" d="M0 2.25559V0.0283203H13.125V2.25559H0Z" fill="#165070"/>
                    </svg>

                    <span class="faq_title ml-[20px] text-[16px] text-black ubuntu-regular font-bold">What is the delivery time?</span>
                </div>
                <div class="faq_answer">
                    <p class="opac_height">Orders are usually delivered within 48 - 96 hours from date of dispatch. A confirmation email will be sent once your order has been received and processed. A second confirmation email will be sent once your items have been paid for in full and dispatched, also contained in this email will be the nominated courier’s tracking number with which you can track your parcel.</p>
                </div>
                <div class="border-b-2 border-gray-300 my-[20px]"></div>
            </div> 
        </div>
    </div>
</div>
</section>
</template>

<script>
export default {
  mounted() {
    // Dropdown visibility logic
    const quicklinksDropdown = document.getElementById('quicklinks_dropdown');
    const shippingPolicy = document.querySelector('.shipping-policy');
    const refundPolicy = document.querySelector('.refund-policy');
    const tosPolicy = document.querySelector('.terms-of-service-policy');
    const faqPolicy = document.querySelector('.faq-policy');

    function hideAllPolicies() {
      shippingPolicy.classList.remove('visible');
      refundPolicy.classList.remove('visible');
      tosPolicy.classList.remove('visible');
      faqPolicy.classList.remove('visible');
    }

    quicklinksDropdown?.addEventListener('change', function () {
      hideAllPolicies();
      const selectedOption = this.value;
      switch (selectedOption) {
        case 'shipping_policy__toggle_dropdown':
          shippingPolicy.classList.add('visible');
          break;
        case 'refund_policy__toggle_dropdown':
          refundPolicy.classList.add('visible');
          break;
        case 'terms_of_service__toggle_dropdown':
          tosPolicy.classList.add('visible');
          break;
        case 'faqs_toggle_dropdown':
          faqPolicy.classList.add('visible');
          break;
      }
    });

    // FAQ toggle logic
    const faqWrappers = document.querySelectorAll('.faq_wrapper');
    faqWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const paragraph = wrapper.querySelector('p');
        const minus = wrapper.querySelector('.faq_minus');
        const plus = wrapper.querySelector('.faq_plus');
        const title = wrapper.querySelector('.faq_title');
        const question = wrapper.querySelector('.faq_question');
        paragraph.classList.toggle('visible');
        minus.classList.toggle('visible');
        plus.classList.toggle('visible');
        title.classList.toggle('!text-big-blue-drk-blue');
        question.classList.toggle('mb-[20px]');
      });
    });

    // URL-based section visibility
    const sections = document.querySelectorAll('.quicklinks_info__section');
    function urlContainsWord(url, words) {
      return words.some(word => url.includes(word));
    }

    function updateVisibility() {
      const url = window.location.href;
      sections.forEach(section => {
        const classes = section.className.split(' ');
        if (urlContainsWord(url, classes)) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    }

    updateVisibility();
    window.addEventListener('popstate', updateVisibility);
  }
};
</script>


<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  boshadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.dropdown-menu a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.faq_answer{
    margin-left:36px;
}

.opac_height {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out, width 0.5s ease-in-out;
}

.visible {
    opacity: 1;
    height: auto;
    width: auto;
    font-size:14px;
}
</style>