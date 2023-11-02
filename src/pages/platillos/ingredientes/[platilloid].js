import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  getItemFromLocalStorageById,
  updateItemFromLocalStorageById,
  getItemsFromLocalStorage,
} from "@/utils/storage";

export default function Home() {
  const router = useRouter();
  const [platillo, setPlatillo] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [status, setStatus] = useState("disabled");
  useEffect(() => {
    if (router.isReady) {
      fetchPlatillo();
      fetchIngredients();
    }
  }, [router.isReady]);

  const fetchPlatillo = () => {
    debugger
    const id = router.query.platilloid;
    if (id) {
      const platillo = getItemFromLocalStorageById("platillos", id);
      if (platillo) {
        setPlatillo(platillo);
      }
    }
  };

  const fetchIngredients = () => {
    const ingredients = getItemsFromLocalStorage("ingredientes");
    setIngredients(ingredients);
  };

  const handleSaveIngredients = async () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const selectedIngredients = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => Number(checkbox.value));

    const platillo = getItemFromLocalStorageById(
      "platillos",
      router.query.platilloid
    );

    platillo.ingredients = selectedIngredients;

    updateItemFromLocalStorageById("platillos", platillo);

    await router.push("/platillos");
  }

  return (
    <>
      <Head>
        <title>Proyecto de IS2 - Fase 2</title>
        <meta name="description" content="Generated by Proyecto de IS2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container my-3">
        <h1>Platillo: {platillo.title}</h1>
        <h3>Selecciona los ingredientes que deseas asignar o remover</h3>
        <div className="my-3">
          {
            ingredients.map(ingredient => (
              <div className="form-check" key={ingredient.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={ingredient.id}
                  id={ingredient.id}
                  defaultChecked={platillo.ingredients?.includes(ingredient.id)}
                />
                <label className="form-check-label" htmlFor={ingredient.id}>
                  {ingredient.title}
                </label>
              </div>
            ))
          }
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSaveIngredients}>
          {status === "disabled" ? "Editar" : "Guardar"}
        </button>
      </main>
    </>
  );
}