import Navbar from "@/components/navbar";
import styles from "@/styles/category.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Card from "@/components/card";
import Checkbox from "@/components/checkbox";
import { buildQuery } from "@/utils";

const CategoryViewer = () => {

  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState([]);

  const getProductFromApi = async () => {
    if (category) {
      const product = await fetch(`http://localhost:3000/api/product?category=${category}`);
      const jsonProduct = await product.json();
      setProducts(jsonProduct);
    }
  };

  const brandCheckbox = (e, label) => {
    if (e.target.checked) {
      setBrand([...brand, label])
      // console.log([...brand,label])
      callFilterApi([...brand, label])
    }
    else {
      const filteredBrand = brand.filter(item => item != label)
      setBrand(filteredBrand)
      callFilterApi(filteredBrand)
      // console.log(brand.filter(item => item!= label))
    }
  }

  const callFilterApi = async (brand) => {
    let query = "";
    if (brand){
      query = buildQuery("brand", brand)
    }
    else {
      query = `category=${category}`;
      console.log(query)
    }
    const fetchData = await fetch(`http://localhost:3000/api/product?${query}`);
    const result = await fetchData.json();
    setProducts(result)
    console.log(query)
  }

  const clothBrands = [{ label: "Allen solly" }, { label: "Anouk" }, { label: "Louis philip" }, { label: "Peter England" }, { label: "Eten" }, { label: "Raymond" }]

  useEffect(() => {
    getProductFromApi();
  }, [category]);
  return (
    <div>
      <Navbar />
      <section className={styles.categoryProducts}>
        <div className={styles.filterPane}>
          <h4>Brands</h4>
          {clothBrands.map(item => {
            return (
              <Checkbox {...item} checkboxAction={brandCheckbox} />
            )
          })}
        </div>
        <div className={styles.productsDisplay}>
          {products.map(item => {
            return (
              <Card {...item} />
            )
          })}
        </div>
      </section>
    </div>
  )
}
export default CategoryViewer;