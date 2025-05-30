<template>
  <div class="home">
    <img src="../assets/pretty.jpg" class="responsive-img" alt="Pretty logo" />
    <PrettyLips />
    <div class="redesContainer">
      <P>Visita nuestro instagram o escríbenos por whatsapp</P>
      <div class="redes">
        <a href="https://www.instagram.com/prettylips_bymonica" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <!-- Botón de WhatsApp -->
        <a href="https://wa.me/34613066201" target="_blank" rel="noopener" class="whatsapp-button">
          <img src="../assets/icons8-whatsapp-28.svg" alt="Whatsapp" width="40" height="40" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PrettyLips from '../components/PrettyLips.vue'

export default {
  name: 'HomePage',
  components: {
    PrettyLips
  },
}
</script>


<style scoped>
.redesContainer {
  margin-top: 50px;
}

.redes {
  display: flex;
  justify-content: center;
  /* Centra los íconos */
  align-items: center;
  /* Alinea verticalmente */
  gap: 20px;
  /* Espacio entre los íconos */
  margin-top: 10px;
}

.home {
  text-align: center;
}

.responsive-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

a i.fab {
  font-size: 55px;
  color: #E4405F;
  transition: transform 0.3s;
}

a i.fab:hover {
  transform: scale(1.2);
}


.whatsapp-button {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 2px 4px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.whatsapp-button:hover {
  background-color: #1ebe5b;
}
</style>