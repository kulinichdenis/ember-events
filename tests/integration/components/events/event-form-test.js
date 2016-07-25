import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('events/event-form', 'Integration | Component | events/event form', {
  integration: true
});

test('should render event-form', function(assert) {
  
  this.render(hbs`{{events/event-form}}`);

  assert.equal(this.$('.panel-body').find('p').first().text().trim(), 'Description:');
});
