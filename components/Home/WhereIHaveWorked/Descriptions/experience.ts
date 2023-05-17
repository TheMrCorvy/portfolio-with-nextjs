export type Task = { text: string; keywords: string[] }

interface ButtonProps {
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

export const experience: Position[] = [
	{
		company: "Tsumugi Hotel",
		key: "TsumugiHotel",
		position: "Hotel Receptionist",
		tasks: [
			{
				text: "Highly experienced hotel receptionist with a proven track record of 9 months working in Japan.",
				keywords: ["Highly experienced", "Japan"],
			},
			{
				text: "Skillfully managed guest check-ins and check-outs while delivering exceptional customer service.",
				keywords: ["exceptional customer service"],
			},
			{
				text: "Effective communicator and proficient in handling reservations, providing accurate information, and ensuring a an enjoyable guest experience.",
				keywords: ["Effective communicator"],
			},
		],
		from: "Jun 2022",
		until: "Mar 2023",
		location: "Kyoto, Japan",
		buttonProps: {
			ButtonOrderOfcompanyNameBackgroundColorGreen: 0,
			CompanyName: "Tsumugi Hotel",
			BarPosition: -8,
			BarAvobePosition: 385,
			DescriptionJob: "TsumugiHotel",
			CompanyNameBackgroundColorGreen: [true, false, false, false],
		},
	},
	{
		company: "Self-Employed",
		key: "Freelancer",
		position: "Web Developer",
		tasks: [
			{
				text: "Highly qualified Freelance Web Developer, with almost 2 years of professional expertise",
				keywords: ["Highly qualified", "2 years"],
			},
			{
				text: "Proficient in Fullstack web development, and count with a strong portfolio showcasing successful projects across diverse industries.",
				keywords: ["strong portfolio"],
			},
		],
		from: "Feb 2020",
		until: "Dec 2021",
		location: "Buenos Aires, Argentina",
		useKeyOnBtn: true,
		buttonProps: {
			ButtonOrderOfcompanyNameBackgroundColorGreen: 1,
			CompanyName: "Freelancer",
			BarPosition: 36,
			BarAvobePosition: 129,
			DescriptionJob: "Freelancer",
			CompanyNameBackgroundColorGreen: [false, true, false, false],
		},
	},
	{
		company: "ServicioAlToque",
		key: "ServicioAlToque",
		position: "Backend Developer",
		tasks: [
			{
				text: "Constantly developing new features for an argentinian unicorn Startup.",
				keywords: ["new features"],
			},
			{
				text: "In company of a team, we developed a higly demanded API with PHP and Laravel for the web app of servicioAlToque.",
				keywords: ["highly demanded API"],
			},
			{
				text: "Close relations with the client and the rest of the team",
				keywords: [],
			},
		],
		from: "Jun 2021",
		until: "Dec 2021",
		location: "Buenos Aires, Argentina",
		buttonProps: {
			ButtonOrderOfcompanyNameBackgroundColorGreen: 2,
			CompanyName: "ServicioAlToque",
			BarPosition: 80,
			BarAvobePosition: 257,
			DescriptionJob: "ServicioAlToque",
			CompanyNameBackgroundColorGreen: [false, false, true, false],
		},
	},
	{
		company: "Law Firm",
		key: "LawFirm",
		position: "Administrative Asistant",
		tasks: [
			{
				text: "Efficiently supported daily operations and collaborated with legal professionals to ensure a smooth workflow and timely execution of tasks, while facilitating document management in the law firm of my father, Dr. Juan Pablo Corvalán.",
				keywords: ["ensure", "facilitating"],
			},
			{
				text: "Completing the templates for lawsuits with customer’s data.",
				keywords: [""],
			},
			{
				text: "Receiving and presenting official documentation in court.",
				keywords: [""],
			},
			{
				text: "Control and classification of legal evidence.",
				keywords: [""],
			},
			{
				text: "Performing technical support tasks in the IT area.",
				keywords: ["support", "IT area"],
			},
		],
		from: "Jul 2018",
		until: "Jan 2020",
		location: "Buenos Aires, Argentina",
		buttonProps: {
			ButtonOrderOfcompanyNameBackgroundColorGreen: 3,
			CompanyName: "Law Firm",
			BarPosition: 122,
			BarAvobePosition: 385,
			DescriptionJob: "LawFirm",
			CompanyNameBackgroundColorGreen: [false, false, false, true],
		},
	},
]