const numbers = document.querySelector("#numbers");
const ascending = document.querySelector("#ascending");
const descending = document.querySelector("#descending");
const sort = document.querySelector('[name="sort"]');
const table = document.querySelector("#table");

const handleSorting = () => {
  let sortedNumbers = [];
  const numbersArray = numbers.value
    .split(",")
    .map((number) => parseFloat(number.trim()));

  if (ascending.checked) {
    sortedNumbers = numbersArray.sort((a, b) => a - b);
  } else {
    sortedNumbers = numbersArray.sort((a, b) => b - a);
  }

  table.innerHTML = "";

  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = `Angka`;
  td.style.fontWeight = "bold";
  tr.appendChild(td);
  table.appendChild(tr);
  sortedNumbers.map((num) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = num;
    tr.appendChild(td);
    table.appendChild(tr);
  });
};
