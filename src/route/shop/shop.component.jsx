import { Routes,Route } from "react-router-dom"
import CategoriesPreview from "../../component/categories-preview/categories-preview.component"
import Categoty from "../../component/category/category.component"

const Shop = () => {

  return(
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Categoty />}></Route>
    </Routes>
  )
}

export default Shop