<template>
  <div>
    <Head>
      <Title>Aqui oh: {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products',
  });

  const { id } = useRoute().params;
  const uri = `https://fakestoreapi.com/products/${id}`;

  const { data: product } = await useFetch(uri, { key: id });

  if (!product.value) {
    throw createError({
      statusCode: 404,
      message: 'Product Not Found =/',
      fatal: true,
    });
  }
</script>

<style scoped></style>
