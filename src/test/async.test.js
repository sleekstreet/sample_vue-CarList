import app from '../main';
import { getInventory, getFullInventory } from '../api/Mock_CarInventory';

//jest.mock('getInventory');

it('Is Async is working from mock', () => {
  expect.assertions(1);
  return getInventory(3).then(data =>
    expect(data.model).toEqual('Corvette Stingray')
  );
});

test('Is our Async working and populating correctly', async () => {
  expect.assertions(1);
  try {
    return getFullInventory().then(data => expect(data[1].make).toEqual('BMW'));
  } catch (e) {
    expect(e).toMatch('error');
  }
});
