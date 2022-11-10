let addNewBtn = document.querySelector("#addBtn");
addNewBtn.addEventListener("click", addName);

function addName() {
    let addList = document.querySelector("#addList").value;

    let todoList = document.querySelector("#todoList");

    let choreItem = document.createElement("div");
    let choreInput = document.createElement("input");
    choreInput.type = "text";
    choreInput.setAttribute("disabled", "");
    choreInput.value = addList;
    choreInput.defaultValue = addList;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    let remBtn = document.createElement("button");
    remBtn.textContent = "Delete";
    remBtn.classList = "editBtn";
    remBtn.addEventListener("click", remValue);

    todoList.appendChild(choreItem);
    choreItem.appendChild(choreInput);
    choreItem.appendChild(editBtn);
    choreItem.appendChild(remBtn);

    let count = todoList.childElementCount;

    if (count === 5) {
        addBtn.setAttribute("disabled", "");
        alert("HEY!!! You need to finish one of your chores to add a new one!!!")

    }
    function remValue() {
        choreItem.remove();
        addBtn.removeAttribute("disabled", "");
    }


    function editValue() {
        choreInput.removeAttribute("disabled", "");
        editBtn.setAttribute("disabled", "");
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);
        choreItem.appendChild(saveBtn);
        
        function saveValue() {
            let text = "Are you sure you want to save " + choreInput.value + " as new Chore?";

            if (confirm(text) == true) {
                editBtn.removeAttribute("disabled", "");
                let newValue = choreInput.value;
                choreInput.defaultValue = newValue;
                console.log(newValue);
                choreInput.setAttribute("disabled", "");
                choreItem.removeChild(saveBtn);
                text = "Saved successfully";
            } else {
                text = "Cancelled";
                editBtn.removeAttribute("disabled", "");
                choreInput.setAttribute("disabled", "");
                choreItem.removeChild(saveBtn);
                choreInput.value = choreInput.defaultValue;
            }
            alert(text);          
        }
    }
}