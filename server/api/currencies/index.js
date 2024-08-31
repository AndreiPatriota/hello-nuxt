export default defineEventHandler(async (event) => {
  let response = {};

  switch (event.method) {
    case 'GET':
      response = await getCurrenciesData();
      break;
    default:
      break;
  }

  return response;
});

const getCurrenciesData = async () => {
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_EfRomNd6ZJpzK9U8yQCgcSCS9FmYWN1z7RHOL4Ze'
  );

  return data;
};
