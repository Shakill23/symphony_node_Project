<template>
  <div class="container my-5">
    <div class="row">
      <h2 class="display-2 text-center mb-4">Products</h2>

      <!-- Category Filter -->
      <div class="col-12 text-center mb-4">
        <h4 class="mb-3">Filter by Category</h4>
        <select class="btn btn-secondary" v-model="selectedCategory">
          <option value="">All Categories</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Pink">Pink</option>
          <option value="Silver">Silver</option>
          <option value="Purple">Purple</option>
          <option value="Brown">Brown</option>
        </select>
      </div>

      <!-- Search Bar -->
      <div class="col-12 col-md-8 mx-auto mb-4">
        <input type="text" v-model="search" class="form-control" placeholder="Search for products..." />
      </div>

      <!-- Sort Options -->
      <div class="col-12 text-center mb-4">
        <h4 class="mb-3">Sort Products</h4>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary" @click="sortByPriceAsc">Price Ascending</button>
          <button type="button" class="btn btn-primary" @click="sortByPriceDesc">Price Descending</button>
          <button type="button" class="btn btn-primary" @click="sortByNameAsc">Name Ascending</button>
          <button type="button" class="btn btn-primary" @click="sortByNameDesc">Name Descending</button>
        </div>
      </div>
    </div>

    <!-- Product Cards -->
    <div class="row gap-2 justify-content-center my-2" v-if="filterProducts.length">
      <Card v-for="product in filterProducts" :key="product.productID">
        <template #cardHeader>
          <img :src="product.productURL" loading="lazy" class="img-fluid" :alt="product.productName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.productName }}</h5>
          <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
          <div class="button-wrapper d-md-flex d-block justify-content-between">
            <router-link :to="{ name: 'product', params: { id: product.productID } }">
              <button class="btn btn-success">View</button>
            </router-link>
          </div>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>



<script>
import Spinner from '@/components/Spinner.vue';
import Card from '@/components/Card.vue';

export default {
  data() {
    return {
      selectedCategory: '',
      search: '',
      sortKey: null, // Track the current sort key
      sortAsc: true // Track sort order
    };
  },
  components: {
    Card,
    Spinner
  },
  computed: {
    filterProducts() {
      let products = this.$store.state.products || [];

      // Filter by category
      if (this.selectedCategory) {
        products = products.filter(product => product.category_color === this.selectedCategory);
      }

      // Filter by search term
      if (this.search) {
        products = products.filter(product =>
          product.productName.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      // Apply sorting
      if (this.sortKey) {
        console.log(`Sorting by: ${this.sortKey} in ${this.sortAsc ? 'ascending' : 'descending'} order`);
        products = products.slice().sort((a, b) => {
          let result = 0;

          if (this.sortKey === 'productName') {
            result = a.productName.localeCompare(b.productName);
          } else if (this.sortKey === 'amount') {
            result = a.amount - b.amount;
          }

          return this.sortAsc ? result : -result;
        });
      }

      return products;
    }
  },
  methods: {
    sortByPriceAsc() {
      this.sortKey = 'amount';
      this.sortAsc = true;
      console.log('Sort by Price Ascending');
    },
    sortByPriceDesc() {
      this.sortKey = 'amount';
      this.sortAsc = false;
      console.log('Sort by Price Descending');
    },
    sortByNameAsc() {
      this.sortKey = 'productName';
      this.sortAsc = true;
      console.log('Sort by Name Ascending');
    },
    sortByNameDesc() {
      this.sortKey = 'productName';
      this.sortAsc = false;
      console.log('Sort by Name Descending');
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts').then(() => {
      this.products = this.$store.state.products || [];
    }).catch((error) => {
      console.error("Error fetching products:", error);
    });
  }
};
</script>


<style scoped></style>
