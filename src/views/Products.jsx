import { Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
    const [data, setData] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
      axios
      .get("http://localhost:8000/api/bebidas/")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    },[]);
  
  return (
    <div>
      {data ? (
        data.map((item) => (
          <>
            <ProductCard
            nombre={item.nombre}
            sabor={item.sabor}
            cantidadml={item.cantidadml}
            alcoholica={item.alcoholica}
            onClick = {()=>{
              navigate(`/products/${item.id}`);
            }}
            />
          </>    
        ))
    ) : ( 
      <Text>Esperando elementos...</Text>
    )}
  </div>
  );
}

export default Products;