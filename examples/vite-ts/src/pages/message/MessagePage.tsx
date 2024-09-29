import { GetMessage } from './ui'
import { RouteObject, useParams } from 'react-router-dom'
import { getMessage } from './lib'

export const MessageRoute: RouteObject = {
  path: '/message/:id',
  element: <MessagePage />,
}

function MessagePage() {
  const { id } = useParams()

  return <GetMessage promise={getMessage(+id)} />
}
export default MessagePage
