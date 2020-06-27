import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
  useMutation,
} from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'

import NavbarLayout from '../../layouts/NavbarLayout'

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipeMutation($input: CreateRecipeInput) {
    createRecipe(request: $input) {
      id
      likes
      name
      description
      likes
      imageUrl
    }
  }
`
const CreateRecipePage = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    imageUrl: '',
    uploadingState: 'NONE',
  })

  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.home())

      setState({
        name: '',
        description: '',
        imageUrl: '',
        uploadingState: 'NONE',
      })
    },
  })

  const onSubmit = () => {
    console.log('on submit', state)

    createRecipe({
      variables: {
        input: {
          name: state.name,
          description: state.description,
          imageUrl: state.imageUrl,
          likes: 0,
        },
      },
    })
  }

  const uploadFile = async (e) => {
    console.log('Uploading....')
    setState({ ...state, uploadingState: 'UPLOADING' })
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'qy3oxqkx')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/ganeshimaginary/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )

    const file = await res.json()

    setState({
      ...state,
      imageUrl: file.secure_url,
      uploadingState: 'UPLOADED',
    })
  }

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <NavbarLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Add Recipe
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form onSubmit={onSubmit}>
              <div>
                <Label
                  htmlFor="recipe-name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Recipe Name
                </Label>
                <div className="mt-1 rounded-md shadow-sm">
                  <TextField
                    id="name"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={onChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    validation={{
                      required: true,
                    }}
                  />
                </div>

                <FieldError name="email" className="text-red-500 text-xs" />
              </div>
              <div className="mt-6">
                <Label
                  htmlFor="description"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Description
                </Label>
                <div className="mt-1 rounded-md shadow-sm">
                  <TextAreaField
                    id="description"
                    name="description"
                    value={state.description}
                    onChange={onChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <FieldError
                  name="description"
                  className="text-red-500 text-xs"
                />
              </div>

              <input type="file" onChange={uploadFile} />

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Submit className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Submit
                  </Submit>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </NavbarLayout>
  )
}

export default CreateRecipePage
