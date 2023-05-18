export type task = [{ text: string; keywords: string[] }]

const highlightWords = (text: string, keyword: string[] | []) => {
	if (keyword.length > 0) {
		const regex = new RegExp(keyword.join("|"), "gi")
		// console.log("regex", regex)
		return text.replace(regex, (match) => `<span class="text-AAsecondary">${match}</span>`)
	}
	return text
}

export default highlightWords
