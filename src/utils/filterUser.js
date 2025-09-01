
const filterUser = (users) => {
  return users?.filter(user => user.id < 5)
}

export default filterUser
