const itemsList = document.getElementById("items-list");

fetch("https://cataas.com/api/cats?tags=cute")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const newItem = document.createElement("div");
      newItem.innerHTML = `
        <h4>${item._id}</h4>
        <p>${item.tags}</p>
      `;
      itemsList.appendChild(newItem);
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
