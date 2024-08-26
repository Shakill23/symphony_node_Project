<template>
  <div class="home-container">
    <!-- Carousel Section -->
    <div id="carouselExampleIndicators" class="carousel slide mt-3" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://chany4.github.io/symphony-images/images/pexels-cottonbro-9643920.jpg" class="d-block w-100" alt="First slide">
        </div>
        <div class="carousel-item">
          <img src="https://chany4.github.io/symphony-images/images/pexels-yankrukov-8520476.jpg" class="d-block w-100" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img src="https://chany4.github.io/symphony-images/images/pexels-cottonbro-5657664.jpg" class="d-block w-100" alt="Third slide">
        </div>
      </div>
    </div>

    <!-- Title Section -->
    <h2 class="brownDiv py-4 text-center">Symphony</h2>



    <!-- Best Sellers Section -->
    <div class="container mt-5">
      <div class="d-flex justify-content-center">
        <h1 class="mb-4">Best Sellers</h1>
      </div>
      <div class="row mx-1 mx-md-5">
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/symphony-images/images/guitar4.png" class="card-img-top" alt="...">
            <div class="card-footer">
              <button id="button-best-sellers"><router-link class="nav-link" exact-active-class="active-link" to="/products">View</router-link></button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/symphony-images/images/guitar3.png" class="card-img-top" alt="...">
            <div class="card-footer">
              <button id="button-best-sellers"><router-link class="nav-link" exact-active-class="active-link" to="/products">View</router-link></button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/symphony-images/images/drumsbrown1.png" class="card-img-top" alt="...">
            <div class="card-footer">
              <button id="button-best-sellers"><router-link class="nav-link" exact-active-class="active-link" to="/products">View</router-link></button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/symphony-images/images/drumsred1.png" class="card-img-top" alt="...">
            <div class="card-footer py-2">
              <button id="button-best-sellers"><router-link class="nav-link" exact-active-class="active-link" to="/products">View</router-link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  computed: {
    recentProducts() {
      return this.$store.state.recentProducts;
    }
  },
  mounted() {
    this.$store.dispatch('recentProducts');
  }
};
</script>

<style scoped>
.brownDiv {
  background-color: #E4A84C;
  border: 2px solid black;
  padding: 10px;
  text-align: center;
  position: relative;
  animation: slowGlow 3s infinite;
}

@keyframes slowGlow {
  0% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
}

.home-container {
  padding: 20px;
}

.carousel-inner img {
  height: 400px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .carousel-inner img {
    height: 500px;
  }
}

.row {
  margin-top: 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

#home {
  background-image: linear-gradient(rgb(255, 207, 215), rgb(255, 226, 231), white);
}

.card {
  background-color: #E4A84C;
}

h2, h1 {
  font-family: "Cinzel Decorative", serif;
  font-weight: 700;
}

.slider-wrapper .image-list {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  margin-top: 32px;
}

.slider-wrapper .image-list .image-item {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

#button-best-sellers {
  width: 100%;
  background-color: rgb(2, 38, 5);
  color: white;
  border-radius: 10px;
  border: none;
}

#button-best-sellers:active {
  background-color: white;
  color: rgb(30, 212, 42);
}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
}

img {
  border-radius: 30px;
  height: 250px;
  width: 180px;
}

@media (max-width: 768px) {
  .slider-wrapper .image-list .image-item {
    width: 100px;
    height: 150px;
  }

  .carousel-inner img {
    height: 300px;
  }
}
</style>
