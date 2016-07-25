import { moduleForModel, test } from 'ember-qunit';

moduleForModel('event', 'Unit | Model | event', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should model set data', function(assert){
	let model = this.subject({id: 1, title: 'Test', description: 'TestTestTest'});
	assert.equal(model.get('title'), 'Test');
	assert.equal(model.get('description'), 'TestTestTest');
});
