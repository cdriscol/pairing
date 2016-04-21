module.exports = {
  getAllQ: getAllQ,
  getAllByIdsQ: getAllByIdsQ
};

var allActivities = [{
  name: 'Certification',
  ownerId: 1,
  id: 1
},{
  name: 'Benchmark',
  ownerId: 1,
  id: 2
},{
  name: 'Watch and Respond',
  ownerId: 2,
  id: 3
}];

function getAllQ() {
  return allActivities;
}

function getAllByIdsQ(ids) {
  var filteredActivities = allActivities.filter(function (activity) {
    return ids.indexOf(activity.id) > -1;
  });

  return filteredActivities;
}