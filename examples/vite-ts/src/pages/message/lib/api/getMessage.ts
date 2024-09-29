import { Post } from '../../../../lib/model'

export const getMessage = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/posts/${id}`)
  const data = (await response.json()) as Post
  return data
}
