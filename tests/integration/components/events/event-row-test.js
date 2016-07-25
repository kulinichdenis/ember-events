import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('events/event-row', 'Integration | Component | events/event row', {
  integration: true
});

const event = Ember.Object.extend({id: 1, title: 'Title', description: 'Description description description'});

test('should render short description', function(assert) {
  this.set('event', event.create());
  this.render(hbs`{{events/event-row item=event}}`);

  assert.equal(this.$('td:nth-child(2)').text().length, 10);

});

