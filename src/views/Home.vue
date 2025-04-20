<template>
    <div class="home">
      <img src="../assets/pretty.jpg" class="responsive-img" alt="Pretty logo" />
      <PrettyLips msg="Welcome to PrettyLips by Mónica" />
  
      <!-- Botón de WhatsApp -->
      <a 
        href="https://wa.me/34613066201" 
        target="_blank" 
        rel="noopener" 
        class="whatsapp-button"
      >
        Escríbeme por WhatsApp
      </a>
    </div>
  </template>
  
  <script>
  import PrettyLips from '../components/PrettyLips.vue'
  
  export default {
    name: 'HomePage',
    components: {
      PrettyLips
    }
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  
  .responsive-img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  .whatsapp-button {
    display: inline-block;
    background-color: #25D366;
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .whatsapp-button:hover {
    background-color: #1ebe5b;
  }
  </style>
  