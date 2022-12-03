<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Resturant</router-link>
        <router-link to="/update">Update Resturant</router-link>
        <a @click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:"LogIn"})
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: whitesmoke;
    padding: 14px 8%;
    text-align: center;
    font-size: 18px;
    text-decoration: none;
    margin-right: 6px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>