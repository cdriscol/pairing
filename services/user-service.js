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

const getAllAsync = () => Promise.resolve(allUsers);
const getAllByIdsAsync = (ids) => Promise.resolve(allUsers.filter(user => ids.indexOf(user.id) > -1));

module.exports = {
	getAllAsync,
	getAllByIdsAsync
};