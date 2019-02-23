var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'https://photos-5.dropbox.com/t/2/AACrb6ZVSLxLXOa3HSzoXOqkrgTf8N4YzNy-kPc9A9VtVQ/12/703122049/jpeg/32x32/3/1528210800/0/2/vmSocks-green-onWhite.jpg/EJDIgOMGGPgIIAcoBw/8upE_sHYFbWfmd6CjMSrsyskgSg84nU-tJM2U0wZK8g?dl=0&size=1280x960&size_mode=3',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "https://photos-5.dropbox.com/t/2/AACrb6ZVSLxLXOa3HSzoXOqkrgTf8N4YzNy-kPc9A9VtVQ/12/703122049/jpeg/32x32/3/1528210800/0/2/vmSocks-green-onWhite.jpg/EJDIgOMGGPgIIAcoBw/8upE_sHYFbWfmd6CjMSrsyskgSg84nU-tJM2U0wZK8g?dl=0&size=1280x960&size_mode=3"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "https://photos-6.dropbox.com/t/2/AACGaBY-331jzPwReri6Z1ZR0l9rH-Rtc8CaJy8bMTIK5Q/12/703122049/jpeg/32x32/3/1528214400/0/2/vmSocks-blue-onWhite.jpg/EJDIgOMGGPgIIAcoBw/YrzmGJ2u57Yp2R5Uw2zeVIb4LU80dUwcVgAwPbQOYMQ?dl=0&size=1280x960&size_mode=3"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})
