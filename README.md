# Vue preview plugin

> 一 A Vue Integrated [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) Image Preview Plugin

![](https://img.shields.io/npm/dm/vue-preview.svg)
![](https://img.shields.io/npm/v/vue-preview.svg)

## Requirements

[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

## Installation

``` bash
npm i vue-preview -S
```

## Usage

Notice:
 - This plugin currently support vue2.0 and above
 - `img` tag class can not be removed

If you are using `vue-cli` generated projects, you may need to modify the `webpack.base.conf.js` file loaders and add a loader. The reason is the plugin uses ES6 syntax, so you need to compile the code.

``` javascript
{
    test: /vue-preview.src.*?js$/,
    loader: 'babel'
}
```

### Install plugin

``` javascript
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
```

### Examples

```html
<template>
  <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
</template>

<script>
export default {
    data () {
      return {
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    }
  }
</script>
```

### Methods

The plugin provides the following two methods, `vm` represents a component instance:

#### vm.$preview.open(index, list, options)

Parameters Description:

|  Parameters | Description | Type | Required
| :---  | :---  | :---   | :--- 
| index     |The index of the current image  |   Number |    Yes
| list      |Image list       |   Array  |   Yes
| options   |Configuration options for Preview Plugin ([see PhotoSwipe Configuration](http://photoswipe.com/documentation/options.html))  |  Object  |    No

#### vm.$preview.close()


## License

![](https://img.shields.io/badge/license-MIT-blue.svg)
