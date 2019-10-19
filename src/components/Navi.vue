<template>
  <div class="navi">
    <nav>
        <router-link to="/">Clock</router-link>
        <router-link to="/search">Search</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navi"
};
</script>

<style scoped>
nav {
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(60, 56, 95);
    color: #fff;
    height: 48px;
}

a {
    color: white;
    width: 128px;
    font-size: 18pt;
    text-decoration: none;
}

a:hover {
    opacity: 0.7;
}
</style>
