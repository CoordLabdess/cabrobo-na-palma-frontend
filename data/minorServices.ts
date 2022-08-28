import { MinorService } from '../types/global'
import postesMono from '../assets/services/majorservices/iluminacaoPublica/minorServices/postesMono.png'
import pracasMono from '../assets/services/majorservices/iluminacaoPublica/minorServices/pracasMono.png'
import monumentosMono from '../assets/services/majorservices/iluminacaoPublica/minorServices/monumentosMono.png'

import faltaDeAguaMono from '../assets/services/majorservices/abastecimentoDeAgua/minorServices/faltaDeAguaMono.png'
import vazamentoMono from '../assets/services/majorservices/abastecimentoDeAgua/minorServices/vazamentoMono.png'
import caminhaoPipaMono from '../assets/services/majorservices/abastecimentoDeAgua/minorServices/caminhaoPipaMono.png'

import esgotoMono from '../assets/services/majorservices/saneamentoBasico/minorServices/esgotoMono.png'
import coletaDeLixoMono from '../assets/services/majorservices/saneamentoBasico/minorServices/coletaDeLixoMono.png'
import insetosERoedoresMono from '../assets/services/majorservices/saneamentoBasico/minorServices/insetosERoedoresMono.png'

import tapaBuracosMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/tapaBuracosMono.png'
import remocaoDeEntulhosMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/remocaoDeEntulhosMono.png'
import terraplanagemDeViasMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/terraplanagemDeViasMono.png'
import vistoriaDeArvoresMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/vistoriaDeArvoresMono.png'
import capinacaoEmViasMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/capinacaoEmViasMono.png'
import calcadasMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/calcadasMono.png'
import alagamentosMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/alagamentosMono.png'
import transporteMono from '../assets/services/majorservices/mobilidadeUrbana/minorServices/transporteMono.png'

export const allMinorServices: MinorService[] = [
	{
		id: 1,
		title: 'Postes',
		alias: 'postes',
		img: postesMono,
		category: 'MinorService',
		formId: 1
	},
	{
		id: 2,
		title: 'Praças',
		alias: 'pracas',
		img: pracasMono,
		category: 'MinorService',
		formId: 2
	},
	{
		id: 3,
		title: 'Monumentos',
		alias: 'monumentos',
		img: monumentosMono,
		category: 'MinorService',
		formId: 3
	},
	{
		id: 4,
		title: 'Falta de Água',
		alias: 'faltaDeAgua',
		img: faltaDeAguaMono,
		category: 'MinorService',
		formId: 4
	},
	{
		id: 5,
		title: 'Vazamento',
		alias: 'vazamento',
		img: vazamentoMono,
		category: 'MinorService',
		formId: 5
	},
	{
		id: 6,
		title: 'Caminhão Pipa',
		alias: 'caminhaoPipa',
		img: caminhaoPipaMono,
		category: 'MinorService',
		formId: 6
	},
	{
		id: 7,
		title: 'Esgoto',
		alias: 'esgoto',
		img: esgotoMono,
		category: 'MinorService',
		formId: 7
	},
	{
		id: 8,
		title: 'Coleta de Lixo',
		alias: 'coletaDeLixo',
		img: coletaDeLixoMono,
		category: 'MinorService',
		formId: 8
	},
	{
		id: 9,
		title: 'Insetos e Roedores',
		alias: 'insetosERoedores',
		img: insetosERoedoresMono,
		category: 'MinorService',
		formId: 9
	},
	{
		id: 10,
		title: 'Tapa Buracos',
		alias: 'tapaBuracos',
		img: tapaBuracosMono,
		category: 'MinorService',
		formId: 10
	},
	{
		id: 11,
		title: 'Remoção de Entulhos',
		alias: 'remocaoDeEntulhos',
		img: remocaoDeEntulhosMono,
		category: 'MinorService',
		formId: 11
	},
	{
		id: 12,
		title: 'Terraplanagem de Vias',
		alias: 'terraplanagemDeVias',
		img: terraplanagemDeViasMono,
		category: 'MinorService',
		formId: 12
	},
	{
		id: 13,
		title: 'Vistoria de Árvores',
		alias: 'vistoriaDeArvores',
		img: vistoriaDeArvoresMono,
		category: 'MinorService',
		formId: 13
	},
	{
		id: 14,
		title: 'Capinação em Vias',
		alias: 'capinacaoEmVieas',
		img: capinacaoEmViasMono,
		category: 'MinorService',
		formId: 14
	},
	{
		id: 15,
		title: 'Calçadas',
		alias: 'calcadas',
		img: calcadasMono,
		category: 'MinorService',
		formId: 15
	},
	{
		id: 16,
		title: 'Alagamentos',
		alias: 'alagamentos',
		img: alagamentosMono,
		category: 'MinorService',
		formId: 16
	},
	{
		id: 17,
		title: 'Transporte',
		alias: 'transporte',
		img: transporteMono,
		category: 'MinorService',
		formId: 17
	}
]
