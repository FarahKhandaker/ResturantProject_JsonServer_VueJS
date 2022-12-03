<template>
  <div>
    <Header />
    <h1>Welcome to the Update Resturant page</h1>
    <form class="update">
      <input type="text" name="Resturant name" placeholder="Enter Resturant name" v-model="resturant.name">
      <input type="text" name="Contact" placeholder="Enter Contact number" v-model="resturant.contact">
      <input type="text" name="Address" placeholder="Enter Resturant address" v-model="resturant.address">
      <button type="button" @click="updateResturant">Update Resturant</button>
    </form>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
  name: 'Update',
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
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    const result = await axios.get('http://localhost:3000/resturants/' + this.$route.params.id)
    // console.warn(this.$route.params.id)
    console.warn(result.data);
    this.resturant = result.data;
  },
  methods: {
    async updateResturant() {
      const result = await axios.put("http://localhost:3000/resturants/" + this.$route.params.id, {
        name: this.resturant.name,
        contact: this.resturant.contact,
        address: this.resturant.address,
      });
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    }
  }
}
</script>

<style>

</style>