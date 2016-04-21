describe('user-activities', function() {
  beforeEach(function() {
    this.userActivitiesCtrl = require('./user-activities');
  });
  
  it('has getActivityById defined', function() {
    expect(this.userActivitiesCtrl.getActivityById).toBeDefined();
  });
  
  
});