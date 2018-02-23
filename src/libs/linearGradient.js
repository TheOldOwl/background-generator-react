

const linearGradient = () => {
	const select = document.querySelector("#linear-direction").value;
	let linearGradient = 'linear-gradient ' + select
	return (
		linearGradient
	)
}

export default linearGradient;