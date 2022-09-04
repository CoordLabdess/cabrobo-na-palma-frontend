export async function fakeSendData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('')
		}, 700)
	})
}

export async function fakeLogin(cpf: string, password: string) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (cpf === '12345678900' && password === '123456') {
				resolve('')
			} else {
				reject(new Error('Invalid Credentials'))
			}
		}, 700)
	})
}
