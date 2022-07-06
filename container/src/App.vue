
<template>
  <header>
    <login-form />
  </header>
  <main>
    <user-profile />
  </main>
  <footer>
    <span class="copyright"
      >Microfrontend powered by
      <a
        href="https://github.com/originjs/vite-plugin-federation"
        target="_blank"
        >vite-plugin-federation</a
      ></span
    >
  </footer>
</template>

<style>
.copyright {
  font-size: 0.75em;
  padding: 2em;
  text-align: center;
  color: #ddd;
}
</style>
