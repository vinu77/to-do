
let btn = document.querySelector(".add");
// console.log(btn);

btn.addEventListener("click",e=>{
    console.log(btn);

let addItem = document.querySelector("#text");

    let itemDiv = document.createElement("div");
    let itemDivLeft = document.createElement("div");
    let itemDivRight = document.createElement("div");
    let itemList = document.createElement("p");
    let itemEdit = document.createElement("button");
    let itemDelete = document.createElement("button");

    itemDiv.setAttribute("class","itemDiv");
    itemDivLeft.setAttribute("class","itemDivLeft");
    itemDivRight.setAttribute("class","itemDivRight");

    itemList.innerHTML = addItem.value.toUpperCase();
    itemEdit.textContent = "Edit";
    itemDelete.textContent = "Delete";

    let list = document.querySelector(".bottom");
    list.appendChild(itemDiv);
    itemDiv.appendChild(itemDivLeft);
    itemDiv.appendChild(itemDivRight);
    itemDivLeft.appendChild(itemList);
    itemDivRight.appendChild(itemEdit);
    itemDivRight.appendChild(itemDelete);

    //edit item
    itemEdit.onclick = function()
    {
        itemEdit.remove();
        itemDelete.remove();

        let itemUpdate = document.createElement("button");
        itemUpdate.textContent = "Update";
        itemDivRight.appendChild(itemUpdate);


        let val = itemList.innerHTML;
        addItem.value = val;

        itemUpdate.onclick = function()
        {
           itemList.innerHTML = addItem.value.toUpperCase();
           itemUpdate.remove();
           itemDivRight.appendChild(itemEdit);
           itemDivRight.appendChild(itemDelete);
           addItem.value = "";

        }
    }

    // deleting item 
    itemDelete.onclick = function()
    {
        itemDelete.parentNode.parentNode.remove();
    }
    addItem.value = "";
})
