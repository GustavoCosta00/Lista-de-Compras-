let inputText = document.getElementById("inputText")
let btnSend = document.getElementById("inputBtn")
let addNewformTask = []
let id = 0

btnSend.addEventListener("click", addNewTask)

function addNewTask(){
    
    // CRIANDO NOVA TASK COM VALORES DINÂMICOS
    let formTask = {
        id : id ++,
        title : inputText.value,
    }

    addNewformTask.push(formTask)
    console.log(addNewformTask)

    // VERIFICAÇÃO DE CONTEÚDO
    // if(formTask.title == ''){
    //     console.log("vazio")
    // }

    // CRIANDO O BLOCO DE CÓDIGO DA NOVA TASK
    let taskDiv = document.createElement("div")
    taskDiv.className = 'task'

    var titleElement = document.createElement('h3');
    titleElement.className = 'titleText';
    titleElement.textContent = formTask.title;

    var btnsDiv = document.createElement('div');
    btnsDiv.id = 'btns';

    

    var excludeDiv = document.createElement('div');
    excludeDiv.id = 'exclude';
    var excludeIcon = document.createElement('i');
    excludeIcon.className = 'fa-solid fa-x';
    excludeDiv.appendChild(excludeIcon);

    
    btnsDiv.appendChild(excludeDiv);

    taskDiv.appendChild(titleElement);
    taskDiv.appendChild(btnsDiv);

    // EXCLUINDO UMA TASK
    excludeDiv.addEventListener("click",()=>{
        let element = formTask.id
        addNewformTask.pop(element)
        document.body.removeChild(taskDiv)
    })


    document.body.appendChild(taskDiv);
}