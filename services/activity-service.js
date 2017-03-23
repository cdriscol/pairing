const allActivities = [{
	name: 'Certification',
	ownerId: 1,
	id: 1
}, {
	name: 'Benchmark',
	ownerId: 1,
	id: 2
}, {
	name: 'Watch and Respond',
	ownerId: 2,
	id: 3
}];

const getAllAsync = () => Promise.resolve(allActivities);
const getAllByIdsAsync = (ids) => Promise.resolve(allActivities.filter(activity => ids.indexOf(activity.id) > -1));

module.exports = {
	getAllAsync,
	getAllByIdsAsync
};