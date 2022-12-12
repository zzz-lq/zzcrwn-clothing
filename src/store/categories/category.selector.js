import {createSelector} from 'reselect'
// 在selector中处理得到map,但是此处每次调用都会返回新对象，性能不好，只有在categories改变时，才生成新对象才对，使用reselect

const selectorCategoryReducer = (state) => state.category

export const selectorCategories = createSelector([selectorCategoryReducer],  //不变不会调用后面的函数
  (categoriesSlice) => categoriesSlice.categories)

export const selectorCategoriesMap = createSelector(
  [selectorCategories],
  (categories) => categories.reduce((acc,category) => {
      const {title, items} = category;
      acc[title.toLowerCase()] = items;
      return acc
    },{})
)

export const selectCategoriesIsloading = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => categoriesSlice.isloading
)