const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeCart(id) {
            if(this.cart.indexOf(id) > -1){
                this.cart.splice(this.cart.indexOf(id), 1)
            }
        }
    }
})
