import {DirectoryBodyContainer,BackgroundImage,DirectoryContainer} from "./directoryItem.styles.jsx"
import { NavLink } from "react-router-dom"

const DirectoryItem = ({category}) => {

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