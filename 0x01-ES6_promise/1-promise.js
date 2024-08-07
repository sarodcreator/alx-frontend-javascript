export default function (boolean) {
	boolean = true;
	return new Promise ((resolve, reject) => {
		const object = {
			status: 200,
			body: 'Success',
		};
		if (boolean) {
			resolve(object);
		} else{
			reject(Error('The fake API is not working currently'));
		}
	});
}
