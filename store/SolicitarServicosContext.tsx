import { createContext, useState } from 'react'
import { Coords } from '../types/global'

interface SolicitarServicoForm {
	majorServiceId: number
	minorServiceId: number
	coords: Coords
	localDoServicO: string
	bairro: string
	numero: string
	complemento: string
	currentStep: number
	maxSteps: number
	pontoDeReferencia: string
}
