import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	
	shortDescription: Ember.computed('item', function(){
		return this.get('item').get('description').substring(0,10);
	})
});
