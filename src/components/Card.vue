<template>
  <div class="card card-hover">
      <div class="card-header">
          <slot name="cardHeader"></slot>
      </div>
      <div class="card-body">
          <slot name="cardBody"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "CardComp"
}
</script>

<style scoped>
.card {
  width: 18rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover up and box shadow effect */
.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
