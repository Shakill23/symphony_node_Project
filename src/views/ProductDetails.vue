<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row justify-content-center" v-if="product">
            <Card>
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.productName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.productName }}</h5>
                    <p class="lead">
                        {{ product.description }}
                    </p>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-else> 
            <Spinner/>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(
    () => store.state.product
)
onMounted(() => {
    store.dispatch('fetchProduct', route.params.id)
}) 
</script>

<style scoped></style>
