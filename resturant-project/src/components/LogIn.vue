<template>
    <div>
        <img class="logo" src="../assets/signup-logo.png">
        <h2>Login</h2>
        <div class="login">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="text" v-model="password" placeholder="Enter Password">
            <button @click="login">Login</button>
            <p>
                <router-link to="/sign-up">
                    Sign Up
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LogIn",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {

            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if (result.status === 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: 'HomePage' })
            }
            console.warn(result);
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if(user) {
            this.$router.push({name: 'HomePage'});
        }
    }
}
</script>

<style>

</style>