export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);

  let reponse = {};
  switch (event.method) {
    case 'GET':
      reponse = getMessage(event);
      break;
    case 'POST':
      reponse = await postMessage(event);
      break;
    default:
      break;
  }

  return reponse;
});

const getMessage = (event) => {
  const { name } = getQuery(event);

  return {
    message: `Olaarrrrrrr, ${name}`,
  };
};

const postMessage = async (event) => {
  const { age } = await readBody(event);

  return {
    message: `Você tem ${age} anos!`,
  };
};
