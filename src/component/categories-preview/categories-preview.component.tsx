// import { useContext } from "react"
// import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../category-previw/category-preview.conponent"
import { useSelector } from "react-redux"
import {selectorCategoriesMap} from "../../store/categories/category.selector"

const CategoriesPreview = () => {

  // const {categoriesMap} = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectorCategoriesMap)
  // const isloading = useSelector(selectCategoriesIsloading)
  return(
    <>
    {
      Object.keys(categoriesMap).map((title) => (
        <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
      ))
    }
    </>
  )
}

export default CategoriesPreview