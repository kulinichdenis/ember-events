import { test } from 'qunit';
import moduleForAcceptance from 'traveller/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');
test('visiting /', function(assert) {
  visit('/');
  
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('tr').length, 8, 'count row');
  });
});

test('visiting /:id', function(assert){
	visit('/-KNH-ho-Bh0XTj6NmGg7');
	
  andThen(function(){
		assert.equal(currentURL(), '/-KNH-ho-Bh0XTj6NmGg7');
		assert.equal(find('.panel-body').find('p').first().text(), 'Description:');
	});
});
