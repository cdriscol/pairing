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

const getAllQ = () => allActivities;

const getAllByIdsQ = (ids) => {
	return allActivities.filter(
		(activity) => ids.indexOf(activity.id) > -1
	);
};

module.exports = {
	getAllQ,
	getAllByIdsQ
};