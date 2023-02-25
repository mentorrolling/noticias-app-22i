import { useEffect, useState } from "react";
import { getNoticias } from "./helpers/newsApi";

import "./css/styles.css";
import SelectCategory from "./components/SelectCategory";
function App() {
  const [news, setNews] = useState([]);
  const [categoria, setCategoria] = useState("business");
  const categorias = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    // getNoticias().then((resultado) => {
    //   console.log(resultado);
    // });
    traerNoticias(categoria);
  }, [categoria]);

  const traerNoticias = async (parametro) => {
    const noticias = await getNoticias(parametro);
    const { articles } = noticias;
    console.log(articles);
    setNews(articles);
  };

  const actualizarCategoria = (valor) => {
    setCategoria(valor);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Noticias</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <SelectCategory
            categoria={categoria}
            actualizarCategoria={actualizarCategoria}
          />
          {/* <form>
            <div className="d-flex justify-content-center align-items-center">
              <div className="col">
                <h4>Buscar por categoría</h4>
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  {categorias.map((cate, index) => (
                    <option
                      key={index}
                      value={categoria}
                      onClick={() => setCategoria(cate)}
                    >
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form> */}
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        {news.map((noticia, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={
                  noticia.urlToImage
                    ? noticia.urlToImage
                    : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                }
                className="card-img-top img-card"
                alt={noticia.title}
              />
              <div className="card-body">
                <h5 className="card-title">{noticia.title}</h5>
                <p className="card-text">{noticia.description}</p>
              </div>
              <div className="card-footer d-grid">
                <a
                  className="btn btn-primary"
                  href={noticia.url}
                  target="_blank"
                >
                  Ver noticia completa
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
