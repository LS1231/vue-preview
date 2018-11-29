<template>
  <div class="all-photo" :style="{width: width}">
    <div class="photo-frame">
      <div class="preview-scroll">
        <vue-preview
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

<style lang="scss" >
.all-photo{
  position: absolute;
  top:50%;

  figure:nth-child(3n) {
    margin-right: 0 !important;
  }

  figure:nth-child(4),
  figure:nth-child(5),
  figure:nth-child(6),
  figure:nth-child(7),
  figure:nth-child(8),
  figure:nth-child(9) {
    margin-top: 1.2% !important;
  }
}

.photo-frame {
  position: relative;
}

.preview-scroll {
  margin-bottom: 1.5%;
  overflow-x: auto;
  overflow: hidden;
}


</style>
