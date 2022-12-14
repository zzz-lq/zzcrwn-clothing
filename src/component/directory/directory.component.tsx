import DirectoryItem from "../directoryItem/directoryItem-compoent"
import {CategoriesContainer} from "./directory.styles"
import {DirectoryType} from "../../App"

export type DirectoryProps = {
  categories: DirectoryType[]
}
 
const Directory = ({categories}:DirectoryProps) => {

  return(
    <CategoriesContainer>
      {
        categories.map(category => (
          <DirectoryItem key={category.id} category={category}/>
        ))
      }
    </CategoriesContainer>
  )
}
export default Directory