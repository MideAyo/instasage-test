import {ReactNode} from "react";

export type WithChildren = {
	children: ReactNode
}

export type ModalProps = {
	modal:boolean
	setModal:(value:boolean)=>void
}

export type ColorModes = 'light'|'dark'

export type InputProps = {
	setValue:(value:string)=>void
	value:string
}

export type AlertProps = {
	show?:boolean
	title:string
	text:string
	btn: {
		text:string,
		href?:string,
		onClick?:()=>void
		closeOnClick?:boolean
	}
	color?:string
}
