import React from "react";

const SelectCategory = ({ categoria, actualizarCategoria }) => {
  const categorias = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <form>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col">
          <h4>Buscar por categoría</h4>
        </div>
        <div className="col">
          <select className="form-select" aria-label="Default select example">
            {categorias.map((cate, index) => (
              <option
                key={index}
                value={categoria}
                onClick={() => actualizarCategoria(cate)}
              >
                {cate}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default SelectCategory;
