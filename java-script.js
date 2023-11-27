const grid = document.querySelector("#grid");

for(let i = 0; i < 256; i++){
    const gridItem = document.createElement("div");
    gridItem.className = `gridItem num${i}`;
    grid.appendChild(gridItem);
}

grid.addEventListener("mouseover", (e) => {
    e.target.style.background = "blue";
    console.log(e.target);
})

