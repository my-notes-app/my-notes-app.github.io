import { getUser } from '../util.js';

export function addOwner(obj) {
  const userData = getUser();

  if (userData === null) {
    return alert('User is not logged in!');
  }

  const id = userData.objectId;

  obj.owner = {
    __type: 'Pointer',
    className: '_User',
    objectId: id,
  };

  return obj;
}
