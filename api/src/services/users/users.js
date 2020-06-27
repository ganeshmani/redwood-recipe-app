import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const loginUser = async ({ request }) => {
  try {
    const user = await db.user.findOne({
      where: { email: request.email },
    })
    if (!user) {
      throw new Error('Invalid User')
    }
    const passwordMatch = await bcrypt.compare(request.password, user.password)
    if (!passwordMatch) {
      throw new Error('Invalid Login')
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.email,
      },
      'my-secret-from-env-file-in-prod',
      {
        expiresIn: '30d', // token will expire in 30days
      }
    )

    return { user, token }
  } catch (e) {
    return e
  }
}

export const createUser = async ({ input }) => {
  const password = await bcrypt.hash(input.password, 10)
  const data = { ...input, password }
  return db.user.create({
    data,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
