<template>
  <div class="promociones">
    <h1>PROMOCIONES</h1>
    <h2>Actualmente no disponemos de promociones</h2>
  </div>
  <a href="https://wa.me/34613066201" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
    <img src="../assets/icons8-whatsapp-28.svg" alt="Whatsapp" width="28" height="28" />
  </a>

</template>

<script>
export default {
  name: 'PromocionesPage'
}
</script>

<style scoped>
.productos {
  text-align: center;
  padding: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

.responsive-promo {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
</style>