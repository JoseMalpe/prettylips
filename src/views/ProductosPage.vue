<template>
  <div class="productos">
    <h1>Servicios</h1>
    <div class="lista-productos">
        <div class="columna">
          <h3>Hyaluron Pen</h3>
          <p>Tratamiento de hidratación y aumento de labios con ácido hialurónico.</p>
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
   <div class="carousel">
      <div class="carousel-item fade" v-for="(image, index) in images" :key="index" v-show="index === currentIndex">
        <img :src="image" :alt="`Imagen ${index + 1}`" />
      </div>

      <div class="carousel-buttons">
        <button @click="prevSlide">‹</button>
        <button @click="nextSlide">›</button>
      </div>

      <div class="carousel-indicators">
        <span v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductosPage',
    data() {
    return {
      currentIndex: 0,
      images: [
        require('../assets/works/work1.jpg'),
        require('../assets/works/work2.jpg'),
        require('../assets/works/work3.jpg'),
        require('../assets/works/work4.jpg'),
        require('../assets/works/work5.jpg'),
        require('../assets/works/work6.jpg'),
        require('../assets/works/work7.jpg'),
        require('../assets/works/work8.jpg'),
        require('../assets/works/work9.jpg'),
        require('../assets/works/work10.jpg'),
      ],
      intervalId: null
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startCarousel() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    }
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  }
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

.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.carousel-item {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-item.fade {
  position: relative;
  opacity: 1;
  z-index: 1;
}

.carousel-item img {
  width: 100%;
  height: 400px; /* o el alto que prefieras */
  object-fit: cover;
  display: block;
}


.carousel-buttons {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 10px;
  z-index: 2;
}

.carousel-buttons button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.carousel-buttons button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.carousel-indicators span {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-indicators span.active {
  background-color: white;
}

</style>
