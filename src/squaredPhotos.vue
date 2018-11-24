<template>
<div class="all-photo" :style="{width: width}">
  <div class="photo-frame">
    <div class="preview-scroll">
      <vue-preview :slides="photos" :options="options" @close="handleClose" @open="handleOpen" @change="handleChange"></vue-preview>
    </div>
  </div>
</div>
</template>

<script>
/*
photo: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 800
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 800
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 800
        },{
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },{
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },{
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },{
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        }
      ]
*/

export default {
  data() {
    return {
      
    };
  },
  props:{
    width:{
      type: String,
      default: '200px'
    },
    photos:{
      type: Array,
      default: []
    },
    options:{
      type: Object,
      default: {}
    }
  },
  methods: {
    handleClose(index) {
      this.$emit('onClose', index)
    },
    handleOpen(index){
      this.$emit('onOpen', index)
    },
    handleChange(index){
      this.$emit('onChange', index)
    }
  }
};
</script>

<style lang="scss">
.all-photo{
  position: absolute;
  bottom:0;
}

.photo-frame {
  position: relative;
}

.preview-scroll {
  margin-bottom: 1.5%;
  // overflow-x: auto;
  overflow: hidden;
}

.my-gallery {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;

  $width: 32%;
  figure {
    display: inline-block !important;
    margin: 0 !important;
    margin-right: 1.5% !important;
    width: $width;
    height: 0;
    padding-bottom: $width;
    position: relative;
    flex-shrink: 0;

    a {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      position: absolute;
    }

    img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
      position: absolute;
      transform: translateX(-100%);
    }
  }

  figure:nth-child(3n){
    margin-right: 0 !important;
  }

  figure:nth-child(4),
  figure:nth-child(5),
  figure:nth-child(6),
  figure:nth-child(7),
  figure:nth-child(8),
  figure:nth-child(9){
    margin-top: 1.5% !important;
  }
}
</style>
