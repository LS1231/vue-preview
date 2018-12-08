import PreviewComponent from './preview.vue'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'

const VuePreview = {
  install(Vue, options) {
    Vue.component('VuePreview', {
      data() {
        return {
          nowPage: null,
          totalPage: null,
        }
      },
      mixins: [PreviewComponent],
      props: {
        layout: {
          type: String,
          default: 'flex'
        },
        slides: Array,
        options: {
          type: Object,
          default: function () {
            return {}
          }
        }
      },
      methods: {
        initPhotoSwipeFromDOM(gallerySelector) {
          this.totalPage = this.slides.length
          
          const self = this
          // parse slide data (url, title, size ...) from DOM elements
          // (children of gallerySelector)
          const parseThumbnailElements = function (el) {
            let thumbElements = el.childNodes
            let numNodes = thumbElements.length
            let items = []
            let figureEl
            let linkEl
            let size
            let item
            for (let i = 0; i < numNodes; i++) {
              figureEl = thumbElements[i] // <figure> element
              // include only element nodes
              if (figureEl.nodeType !== 1) {
                continue
              }
              linkEl = figureEl.children[0] // <a> element
              size = linkEl.getAttribute('data-size').split('x')
              // create slide object
              item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
              }
              if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML
              }
              if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src')
              }
              item.el = figureEl // save link to element for getThumbBoundsFn
              items.push(item)
            }
            return items
          }
          // find nearest parent element
          const closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn))
          }
          // triggers when user clicks on thumbnail
          const onThumbnailsClick = function (e) {
            e = e || window.event
            e.preventDefault ? e.preventDefault() : e.returnValue = false
            let eTarget = e.target || e.srcElement
            // find root element of slide
            let clickedListItem = closest(eTarget, function (el) {
              return (el.tagName && el.tagName.toUpperCase() === 'FIGURE')
            })
            if (!clickedListItem) {
              return
            }
            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            let clickedGallery = clickedListItem.parentNode
            let childNodes = clickedListItem.parentNode.childNodes
            let numChildNodes = childNodes.length
            let nodeIndex = 0
            let index
            for (let i = 0; i < numChildNodes; i++) {
              if (childNodes[i].nodeType !== 1) {
                continue
              }
              if (childNodes[i] === clickedListItem) {
                index = nodeIndex
                break
              }
              nodeIndex++
            }
            if (index >= 0) {
              // open PhotoSwipe if valid index found
              openPhotoSwipe(index, clickedGallery)
            }
            return false
          }
          // parse picture index and gallery index from URL (#&pid=1&gid=2)
          const photoSwipeParseHash = function () {
            let hash = window.location.hash.substring(1)
            let params = {}
            if (hash.length < 5) {
              return params
            }
            let vars = hash.split('&')
            for (let i = 0; i < vars.length; i++) {
              if (!vars[i]) {
                continue
              }
              let pair = vars[i].split('=')
              if (pair.length < 2) {
                continue
              }
              params[pair[0]] = pair[1]
            }
            if (params.gid) {
              params.gid = parseInt(params.gid, 10)
            }
            return params
          }

          const openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            self.nowPage = index
            // 打开图片时事件
            self.$emit('open', self.nowPage)
            // let wrap = document.querySelectorAll('.lg-preview-wrapper')[0]
            // wrap.style.display = 'block'


            let pswpElement = document.querySelectorAll('.pswp')[0]
            let gallery
            let photoSwipeOptions
            let items
            items = parseThumbnailElements(galleryElement)
            // define photoSwipeOptions (if needed)

            let globalOptions = options
            if (self.options !== {}) {
              for (let i in self.options) {
                globalOptions[i] = self.options[i]
              }
            }

            photoSwipeOptions = {
              // define gallery index (for URL)
              galleryUID: galleryElement.getAttribute('data-pswp-uid'),
              getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                let thumbnail = items[index].el.getElementsByTagName('img')[0] // find thumbnail
                let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                let rect = thumbnail.getBoundingClientRect()
                return {
                  x: rect.left,
                  y: rect.top + pageYScroll,
                  w: rect.width
                }
              },
              ...globalOptions
            }
            // PhotoSwipe opened from URL
            if (fromURL) {
              if (photoSwipeOptions.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (let j = 0; j < items.length; j++) {
                  if (items[j].pid === index) {
                    photoSwipeOptions.index = j
                    break
                  }
                }
              } else {
                // in URL indexes start from 1
                photoSwipeOptions.index = parseInt(index, 10) - 1
              }
            } else {
              photoSwipeOptions.index = parseInt(index, 10)
            }
            // exit if index not found
            if (isNaN(photoSwipeOptions.index)) {
              return
            }
            if (disableAnimation) {
              photoSwipeOptions.showAnimationDuration = 0
            }
            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, items, photoSwipeOptions)
            gallery.init()

            let item = document.querySelectorAll('.pswp__item')

            let item1 = item[0]
            let item2 = item[1]
            let item3 = item[2]
            // 准备关闭图片时事件
            gallery.listen('initialZoomOut', function () {
              item1.style.transition = '333ms'
              item2.style.transition = '333ms'
              item3.style.transition = '333ms'
              item1.classList.add("opacity--none")
              item2.classList.add("opacity--none")
              item3.classList.add("opacity--none")
              setTimeout(()=>{
                item1.classList.remove('opacity--none')
                item2.classList.remove('opacity--none')
                item3.classList.remove('opacity--none')
              },333)
            })

            gallery.listen('initialZoomOutEnd', function () {
              item1.classList.remove('opacity--none')
              item2.classList.remove('opacity--none')
              item3.classList.remove('opacity--none')
              // item2.style.opacity = 1
            })

            // 改变图片时事件
            gallery.listen('beforeChange', function (i) {
              item1.style.transition = 'none'
              item2.style.transition = 'none'
              item3.style.transition = 'none'
              
              self.nowPage += i
              if (self.nowPage === self.totalPage) {
                self.nowPage = 0
              } else if (self.nowPage < 0) {
                self.nowPage = self.totalPage - 1
              }
              self.$emit('change', self.nowPage)
            })

            // Gallery starts closing
            gallery.listen('close', function () {
              self.$emit('close', self.nowPage)
            })
          }
          // loop through all gallery elements and bind events
          const galleryElements = document.querySelectorAll(gallerySelector)
          for (let i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1)
            galleryElements[i].onclick = onThumbnailsClick
          }
          // Parse URL and open gallery if it contains #&pid=3&gid=1
          const hashData = photoSwipeParseHash()
          if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true)
          }
        }
      },
      mounted() {
        this.initPhotoSwipeFromDOM('.my-gallery')
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePreview)
}

export default VuePreview
