import ClassRoom from './0-classroom';

export default function initializeRooms() {
	let rooms = [];
  for (let i = 0; i < array.length; i++) {
    rooms.push(new ClassRoom(array[i]));
  }
  return rooms;
}
