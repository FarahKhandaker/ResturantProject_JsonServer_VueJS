<template>
  <div>
    <Header />
    <h1>Welcome {{ name }} to the home page</h1>
    <table border="1">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
      </tr>
      <tr v-for="item in resturant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="('/update/' + item.id)">Update</router-link>
          <button @click="deleteResturant(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
import { CLOSING } from 'ws';
export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      resturant: [],
    }
  },
  components: {
    Header
  },
  methods: {
    async deleteResturant(id) {
      let result = await axios.delete('http://localhost:3000/resturants/' + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }
      let result = await axios.get('http://localhost:3000/resturants')
      console.warn(result)
      this.resturant = result.data;
    }
  },
  async mounted() {
    this.loadData();
  }
}
</script>

<style>
td {
  width: 20%;
  height: 50px;
}
</style>