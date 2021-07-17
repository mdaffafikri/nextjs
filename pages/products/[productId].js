import { useRouter } from "next/router";
// import React from "react";

function Product() {
  const router = useRouter();
  let productId = router.query.productId;

  if (isNaN(productId) && productId != null) return <>Product id not found</>;

  return <div>Product {productId}</div>;
}

export default Product;
