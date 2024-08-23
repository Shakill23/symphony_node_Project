<template>
  <button
    type="button"
    class="btn btn-outline-success"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
  <i class="bi bi-plus"></i>
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product ID"
                v-model="payload.productID"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Name"
                v-model="payload.productName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Quantity"
                v-model="payload.quantity"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Amount"
                v-model="payload.amount"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product category_color"
                v-model="payload.category_color"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product URL"
                v-model="payload.productURL"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Desc"
                v-model="payload.description"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                @click.prevent="addingProduct"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addProduct",
  data() {
    return {
      payload: {
        productID: "",
        productName: "",
        quantity: "",
        amount: "",
        category_color: "",
        productURL: "",
        description: "",
      },
    };
  },
  methods: {
    addingProduct() {
      try {
        this.$store.dispatch("addProduct", this.payload);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
