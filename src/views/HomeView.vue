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

    <!-- Advertisements Section -->
    <section>
      <div class="container-fluid mt-5 pt-2">
        <div class="row" id="homeWall">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://chany4.github.io/ecomWEB/images/other/Desktop%20-%201.png" class="d-block w-100" alt="advert-1" usemap="#shop_Now_Advert">
                <map name="shop_Now_Advert">
                  <area shape="rect" coords="529,1009,107,808" href="/html/products.html" alt="Shop Now Image">
                  <area shape="rect" coords="1260,912,758,474" href="/html/products.html" alt="green leather Bag">
                </map>
              </div>
              <div class="carousel-item">
                <img src="https://chany4.github.io/ecomWEB/images/other/Desktop%20-%202.png" class="d-block w-100" alt="advert-2">
              </div>
              <div class="carousel-item">
                <img src="https://chany4.github.io/ecomWEB/images/about/Desktop%20-%206.png" class="d-block w-100" alt="advert-3">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Sellers Section -->
    <div class="container mt-5">
      <div class="d-flex justify-content-center">
        <h1 class="mb-4">Best Sellers</h1>
      </div>
      <div class="row mx-1 mx-md-5">
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/ecomWEB/images/best%20sellers/best-1.png" class="card-img-top" alt="...">
            <div class="card-footer">
              <a href="/html/products.html"><button id="button-best-sellers">View</button></a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/ecomWEB/images/best%20sellers/best-2.png" class="card-img-top" alt="...">
            <div class="card-footer">
              <a href="/html/products.html"><button id="button-best-sellers">View</button></a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/ecomWEB/images/best%20sellers/best-3.png" class="card-img-top" alt="...">
            <div class="card-footer">
              <a href="/html/products.html"><button id="button-best-sellers">View</button></a>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <div class="card h-100">
            <img src="https://chany4.github.io/ecomWEB/images/best%20sellers/best-4.png" class="card-img-top" alt="...">
            <div class="card-footer py-2">
              <a href="/html/products.html"><button id="button-best-sellers">View</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Just In Section -->
    <div class="container">
      <div class="row pt-5 mt-5">
        <h2>Just in</h2>
      </div>
      <div class="row" id="container">
        <div class="slider-wrapper mx-2">
          <div class="image-list">
            <img src="https://chany4.github.io/symphony-images/images/drumsred1.png" alt="crochet item" class="image-item">
            <img src="https://chany4.github.io/symphony-images/images/drumsbrown1.png" alt="picture of heel" class="image-item">
            <img src="https://chany4.github.io/symphony-images/images/guitar3.png" alt="heels" class="image-item">
            <img src="https://chany4.github.io/symphony-images/images/guitar4.png" alt="leather bag" class="image-item">
          </div>
        </div>
      </div>
    </div>

    <!-- Aesthetic Break Section -->
    <div class="container mt-5">
      <div class="row pt-4">
        <img src="https://chany4.github.io/ecomWEB/images/other/Desktop%20-%203.png" class="img-fluid" alt="picture">
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
  background-color: pink;
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
  background-color: palevioletred;
  color: white;
  border-radius: 10px;
  border: none;
}

#button-best-sellers:active {
  background-color: white;
  color: palevioletred;
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
