<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Admin</h2>
      </div>
  
      <!-- User Management Section -->
      <div class="row mt-4">
        <h3>Users Management</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <button @click="deleteUser(user.userID)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Product Management Section -->
      <div class="row mt-4">
        <h3>Products Management</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.productID">
              <td>{{ product.productID }}</td>
              <td>{{ product.productName }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.category_color }}</td>
              <td>{{ product.description }}</td>
              <td>
                <button @click="deleteProduct(product.productID)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  
  onMounted(() => {
    store.dispatch('fetchUsers')
    store.dispatch('fetchProducts')
  })
  
  const deleteUser = (userID) => {
    store.dispatch('deleteUser', userID)
  }
  
  const deleteProduct = (productID) => {
    store.dispatch('deleteProduct', productID)
  }
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  </style>
  