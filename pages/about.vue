<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi
      illo praesentium cumque alias, non quia, sed facere amet quas excepturi,
      esse optio quaerat rem adipisci nulla quasi sunt accusantium. Lorem, ipsum
      dolor sit amet consectetur adipisicing elit. Hic a deserunt repellat odio
      accusamus! Molestiae in repellendus debitis veritatis omnis velit placeat
      blanditiis voluptatem accusamus similique rerum praesentium, sapiente
      explicabo.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at
      dolorum doloremque totam iure perferendis minus, laudantium consectetur,
      quis a ducimus repellat aut quidem voluptatum magni quod dignissimos,
      blanditiis doloribus.
    </p>
    <div>{{ data.message }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?name=Santana', {
    method: 'POST',
    body: { age: 32 },
  });
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
