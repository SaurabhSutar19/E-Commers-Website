import React from "react";

const productReduce = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoding: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return featureData.featured === true;
      });
      return {
        ...state,
        Products: action.payload,
        featureProducts: [],
      };

    case "API_ERROR":
      return {
        ...state,
        isLoding: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReduce;
