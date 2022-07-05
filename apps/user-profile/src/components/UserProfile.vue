<template>
    <div v-if="isLoggedIn" class="form-wrapper">
        <div class="form-input-group">
            <span>Username</span>
            <input type="text" v-model="username" />
        </div>
        <div class="form-input-group">
            <span>First Name</span>
            <input type="text" v-model="firstName" />
        </div>
        <div class="form-input-group">
            <span>Last Name</span>
            <input type="text" v-model="lastName" />
        </div>
        <button type="submit" @click="saveProfile">Save</button>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoggedIn = ref(false);
const username = ref("");
const firstName = ref("");
const lastName = ref("");

function saveProfile(): void {
    return;
}

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

</style>