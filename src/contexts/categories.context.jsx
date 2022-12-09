import { useEffect } from "react";
import { createContext,useState } from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils"
// import SHOP_DATA from "../shop-data"

export const CategoriesContext = createContext({
  categoriesMap:{},
})

export const CategoriesProvider = ({children}) => {

  const [categoriesMap,setCategoriesMap] = useState([])
  const value = {categoriesMap}

  // 创建collection只需要执行一次
  // useEffect(() => {
  //   addCollectionAndDocuments("categories",SHOP_DATA)
  // },[])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
      // console.log(categoryMap)
    }
    getCategoriesMap()
  },[])

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}

