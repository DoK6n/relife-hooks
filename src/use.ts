export const use = <T>(
  thenable: Promise<T> & {
    status?: 'pending' | 'fulfilled' | 'rejected'
    value?: T
    reason?: unknown
  },
): T => {
  switch (thenable.status) {
    case 'pending':
      throw thenable
    case 'fulfilled':
      return thenable.value as T
    case 'rejected':
      throw thenable.reason
    default:
      thenable.status = 'pending'
      thenable.then(
        value => {
          thenable.status = 'fulfilled'
          thenable.value = value
        },
        reason => {
          thenable.status = 'rejected'
          thenable.reason = reason
        },
      )
      throw thenable
  }
}
