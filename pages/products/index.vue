<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p"> </ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products',
  });

  const { data: products } = await useFetch(
    'https://fakestoreapi.com/products'
  );

  useHead({
    title: 'Bundinha LINDA',
    meta: [
      {
        name: 'description',
        content: 'BLODELLLLL carai!',
      },
    ],
  });
</script>

<style scoped></style>
