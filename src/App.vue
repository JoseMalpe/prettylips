<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">PrettyLips by Mónica</router-link>
      </div>
      <button class="hamburger" @click="toggleMenu">☰</button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
        <li><router-link to="/productos" @click="closeMenu">Servicios</router-link></li>
        <li><router-link to="/promociones" @click="closeMenu">Promociones</router-link></li>
        <li><a href="https://wa.me/34613066201" target="_blank" @click="closeMenu">Contacto</a></li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
  background-color: rgb(255, 235, 236);
  box-sizing: border-box;
}
.logo a {
  text-decoration: none;
  color: #fff;
}

body {
  margin: 0;
  background-color: rgb(255, 235, 236);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffb6c1;
  padding: 10px 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a,
.nav-links li router-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.hamburger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #ffb6c1;
    flex-direction: column;
    padding: 10px;
    border-radius: 8px;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
</style>
