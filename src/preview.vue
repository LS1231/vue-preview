<template>
  <div>
    <div class="my-gallery" :style="{display: layout}" itemscope itemtype="http://schema.org/ImageGallery">
      <template v-for="item in slides">
        <figure
          itemprop="associatedMedia"
          itemscope
          itemtype="http://schema.org/ImageObject">
          <a :href="item.src" itemprop="contentUrl" :data-size="'' + item.w + 'x' + item.h">
            <img :src="item.msrc" :alt="item.alt" itemprop="thumbnail"/>
          </a>
          <figcaption style="display: none" itemprop="caption description">{{item.title}}</figcaption>
        </figure>
      </template>
    </div>
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">

          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
          </button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
          </button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" >
@import "~photoswipe/dist/photoswipe.css";
@import "~photoswipe/dist/default-skin/default-skin.css";

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
}


.pswp{
  
}
// .pswp__top-bar,
// .pswp__bg,
// .pswp__scroll-wrap,
// .pswp__container,
// .pswp__item,
// .pswp__zoom-wrap{
//   position:fixed !important;
//   height: 100vh !important;
// }

// .pswp__caption{
//   position:fixed !important;
//   z-index: 9999999999;
// }

</style>
