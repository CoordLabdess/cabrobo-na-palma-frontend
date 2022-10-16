export interface UserProps {
	cpf: string
	email: string
	id: string
	nome: string
	telefone: string
}

export interface RequestProps {
	AREA_PREFEITURA: null
	BAIRRO: string
	CIDADE: string
	COMPLEMENT: string
	ENDEREÇO: string
	ESPECIFICA: string
	CreationDate: number
	FID: 96
	GlobalID_2: string
	LOGRADOURO: string
	NOME: string
	NUMERO: number
	OBSERVACAO: string
	PONTO_DE_R: string
	PROTOCOLO: string
	SERVIÇO: string
	STATUS: string | null
	TELEFONE: number | string
	TEMPO: string
	TIPO: string
}
