const url =
  "https://newsapi.org/v2/top-headlines?country=ar&apiKey=452d00247570407f893864ae69119af9";

//   &category=technology
//async await

export const getNoticias = async (categoria = "technology") => {
  const respuesta = await fetch(`${url}&category=${categoria}`);
  const data = await respuesta.json();

  return data;
};
