import React, { createContext, useState } from 'react'
import { Coords } from '../types/global'

interface SolicitarServicoForm {
	majorServiceId: number
	minorServiceId: number
	data: {
		[key: string]: any
	}
	updateMajorServiceId: (id: number) => void
	updateMinorServiceId: (id: number) => void
	updateData: (key: string, value: any) => void
}

export const SolicitarServicoFormContext = createContext<SolicitarServicoForm>({
	majorServiceId: -1,
	minorServiceId: -1,
	data: {},
	updateMajorServiceId: (id: number) => {},
	updateMinorServiceId: (id: number) => {},
	updateData: (key: string, value: any) => {}
})

export function SolicitarServicoFormContextProvider(props: { children: React.ReactNode }) {
	const [data, setData] = useState({})
	const [majorServiceId, setMajorServiceId] = useState(-1)
	const [minorServiceId, setMinorServiceId] = useState(-1)

	function updateMajorServiceId(id: number) {
		setMajorServiceId(id)
		setData({})
	}

	function updateMinorServiceId(id: number) {
		setMinorServiceId(id)
		setData({})
	}

	function updateData(key: string, value: any) {
		setData(cData => {
			return { ...cData, [key]: value }
		})
	}

	const value = {
		majorServiceId,
		minorServiceId,
		data,
		updateData,
		updateMajorServiceId,
		updateMinorServiceId
	}

	return (
		<SolicitarServicoFormContext.Provider value={value}>
			{props.children}
		</SolicitarServicoFormContext.Provider>
	)
}
