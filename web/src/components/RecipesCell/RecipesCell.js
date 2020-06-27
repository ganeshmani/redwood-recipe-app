export const QUERY = gql`
  query {
    recipes {
      id
      imageUrl
      name
      description
      likes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ recipes }) => {
  return recipes.map((recipe, index) => (
    <div
      key={index}
      className="w-1/4 bg-gray-500 md-flex max-w-sm rounded overflow-hidden shadow-lg m-2"
    >
      <img
        className="w-full"
        style={{ maxHeight: '200px' }}
        src={recipe.imageUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.name}</div>
        <p className="text-gray-700 text-base">{recipe.description}</p>
      </div>
      <div className="px-6 py-4">
        <span>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{' '}
          {recipe.likes}
        </span>
      </div>
    </div>
  ))
}
