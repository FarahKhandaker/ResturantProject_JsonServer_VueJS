<template>
    <div>
        <img class="logo" src="../assets/signup-logo.png">
        <h2>Sign Up</h2>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="text" v-model="password" placeholder="Enter Password">
            <button @click="singUp">Sign Up</button>
            <p>
                <router-link to="/login">
                    Login
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async singUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result)
            if (result.status === 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
};
</script>

<style>

</style>