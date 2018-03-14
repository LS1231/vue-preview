# Vue preview plugin

> 一 A Vue Integrated [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) Image Preview Plugin

![](https://img.shields.io/npm/dm/vue-preview.svg)
![](https://img.shields.io/npm/v/vue-preview.svg)

## Requirements

[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

## Demo

[Live Demo >>](https://ls1231.github.com/vue-preview/)

## Installation

``` bash
npm i vue-preview -S
```

## Usage

Notice:
 - This plugin currently support vue2.5 and above


### Install plugin

``` javascript
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

// with parameters install
Vue.use(preview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
```

### Examples

```html
<template>
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
</template>

<script>
export default {
    data () {
      return {
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
  }
</script>
```

### Prop

##### slide item options

|  Property | Description
| :---  | :---
| src   | main (large) image
| msrc  | small image
| alt   | image replacement text
| w     | image width
| h     | image height

### Events

|  Event name | Description | parameter
| :---  | :--- | :---
| close   | close gallery | nothing

## License

[MIT](https://github.com/LS1231/vue-security-code/blob/master/LICENSE) Copyright (c) 2018 liusong
