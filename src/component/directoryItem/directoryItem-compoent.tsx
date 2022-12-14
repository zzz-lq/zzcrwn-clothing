import {DirectoryBodyContainer,BackgroundImage,DirectoryContainer} from "./directoryItem.styles"
import { NavLink } from "react-router-dom"
import { DirectoryType } from "../../App"

export type DirectoryItemProps = {
  category : DirectoryType
}

const DirectoryItem = ({category}:DirectoryItemProps) => {

  return(
    <DirectoryContainer >
      <BackgroundImage imageUrl={category.imageUrl}/>
      <DirectoryBodyContainer>
        <NavLink to={`/shop/${category.title}`}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </NavLink>
      </DirectoryBodyContainer>
      
      
    </DirectoryContainer>
  )
}

export default DirectoryItem