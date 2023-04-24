import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      name,
      image: faker.internet.avatar(),
      role: 'user',
      tagline: faker.word.adjective(),
      hashedPassword,
    },
  })

  res.status(200).json(user)
}
