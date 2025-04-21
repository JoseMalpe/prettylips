<template>
  <div class="productos">
    <h1>Servicios</h1>
    <div class="lista-productos">
        <div class="columna">
          <h3>Hyaluron Pen</h3>
          <p>Tratamiento de hidratación y relleno de labios con ácido hialurónico.</p>
          <p class="precios"></p>
        </div>
      <div class="columna">
        <h3>Hidratación labial Dermapen</h3>
        <p>Tratamiento de hidratación y rejuvenecimiento dónde se utiliza ácido hialuronico no reticulado con Dermapen.
          Permite mantener los labios hidratados y estimular la producción de colágeno con un resultado de hidratación
          muy natural.
        </p>
        <p class="precios"></p>
      </div>
      <div class="columna">
        <h3>Pigmentación</h3>
        <p>Tratamiento de micropigmentación labial semipermanente con Dermapen. </p>
        <p class="precios"></p>
      </div>
    </div>
  </div>

  <a href="https://wa.me/34613066201" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
    <img src="../assets/icons8-whatsapp-28.svg" alt="Whatsapp" width="28" height="28" />
  </a>
</template>

<script>
export default {
  name: 'ProductosPage'
}
</script>

<style scoped>
.precios {
  display: flex;
  justify-content: center;
}

.lista-productos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.columna {
  flex: 1 1 300px;
  /* se adapta al tamaño disponible */
  max-width: 45%;
  padding: 20px;
  background-color: rgb(255, 210, 210);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
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
