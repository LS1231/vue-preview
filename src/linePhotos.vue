<template>
  <div class="f-photo" :style="{width: width}">
    <div class="line-photo" >
      <div class="preview-scroll" :style="{width: size}">
        <vue-preview
          :layout="'block'"
          :slides="photos"
          :options="options"
          @close="handleClose"
          @open="handleOpen"
          @change="handleChange"
        ></vue-preview>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    width: {
      type: String,
      default: "300px"
    },
    size:{
      type: String,
      default: '350px'
    },
    photos: {
      type: Array,
      default: []
    },
    options: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleClose(index) {
      this.$emit("onClose", index);
    },
    handleOpen(index) {
      this.$emit("onOpen", index);
    },
    handleChange(index) {
      this.$emit("onChange", index);
    }
  }
};
</script>

<style lang="scss">
.f-photo {
  height: auto;
  position: absolute;
  overflow-x: scroll !important;

  .preview-scroll {
  position: relative;
  height: auto;
  overflow-y: hidden;
  overflow-x: hidden !important;
}

  .line-photo {
    overflow-x: scroll;
    overflow-y: hidden;

    .my-gallery{
      display: flex !important;
      flex-wrap: nowrap;
    }

    .my-gallery figure {
      width: 18% !important;
      padding-bottom: 18% !important;
    }
  }

  figure:nth-child(1),
  figure:nth-child(2),
  figure:nth-child(3),
  figure:nth-child(4),
  figure:nth-child(5),
  figure:nth-child(6),
  figure:nth-child(7),
  figure:nth-child(8),
  figure {
    margin-right: 1% !important;
  }
}

</style>
