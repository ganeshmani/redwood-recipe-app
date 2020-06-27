import { db } from 'src/lib/db'

export const recipes = () => {
  return db.recipe.findMany()
}

export const Recipe = {
  user: (_obj, { root }) =>
    db.recipe.findOne({ where: { id: root.id } }).user(),
}

export const createRecipe = ({ request }) => {
  console.log('request', request)
  return db.recipe.create({
    data: request,
  })
}

export const addLike = ({ request }) => {
  return db.recipe.update({
    data: {
      likes: request.likes,
    },
    where: { id: request.recipeId },
  })
}
