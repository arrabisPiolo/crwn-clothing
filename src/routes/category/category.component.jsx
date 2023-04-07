import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../component/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import ReturnLogo from "../../assets/return.png";
import {
  CategoryTitle,
  CategoryContainer,
  CategoryHeader,
  ReturnLink,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryHeader>
        <ReturnLink to={"/shop"}>
          <img src={ReturnLogo} alt="Return Logo" />
        </ReturnLink>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      </CategoryHeader>

      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
