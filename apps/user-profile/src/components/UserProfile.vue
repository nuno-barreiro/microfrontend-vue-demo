<template>
    <div v-if="isLoggedIn" class="form-wrapper">
        <div class="form-input-group">
            <span>Username</span>
            <input type="text" v-model="user.username" />
        </div>
        <div class="form-input-group">
            <span>First Name</span>
            <input type="text" v-model="user.firstName" />
        </div>
        <div class="form-input-group">
            <span>Last Name</span>
            <input type="text" v-model="user.lastName" />
        </div>
        <button type="submit" @click="save">Save</button>
        <span class="error-message">{{ errorMsg }}</span>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { saveProfile, emptyUser, type UserInfo } from "@microfedemo/user-service";

const isLoggedIn = ref(false);
const user = ref(emptyUser());
const errorMsg = ref("");

function save(): void {
    saveProfile(user.value);

    const updateEvent = new CustomEvent('profile-updated', { detail: user.value });
    window.dispatchEvent(updateEvent);
    console.log('[UserProfile] Event dispatched => ', updateEvent);
}

window.addEventListener('user-login', (evt: Event) => {
    console.log('[UserProfile] Event received => ', evt);
    user.value = { ...(<CustomEvent<UserInfo>>evt).detail };
    isLoggedIn.value = true;
});

window.addEventListener('user-logout', (evt: Event) => {
    console.log('[UserProfile] Event received => ', evt);
    isLoggedIn.value = false;
    user.value = emptyUser();
});

</script>

<style>

.form-wrapper {
    padding: 20px;
    background-color: #999;
    text-align: left;
    width: 500px;
    margin: 10px auto;
}

.form-wrapper .form-input-group {
    display: block;
    margin: 10px;
}

.form-wrapper .form-input-group span {
    font-weight: bold;
    display: block;
    padding-bottom: 5px;
}

.error-message { 
    color: #FF0000;
    display: block;
    margin: 2px;
}

</style>