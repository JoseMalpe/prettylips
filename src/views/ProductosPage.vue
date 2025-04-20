<template>
  <div class="productos">
    <h1>Servicios</h1>
    <div class="lista-productos">
      <div class="columna">
        <h3>Hyaluron Pen</h3>
        <p>Tratamiento de hidratación y relleno de labios con ácido hialurónico.</p>
      </div>
      <div class="columna">
        <h3>Hidratación labial Dermapen</h3>
        <p>Tratamiento de hidratación y rejuvenecimiento dónde se utiliza ácido hialuronico no reticulado con Dermapen.
          Permite mantener los labios hidratados y estimular la producción de colágeno con un resultado de hidratación muy natural.
        </p>
      </div>
      <div class="columna">
        <h3>Pigmentación</h3>
        <p>...</p>
      </div>
    </div>
  </div>

  <a href="https://wa.me/34613066201" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
      <path
        d="M20.52 3.48A11.77 11.77 0 0 0 12 0a11.77 11.77 0 0 0-8.52 3.48 11.77 11.77 0 0 0 0 16.69l-1.65 4.8 4.89-1.6a11.73 11.73 0 0 0 5.28 1.3h.01a11.77 11.77 0 0 0 8.51-3.49 11.77 11.77 0 0 0 0-16.7z" />
      <path
        d="M17.47 14.37c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.65.14-.19.28-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.28.3-.47.1-.19.05-.36-.02-.51-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49-.17-.01-.37-.01-.57-.01s-.52.08-.79.36c-.27.28-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.19 2.13 3.26 5.17 4.57.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.08 1.72-.7 1.97-1.37.24-.68.24-1.26.17-1.37-.07-.11-.26-.17-.54-.31z" />
    </svg>
  </a>
</template>

<script>
export default {
  name: 'ProductosPage'
}
</script>

<style scoped>

.lista-productos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.columna {
  flex: 1 1 300px; /* se adapta al tamaño disponible */
  max-width: 45%;
  padding: 20px;
  background-color: rgb(255, 210, 210);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .columna {
    max-width: 100%;
  }
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.productos {
  text-align: center;
  padding: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
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
