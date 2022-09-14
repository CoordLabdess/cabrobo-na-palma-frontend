export function removerCaracteresEspeciais(text: string): string {
	return text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{}\[\]\\\/]/gi, '')
}
