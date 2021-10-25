let input = document.getElementById("input-main");
let button = document.getElementById("btn-add");
let tasks = document.getElementById("name-tasks-id");
let fullList = document.getElementById("tasks");
let arryDeleteTasks = [];
reloadTasks()


function showTasks() {
    let newList = ""

    arryDeleteTasks.forEach((tasks, index) => {
    
        
        newList = newList + `<li class="item-tasks ${tasks.completed == true ? 'concluded' : ""}">
                        <button class="btn-done" onclick="concludeTasks(${index})">
                            <i class="fa fa-rocket"></i>
                        </button>
        
                        <p class="name-tasks ${tasks.completed == true ? 'concluded' : ""}" id="name-tasks-id">${tasks.tasks}</p>

                        <button class="btn-delete" onclick="deleteTasks(${index})">
                            <i class="fa fa-trash"></i>
                        </button>
        
                </li>`
    })

    fullList.innerHTML = newList;

    localStorage.setItem("lista", JSON.stringify(arryDeleteTasks))
    console.log(showTasks)
}

function deleteTasks(index) {
    arryDeleteTasks.splice(index, 1)

    showTasks()
}


function addTasks() {
    arryDeleteTasks.push({
        tasks: input.value,
        concluida: false
    })

    
     
    showTasks() 
}


function concludeTasks(index){
    arryDeleteTasks[index].completed = !arryDeleteTasks[index].completed 

    showTasks() 
}

function reloadTasks() {
    let minhasTarefas = localStorage.getItem("lista")

    arryDeleteTasks = JSON.parse(minhasTarefas)

    showTasks()
}

button.addEventListener("click", addTasks);