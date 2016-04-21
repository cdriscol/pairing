module.exports = {
  getAllQ: getAllQ,
  getAllByIdsQ: getAllByIdsQ
};

var allUsers = [{
  name: 'Tyler',
  id: 1
},{
  name: 'Adam',
  id: 2
},{
  name: 'Joey',
  id: 3
}];

function getAllQ() {
  return allUsers;
}

function getAllByIdsQ(ids) {
  var filteredUsers = allUsers.filter(function (user) {
    return ids.indexOf(user.id) > -1;
  });
  
  return filteredUsers;
}