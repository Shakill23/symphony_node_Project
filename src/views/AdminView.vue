<template>
  <div>
    <!-- USERS TABLE -->
    <br>
    <h2 class="text-center">Users Table</h2><br>

    <div class="container table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Age</th>
            <th>Gender</th>
            <th>User Role</th>
            <th>Email Address</th>
            <th>User Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userProfile }}</td>
            <td class="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2">
              <addUser :user="user" />
              <updateUser :user="user" />
              <button class="btn btn-outline-danger deleteButton" @click="event => deleteUser(user.userID)">
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PRODUCTS TABLE -->
    <br>
    <h2 class="text-center">Products Table</h2><br>
    <div class="container table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category Color</th>
            <th>Product URL</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.productID">
            <td>{{ product.productID }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.quantity }}</td>
            <td>R {{ product.amount }}</td>
            <td>{{ product.category_color }}</td>
            <td><img :src="product.productURL" loading="lazy" class="img-fluid" :alt="product.productName"></td>
            <td>{{ product.description }}</td>
            <td class="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2">
              <addProduct :product="product" />
              <updateProduct :product="product" />
              <button class="btn btn-outline-danger deleteButton" @click="event => deleteProduct(product.productID)">
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import updateUser from '@/components/UpdateUserModal.vue';
import updateProduct from '@/components/UpdateProduct.vue';
import addProduct from '@/components/AddProduct.vue';
import addUser from '@/components/AddUser.vue';

export default {
  components: {
    updateUser,
    updateProduct,
    addProduct,
    addUser,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts'),
      this.$store.dispatch('fetchUsers')
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID);
    },
    deleteProduct(productID) {
      this.$store.dispatch('deleteProduct', productID);
    }
  }
}
</script>

<style scoped>
h2 {
  color: #4E96D3;
}

.table {
  margin-top: 20px;
}

th,
td {
  text-align: center;
  vertical-align: middle;
  padding: 12px;
}

.img-fluid {
  max-width: 50px;
  height: auto;
  border-radius: 5px;
}

.btn {
  font-size: 14px;
  padding: 5px 10px;
}

.deleteButton {
  margin-left: 10px;
}

@media(max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
  }

  .d-flex {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
    padding: 10px;
  }
}

@media(max-width: 576px) {
  .img-fluid {
    max-width: 40px;
  }
}
</style>
