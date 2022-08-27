export async function fakeSendData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('')
		}, 700)
	})
}
