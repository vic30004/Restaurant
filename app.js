
const fullTable = document.querySelector(".full-table");
let textContent = document.createElement("div");
textContent.className="container";
console.log(textContent);

tables.forEach((data)=>{
    if(data.name === undefined && data.email === undefined && data.phone === undefined){
        data.name="";
        data.email="";
        data.phone="";
   }
    console.log(data)
    let container = document.createElement("div");
    container.className="container"
    let tableInfo = document.createElement("ul");
    tableInfo.innerHTML=`<li>Name:${data.name}</li>\n<li>Email:${data.email}</li>\n<li>Phone:${data.phone}</li>`
   console.log(tableInfo);
   container.appendChild(tableInfo);
   fullTable.appendChild(container);
   
})

