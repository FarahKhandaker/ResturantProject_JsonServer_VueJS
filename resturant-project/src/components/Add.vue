<template>
  <div>
    <Header />
    <h1>Welcome to the Add Resturant page</h1>
    <form class="add">
      <input type="text" name="Resturant name" placeholder="Enter Resturant name" v-model="resturant.name">
      <input type="text" name="Contact" placeholder="Enter Contact number" v-model="resturant.contact">
      <input type="text" name="Address" placeholder="Enter Resturant Adress" v-model="resturant.address">
      <button type="button" @click="addResturant">Add New Resturant</button>
    </form>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
  name: 'Add',
  components: {
    Header
  },  
  data() {
    return {
      resturant: {
        name: '',
        contact: '',
        address: '',
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  },
  methods: {
    async addResturant() {
      console.warn(this.resturant)
      let result = await axios.post("http://localhost:3000/resturants", {
        name:this.resturant.name,
        contact:this.resturant.contact,
        address:this.resturant.address,
      });
      if(result.status == 201) {
      this.$router.push({ name: 'HomePage' })
      }
      console.warn(result)
    }
  }
}
</script>

<style>

</style>