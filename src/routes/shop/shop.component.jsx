import { useContext, fr, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          {/* 2323 */}
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
