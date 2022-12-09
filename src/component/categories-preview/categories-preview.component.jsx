import { useContext } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../category-previw/category-preview.conponent"

const CategoriesPreview = () => {

  const {categoriesMap} = useContext(CategoriesContext)
  

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