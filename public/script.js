async function getData() {
	const response = await fetch('http://localhost:8080/api/v1/pets');
	const data = await response.json();

	const renderData = document.createElement('div');

	renderData.innerHTML = `${data.map((el) => {
		return `<p>${el.name}</p>` + `<div>${el.breed}</div>`;
	})}`;

	document.getElementById('root').appendChild(renderData);
}

getData();
