const allUsers = [{
	name: 'Tyler',
	id: 1
}, {
	name: 'Adam',
	id: 2
}, {
	name: 'Joey',
	id: 3
}];

const getAllQ = () => allUsers;

const getAllByIdsQ = (ids) => {
	return allUsers.filter(
		(user) => ids.indexOf(user.id) > -1
	);
};

module.exports = {
	getAllQ,
	getAllByIdsQ
};