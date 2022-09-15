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

export function generateFakeProtocol(): string {
	const a = Math.floor(Math.random() * (1000 - 100) + 100)
	const b = Math.floor(Math.random() * (1000 - 100) + 100)
	const c = Math.floor(Math.random() * (1000 - 100) + 100)
	return `${a}.${b}-${c}`
}
