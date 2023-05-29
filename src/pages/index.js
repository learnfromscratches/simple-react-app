import styles from "@/styles/Home.module.css"
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

const Home = () => {

  const [products, setProducts] = useState([]);
  const router = useRouter();

  const fetchApi = async () => {
    const fetchData = await fetch('http://localhost:3000/api/product');
    const result = await fetchData.json();
    setProducts(result)
    console.log(result)
  }

  useEffect(() => { fetchApi() }, [])

  const categoryArray = [{category : "Men"},{category : "Women's clothing"},{category : "Casual Shoes"},{category : "Watches"},{category : "Smart TV"},{category : "Health & beauty"}]
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className={styles.mainPage}>
        <div className={styles.leftPane}>
          <div className={styles.categories}>
            {categoryArray.map(item=>{
              return(
                <span onClick={() => router.push(`/${item.category}`)}>{item.category}</span>
              )
            })}
          </div>
        </div>
        <div className={styles.rightPane}>
          {products.map(item => {
            return (
              <Card {...item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Home;