app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model='name'>

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number='rating'>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <p>Would you recommend this product?</p>
    <select id='rec' v-model.text='rec'>
      <option value='true'>Yes</option>
      <option value='true'>Definitely</option>
      <option value='true'>Obviously</option>
      <option value='false'>Nope</option>
      <option value='false'>Absolutely Not</option>
    </select>

    <input class='button' type='submit' value='Submit'>
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      rec: ''
    }
  },
  methods: {
    onSubmit() {
      if(this.name === '' || this.review === '' || this.rating === null || this.rec === '') {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        rec: this.rec
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null,
      this.rec = ''
    }
  }
})