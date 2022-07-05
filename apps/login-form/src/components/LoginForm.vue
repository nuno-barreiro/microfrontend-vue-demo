<template>
<div class="form-wrapper">
    <div v-if="!isLoggedIn" >
        <div class="form-input-group">
            <label for="inpUsername">Username</label>
            <input id="inpUsername" type="text" v-model="username" />
        </div>
        <div class="form-input-group">
            <label for="inpUsername">Password</label>
            <input id="inpPassword" type="password" v-model="password" />
        </div>
        <button type="submit" @click="doLogin">Login</button>
    </div>
    <div v-if="isLoggedIn" class="">
        <span>Welcome! </span>
        <button type="submit" @click="doLogout">Logout</button>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoggedIn = ref(false);
const username = ref("");
const password = ref("");

function doLogin(): void {
    isLoggedIn.value = true;
    password.value = "";
    return;
}

function doLogout(): void {
    isLoggedIn.value = false;
    return;
}
</script>

<style>

.form-wrapper {
    padding: 20px;
    background-color: #CCC;
    text-align: right;
}

.form-wrapper .form-input-group {
    display: block;
    margin: 5px;
}

.form-wrapper .form-input-group label {
    font-weight: bold;
    display: inline-block;
    padding-right: 5px;
    padding-bottom: 5px;
}

</style>