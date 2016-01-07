import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  },
  actions: {
    save() {
      console.log('+-- save action bubbled up to friends new route');
      return true;
    },
    cancel() {
      console.log('+-- cancel action bubbled up to friends new route');
      return true;
    }
  }
});
