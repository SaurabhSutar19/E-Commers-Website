import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import Products from "../Components/Products";
import reducer from "../reducer/productReducer";

// Create the Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
  isLoading: false,
  isError: false,
  Products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleproduct: {},
};

// Create a Provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  // Fetch products inside useEffect
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLEPRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleproduct = await res.data;
      dispatch({ type: "SET_SINGLEPRODUCT_DATA ", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLEPRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API); // Fetch products when the component mounts
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// Custom hook for consuming the context
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
