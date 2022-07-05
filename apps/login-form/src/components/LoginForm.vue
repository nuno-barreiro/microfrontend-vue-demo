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
        <span class="error-message">{{ errorMsg }}</span>
    </div>
    <div v-if="isLoggedIn" class="">
        <span>Welcome! </span>
        <button type="submit" @click="doLogout">Logout</button>
    </div>
</div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { UserInfo } from "@microfedemo/user-service";

import { ref } from "vue";
import { login, emptyUser } from "@microfedemo/user-service";

const isLoggedIn = ref(false);
const username = ref("");
const password = ref("");
const errorMsg = ref("");
const user: Ref<UserInfo> = ref(emptyUser());

function doLogin(): void {
    const result = login(username.value, password.value);
    if (result != null) {
        user.value = result;
        isLoggedIn.value = true;
    }

    password.value = "";
    return;
}

function doLogout(): void {
    isLoggedIn.value = false;
    user.value = emptyUser();
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

.error-message { 
    color: #FF0000;
    display: block;
    margin: 2px;
}

</style>