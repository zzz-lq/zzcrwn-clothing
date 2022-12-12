import { Routes,Route } from "react-router-dom"
import CategoriesPreview from "../../component/categories-preview/categories-preview.component"
import Categoty from "../../component/category/category.component"
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import {fetchCategoriesAsync} from "../../store/categories/category.action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Shop = () => {

  const dispath = useDispatch()

  useEffect(() => {
    dispath(fetchCategoriesAsync())
  },[])

  return(
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Categoty />}></Route>
    </Routes>
  )
}

export default Shop