<template>

</template>


<div class="subscribtion-section bg-black px-[10px] py-[30px] sm:p-8">
    <div class="subscribtion-container mx-auto max-w-[1440px] flex flex-col">
      <div class="header-block  md:mb-8">
        <div class="text-[32px] md:text-[60px] text-white leading-[100%] mb-10">{{ section.settings.text }}</div>
        <div class="subheader-block text-[12px] sm:text-[16px] text-white">
          {{ section.settings.subtext  }}
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-4 min-h-[200px] my-10">
        <div class="w-full md:w-1/2 flex flex-col justify-end items-start">
          <div class="flex flex-col items-start">
            <div class="below-text md:max-w-[250px] text-[12px] sm:text-[16px] text-white">{{ section.settings.below_text }}</div>  
            <div class="first-button flex flex-col justify-center items-center mt-3">
              <a class="text-center leading-[140%] min-w-[200px] sm:min-w-[300px] py-3 uppercase hover:tracking-[4px]"
                 href="{{ section.settings.button_url }}"
                 style="background-color: {{ section.settings.btn_bg_color }}; color: {{ section.settings.btn_text_color }}">
                {{ section.settings.btn_text }}
              </a>  
            </div> 
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-[20px] md:mt-0">
          <div class="w-full flex flex-col sm:flex-row gap-8 sm:gap-0">
            <div class="w-full sm:w-1/2">
              <div class="right-header text-white text-[16px] md:text-[20px] mb-[16px]">{{ section.settings.right_text_1 }}</div>
              {% for block in section.blocks %}
                <div class="right-content text-white text-[12px] sm:text-[16px] hover:tracking-[2px] hover:pl-2 my-1">
                  {{ block.settings.left_text }}  
                </div>
              {% endfor %}
            </div>
            <div class="w-full sm:w-1/2">
              <div class="right-header text-white text-[16px] md:text-[20px] mb-[16px]">{{ section.settings.right_text_2 }}</div>
              {% for block in section.blocks %}
                <div class="right-content text-white text-[12px] sm:text-[16px] hover:tracking-[2px] hover:pl-2 my-1">
                  {{ block.settings.right_text }}  
                </div>
              {% endfor %}
            </div>  
          </div>
        </div>  
      </div>
      <hr>
      <div class="footer-block mt-8">
        <div class="flex flex-row justify-between">
          <div class="left-content text-white uppercase">
            {{ section.settings.footer_text_1 }}  
          </div>
          <div class="right-content text-white uppercase">
            {{ section.settings.footer_text_2 }}   
          </div>
        </div>  
      </div>
    </div>  
  </div>
  
  {% schema %}
  {
    "name": "Subscribtion",
    "settings": [
      {
        "type": "text",
        "id": "text",
        "label": "Text",
        "default": "<h1>Join Our Loyalty Program</h1>"
      },
      {
        "type": "richtext",
        "id": "subtext",
        "label": "Subtext",
        "default": "<p>Become a part of our Sweet Spa family by joining our loyalty program. Enjoy exclusive discounts, priority bookings, and special offers reserved just for our members.</p>"  
      },
      {
        "type": "richtext",
        "id": "below_text",
        "label": "Below Text",
        "default": "<p>Be the first to know about our latest treatments, exclusive offers, and wellness tips.</p>" 
      },
      {
        "type": "text",
        "id": "btn_text",
        "label": "Button Text",
        "default": "<p>Subscribe</p>" 
      },
      {
        "type": "url",
        "id": "button_url",
        "label": "Button Link"
      },
      {
        "type": "color_background",
        "id": "btn_bg_color",
        "label": "Button Bg Color",
        "default": "#fff"
      },
      {
        "type": "color_background",
        "id": "btn_text_color",
        "label": "Button Text Color",
        "default": "#000"
      },
      {
        "type": "richtext",
        "id": "right_text_1",
        "label": "Right Text 1",
        "default": "<p>WHY JOIN US?</p>" 
      },
      {
        "type": "richtext",
        "id": "right_text_2",
        "label": "Right Text 2",
        "default": "<p>HOW IT WORKS</p>" 
      },
      {
        "type": "richtext",
        "id": "footer_text_1",
        "label": "Footer Text 1",
        "default": "<p>VIEW OFFERS</p>" 
      },
      {
        "type": "richtext",
        "id": "footer_text_2",
        "label": "Footer Text 2",
        "default": "<p>FIND & BOOK</p>" 
      }
    ],
    "blocks": [
      {
        "name": "left_text-block",
        "type": "left_text-block",
        "settings": [
          {
            "type": "richtext",
            "id": "left_text",
            "label": "Left Text",
            "default": "<p>Exclusive Discounts</p>"  
          }
        ]
      },
      {
        "name": "right_text-block",
        "type": "right_text-block",
        "settings": [
          {
            "type": "richtext",
            "id": "right_text",
            "label": "Right Text",
            "default": "<p>Subscribe</p>"  
          }
        ]
      }
    ],
    "presets": [
      {
        "name": "Subscribtion"  
      }
    ]
  }
  {% endschema %}