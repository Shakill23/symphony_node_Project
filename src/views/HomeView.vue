<template>
  <div class="home-container">
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

    <h2 class="brownDiv py-4">Symphony</h2>
    <div class="row align-items-center mt-4">
      <div class="col-md-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa laudantium repellat numquam, nam assumenda temporibus consequuntur mollitia nisi architecto. Dolores alias beatae dolorem, cumque rem autem. Fugiat, corrupti aliquam!</p>
      </div>
      <div class="col-md-6">
        <img src="https://chany4.github.io/symphony-images/images/pexels-clam-lo-1782448-3355365.jpg" class="img-fluid" alt="Music Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.brownDiv {
  background-color: #E4A84C;
  border: 2px solid black;
  padding: 10px;
  text-align: center;
}

.home-container {
  padding: 20px;
}

.carousel-inner img {
  height: 500px;
  object-fit: cover;
}

.row {
  margin-top: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
