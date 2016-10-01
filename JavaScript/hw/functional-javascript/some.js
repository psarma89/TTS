function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(user){
      return goodUsers.some(function(good){
        return good === user;
      })
    })
  };
}

module.exports = checkUsersValid
