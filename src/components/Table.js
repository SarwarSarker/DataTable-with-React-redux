import axios from "axios";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllProducts } from "../redux/features/productSlice";
import TableIcons from "./TableIcons";

const Table = () => {
  const allData = JSON.parse(JSON.stringify(useSelector(getAllProducts)));
  console.log(allData);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get(
        "https://staging-backend.esyms-api.com/esyms/website/product/front-condition?categoryId=&name=%20"
      )
      .catch((err) => console.log("error", err));

    const resData = response.data.results.docs;
    dispatch(addProduct(resData));
    console.log(resData);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const data = allData.map((pdata) => ({
    productId: pdata.productId,
    name: pdata.name.en,
    brand: pdata.brand,
    age: pdata.age,
    price: pdata.price,
    specialPrice: pdata.specialPrice,
  }));

  const columns = [
    { title: "Product Id", field: "productId" },
    { title: "Name", field: "name" },
    { title: "Price", field: "price" },
    { title: "SpecialPrice", field: "specialPrice" },
    { title: "Brand", field: "brand" },
    { title: "Age", field: "age" },
  ];

  return (
    <>
      <MaterialTable
        title="Basic Table"
        icons={TableIcons}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Table;
