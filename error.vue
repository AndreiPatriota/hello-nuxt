<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">
      {{ props.error.statusCode }}
    </p>
    <p class="mt-7 text-6xl">Ooops</p>
    <p class="mt-7">{{ props.error.message }}</p>
    <button class="btn my-7" @click="handleClickError">Go Home...</button>
  </div>
</template>

<script setup>
  const props = defineProps(['error']);

  const handleClickError = () => {
    clearError({ redirect: '/' });
  };
</script>

<style scoped></style>
