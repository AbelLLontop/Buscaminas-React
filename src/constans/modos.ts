export type Modo ={
	titulo:string,
	clase:string,
	mensajeWin:string,
	normal:{},
	open:{},
	empty:{},
	icon:{
		mine:string,
		flag:string,
		mineDesactivated:string,
	}
}
interface IModos{
	frozen:Modo,
	panal:Modo,
	toxico:Modo,
}

export const modos:IModos = {
	frozen:{
		titulo:'Modo Pingui!🐧',
		clase:'nodoFrozen',
		mensajeWin:'Hallazte todos los peces 🐟 antes que los tiburones 🦈',
		normal:{  background: "#88edf6",
		boxShadow: "0px 0px 3px 1px rgb(82 228 229)"},
		open:{  background: "rgb(27, 27, 27)", color: "white" },
		empty:{background:"rgb(52, 55, 55)"},
		icon:{
			mine:'🦈',
			flag:'🐧',
			mineDesactivated:'🐟',
		}	
	},
	panal:{
		titulo:'Modo Panal🐝',
		clase:'nodoPanal',
		mensajeWin:'Conseguiste todos los frascos de Miel 🍯 antes que los osos 🐻',
		normal:{background: "orange",
		boxShadow: "1px 1px 1px 4px orange",
		border: "solid 1px #202020"},
		open:{background: "rgb(27, 27, 27)", color: "orange" },
		empty:{ background: "rgb(52, 55, 55)" },
		icon:{
			mine:'🐻',
			flag:'🐝',
			mineDesactivated:'🍯',
		}		

	},
	toxico:{
		titulo:'Modo Toxic!☢',
		clase:'nodoToxico',
		mensajeWin:'Salvaste nuestras vidas ⛨☢ Gracias ⛑, ',
		normal:{ background: "#12ff00",
		boxShadow: " 0px 0px 15px 1px rgb(8 255 52)",},
		open:{background: "rgb(27, 27, 27)", color: "white" },
		empty:{background:"rgb(52, 55, 55)"},
		icon:{
			mine:'⛨',
			flag:'☢',
			mineDesactivated:'⛑',
		}

	}
}