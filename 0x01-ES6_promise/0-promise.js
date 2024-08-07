function getResponseFromAPI() {
	const success = false;
	return new Promise((resolve, reject) => {
		if (success) {
			reject();
		} else{
			resolve();
		}
	});
}
