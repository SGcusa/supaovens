<template>

</template>

<style>
  .flex-grid-section {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255) 75%, rgba(0, 0, 0) 25%);
    overflow: hidden;
  }

  .grid-container {
    display: grid;
    grid-template-rows: repeat(3, auto); /* Three rows */
    grid-template-columns: repeat(4, 1fr); /* Four columns */
    gap: 0.5rem; /* Add space between blocks */
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid-item {
    overflow: hidden;
    position: relative;
  }

  .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Example of individual block customization */
  .item-1 { grid-row: span 2; grid-column: span 1; }
  .item-2 { grid-row: span 1; grid-column: span 2; }
  .item-3 { grid-row: span 1; grid-column: span 1; }
  .item-4 { grid-row: span 2; grid-column: span 1; }
  /* Define other customizations as needed */
</style>

<div class="flex-grid-section flex flex-col justify-center items-center"
    style="padding-top: {{ section.settings.padding_top }}px; padding-bottom: {{ section.settings.padding_bottom }}px">
  <div class="header text-center mb-10 px-[20px]">
    <h1 class=" text-[32px] sm:text-[40px] my-3">{{ section.settings.text }}</h1>
    <div class="subtext max-w-[800px]">
      <div class="text-[12px] sm:text-[16px]">{{ section.settings.subtext }}</div>
    </div>
  </div>

  <div class="grid-container px-[10px] md:px-[20px]">
    {% for block in section.blocks %}
      <div class="grid-item {{ block.settings.custom_class }}">
        <img src="{{ block.settings.image | image_url: width: '2000' }}" alt="Gallery Image {{ forloop.index }}">
      </div>
    {% endfor %}
  </div>
</div>

{% schema %}
{
  "name": "Flex Grid",
  "settings": [
    {
      "type": "text",
      "id": "text",
      "label": "Section Header Text"
    },
    {
      "type": "richtext",
      "id": "subtext",
      "label": "Subheader Text"
    },
    {
      "type": "range",
      "id": "padding_top",
      "label": "Padding Top",
      "min": 0,
      "max": 100,
      "default": 20
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "label": "Padding Bottom",
      "min": 0,
      "max": 100,
      "default": 20
    }
  ],
  "blocks": [
    {
      "type": "image-block",
      "name": "Image Block",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Gallery Image"
        },
        {
          "type": "text",
          "id": "custom_class",
          "label": "CSS Class for Block",
          "info": "pick between item-1, item-2, item-3, item-4, "
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Flex Grid"
    }
  ]
}
{% endschema %}
