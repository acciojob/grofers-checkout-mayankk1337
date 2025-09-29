const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	
const priceCells = document.querySelectorAll(".price");
	
	 let total = 0;
	
    priceCells.forEach(cell => {
    total += parseFloat(cell.textContent); });
	
	const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
	const totalCell = document.createElement("td");
	
    totalCell.colSpan = 2;
	totalCell.id = "ans";
    totalCell.textContent = `Total Vaue : Rs ${total}`;
	totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

