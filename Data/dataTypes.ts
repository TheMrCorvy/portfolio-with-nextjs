/** Experience */
export type Task = { text: string; keywords: string[] }

export interface ButtonProps {
	ButtonOrderOfcompanyNameBackgroundColorGreen: number
	CompanyName: string
	BarPosition: number
	BarAvobePosition: number
	DescriptionJob: string
	CompanyNameBackgroundColorGreen: boolean[]
}

export interface Position {
	company: string
	key: string
	position: string
	tasks: Task[]
	from: string
	until: string
	location: string
	useKeyOnBtn?: boolean
	buttonProps: ButtonProps
}

/** Projects */
export interface Project {
	name: string
	imageUrl: string
	isRecent: boolean
	inProgress: boolean
	description: {
		text: string
		KeyWords: string[] | []
	}
	tags: string[]
	links: {
		github: string
		webPage: string
	}
}
