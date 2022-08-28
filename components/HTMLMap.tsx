import { useRef, useState, useEffect } from 'react'
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { Coords } from '../types/global'
import { COLORS } from '../constants/colors'

interface HTMLMapProps {
	onCoordsChange?: (coords: Coords) => void
	initialCoords?: Coords
}

export function HTMLMap(props: HTMLMapProps) {
	const webViewRef = useRef()

	const [coords, setCoords] = useState<Coords | null>(null)

	function onMessage(data: any) {
		const newCoords = data.nativeEvent.data.split('|') as string[]
		setCoords({ latitude: Number(newCoords[0]), longitude: Number(newCoords[1]) })
	}

	useEffect(() => {
		if (props.onCoordsChange && coords) {
			props.onCoordsChange(coords)
		}
	}, [coords])

	function LoadingIndicatorView() {
		return <ActivityIndicator color='#4480c5' size='large' style={styles.ActivityIndicatorStyle} />
	}

	function injectedToHtml() {
		const myData = { planet: 'earth', galaxy: 'milkyway' }
		const injectedData = `document.getElementById('a').value = '${myData.planet + myData.galaxy}';`
		return injectedData
	}

	return (
		<View
			style={{
				height: '100%',
				width: '100%',
				borderColor: COLORS.primary500,
				borderBottomWidth: 2,
				borderTopWidth: 2
			}}
		>
			<WebView
				ref={webViewRef as any}
				style={{ height: '100%', width: '100%', paddingTop: 20 }}
				startInLoadingState
				geolocationEnabled
				javaScriptEnabled
				renderLoading={LoadingIndicatorView}
				originWhitelist={['*']}
				injectedJavaScript={injectedToHtml()}
				mixedContentMode='compatibility'
				onMessage={data => {
					onMessage(data)
				}}
				source={{
					html: `<html>
					<head>
						<meta charset="utf-8" />
						<meta
							name="viewport"
							content="initial-scale=1,maximum-scale=1,user-scalable=no"
						/>
						<link
							rel="stylesheet"
							href="https://js.arcgis.com/4.13/esri/themes/light/main.css"

						/>
						<script src="https://js.arcgis.com/4.13/"></script>
				
						<style>
							html,
							body,
							#viewDiv {
								padding: 0;
								margin: 0;
								height: 100%;
								width: 100%;
							}
							.esri-view .esri-view-surface--inset-outline:focus::after {
								outline: none !important;
							}
						</style>
				
						<script>
							require([
								'esri/Map',
								'esri/views/MapView',
								'esri/layers/FeatureLayer',
								'esri/Graphic',
								'esri/layers/GraphicsLayer',
								'esri/widgets/Search',
							], (Map, MapView, FeatureLayer, Graphic, GraphicsLayer, Search) => {
								const map = new Map({
									basemap: 'topo-vector',
								})
				
								const simpleMarkerSymbol = {
									type: 'simple-marker',
									color: '#4480c5',
									outline: {
										color: [255, 255, 255], // White
										width: 1,
									},
								}
				
								const pointGraphic = new Graphic({
									symbol: simpleMarkerSymbol,
								})
				
								const view = new MapView({
									container: 'viewDiv',
									map: map,
									center: [-39.31, -8.51],
									zoom: 16,
								})
								let layer = new GraphicsLayer({
									graphics: pointGraphic,
								})
								const featureLayer = new FeatureLayer({
									source: [pointGraphic],
									url: '',
								})

								const fLayer = new FeatureLayer({
									url: 'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Servi%c3%a7os_P%c3%bablicos/FeatureServer/0'
								})

								const searchWidget = new Search({
									view: view,
									locationEnabled: true,
									maxResults: 0,
									suggestionsEnabled: false,
									
								})
								view.on('click', (evt) => {
									layer.removeAll()
									layer.graphics = new Graphic({
										geometry: {
											type: 'point',
											longitude: evt.mapPoint.longitude,
											latitude: evt.mapPoint.latitude,
										},
										symbol: simpleMarkerSymbol,
									})
									sendDataToReactNativeApp(evt.mapPoint.longitude, evt.mapPoint.latitude)
								})
								map.add(featureLayer)
								map.add(fLayer)
								view.ui.add(searchWidget, {
									position: "top-right",
									index: 1
								});
								map.add(layer)
							})
						</script>
					</head>
				
					<body>
						<div id="viewDiv"></div>
						<script>
							async function sendDataToReactNativeApp (x, y) {
								window.ReactNativeWebView.postMessage(String(x) + '|' + String(y))
							}
							function handleEvent(message) {
								senDataToReactNativeApp(1, 1)
							}
							document.addEventListener("message", function(data) {
								alert(data.data);
							  })
						</script>
					</body>
				</html>
`
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	ActivityIndicatorStyle: {
		height: '100%',
		width: '100%',
		justifyContent: 'center'
	}
})
