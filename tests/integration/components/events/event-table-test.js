import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('events/event-table', 'Integration | Component | events/event table', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{events/event-table}}`);
  assert.equal(this.$('table').find('tr:first').find('th:first').text().trim(), 'Title');
});
