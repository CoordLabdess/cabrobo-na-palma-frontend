import React, { createContext, useContext, useState } from 'react'
import { Coords } from '../types/global'

interface ServiceRequestFormContextData {
	majorServiceId: number
	minorServiceId: number
	data: {
		[key: string]: any
	}
	updateMajorServiceId: (id: number) => void
	updateMinorServiceId: (id: number) => void
	updateData: (key: string, value: any) => void
	updateForm: (object: { [key: string]: any }) => void
}

export const ServiceRequestFormContext = createContext<ServiceRequestFormContextData>(
	{} as ServiceRequestFormContextData,
)

export function ServiceRequestFormProvider(props: { children: React.ReactNode }) {
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

	const updateForm = (object: { [key: string]: any }) => {
		setData(oldState => {
			return { ...oldState, ...object }
		})
	}

	console.log(data)

	const value = {
		majorServiceId,
		minorServiceId,
		data,
		updateData,
		updateMajorServiceId,
		updateMinorServiceId,
		updateForm,
	}

	return (
		<ServiceRequestFormContext.Provider value={value}>
			{props.children}
		</ServiceRequestFormContext.Provider>
	)
}

export function useServiceRequestForm() {
	return useContext(ServiceRequestFormContext)
}
