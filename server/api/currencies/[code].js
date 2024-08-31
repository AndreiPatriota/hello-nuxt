export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey: apiKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${apiKey}`;

  const { data } = await $fetch(uri);

  return data;
});
