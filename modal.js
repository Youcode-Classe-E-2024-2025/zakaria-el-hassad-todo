// ajout et l'affichage de task
const modal = document.getElementById("addModal");
const modal1 = document.getElementById("addModal1");
const roturn = document.getElementById("rotorn");
const addForm = document.getElementById("task-modal");
const moltiplrModal = document.getElementById("moltiplrModal");
const titre = document.getElementById("titre");
const date = document.getElementById("date");
const statut = document.getElementById("statut");
const priorite = document.getElementById("priorite");
const description = document.getElementById("description");
// m
const titre1 = document.getElementById("titre1");
const date1 = document.getElementById("date1");
const statut1 = document.getElementById("statut1");
const priorite1 = document.getElementById("priorite1");
const description1 = document.getElementById("description1");
// 
const todo = document.getElementById("todo");
const doing = document.getElementById("doing");
const done = document.getElementById("done");

//conteurs 
let conteur_todo = document.getElementById("conteur-todo");
let C_todo = 0;
let conteur_doing = document.getElementById("conteur-doing");
let C_doing = 0;
let conteur_done = document.getElementById("conteur-done");
let C_done = 0;


function toggleModal() {
    modal.classList.remove("hidden");
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);

}

function rutornpage() {
    modal.classList.add("hidden");
}

function toggleModal1() {
    modal1.classList.remove("hidden");
    setTimeout(() => {
        modal1.classList.add("show");
    }, 10);

}

function rutornpage1() {
    modal1.classList.add("hidden");
}

let datatask = [];


addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newtask = {
        titre: titre.value,
        date: date.value,
        description: description.value,
        statut: statut.value,
        priorite: priorite.value,
        
    }
    // localStorage.setItem(newtask.titre, JSON.stringify(newtask));
    // let num = datatask.length;

    // console.log(localStorage.getItem());
    if (newtask.titre === "") {
        alert("entre le titre");
    } else if (newtask.date === "") {
        alert("entre la date");
    } else if (newtask.description === "") {
        alert("entre la description");
    }else{
    cleartask();


    const taskElement = document.createElement("div");

    taskElement.classList.add("flex", "flex-wrap", "justify-center", "gap-5", "p-4", "border", "border-l-8", "p-2", "rounded-3xl", "w-[100%]", "my-1");

    if (newtask.priorite === "p1") {
        taskElement.classList.add("border-red-700");
    } else if (newtask.priorite === "p2") {
        taskElement.classList.add("border-orange-400");
    } else if (newtask.priorite === "p2") {
        taskElement.classList.add("border-green-700");
    }
    

    taskElement.innerHTML = `
                <div class="col-span-1 border-4 border-black hover:border-blue-300 px-8 py-2 rounded-3xl my-2">
                    <p>
                        <span>Titre :</span>
                        <span class="spanTitre">${newtask.titre}</span>
                    </p>
                    <p>
                        <span>Date :</span>
                        <span  class="spanDate">${newtask.date}</span>
                    </p>
                </div>
                <div class="grid grid-cols-1">
                    <button onClick="deletePost(this)" type="button" class="text-white bg-red-700 hover:bg-red-400 rounded-3xl border border-x-4 border-red-700 hover:border-red-400 mb-2"><img src="../img/poubelle.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
                    <button onClick="editPost(this)" type="button" class="text-white bg-green-700 hover:bg-green-400 rounded-3xl border border-x-4 border-green-700 hover:border-green-400 "><img src="../img/editer.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
                </div>
                `

    if (newtask.statut === "todo") {
        todo.appendChild(taskElement);
        C_todo++;
        conteur_todo.innerHTML = C_todo;
    } else if (newtask.statut === "doing") {
        doing.appendChild(taskElement);
        C_doing++;
        conteur_doing.innerText = C_doing;
    } else if (newtask.statut === "done") {
        done.appendChild(taskElement);
        C_done++;
        conteur_done.innerText = C_done;
    }

    
    modal.classList.add("hidden"); 
}

});


// add moltiple model


moltiplrModal.addEventListener("submit", (event) => {
    event.preventDefault();
    let newtask = {
        titre1: titre1.value,
        date1: date1.value,
        description1: description1.value,
        statut1: statut1.value,
        priorite1: priorite1.value,
        
    }
    // localStorage.setItem(newtask.titre, JSON.stringify(newtask));
    // let num = datatask.length;

    // console.log(localStorage.getItem());
    if (newtask.titre1 === "") {
        alert("entre le titre");
    } else if (newtask.date1 === "") {
        alert("entre la date");
    } else if (newtask.description1 === "") {
        alert("entre la description");
    }else{
    cleartask1();


    const taskElement1 = document.createElement("div");

    taskElement1.classList.add("flex", "flex-wrap", "justify-center", "gap-5", "p-4", "border", "border-l-8", "p-2", "rounded-3xl", "w-[100%]", "my-1");

    if (newtask.priorite1 === "p1") {
        taskElement1.classList.add("border-red-700");
    } else if (newtask.priorite1 === "p2") {
        taskElement1.classList.add("border-orange-400");
    } else if (newtask.priorite1 === "p2") {
        taskElement1.classList.add("border-green-700");
    }

    taskElement1.innerHTML = `
                <div class="col-span-1 border-4 border-black hover:border-blue-300 px-8 py-2 rounded-3xl my-2 ">
                    <p>
                        <span>Titre :</span>
                        <span class="spanTitre">${newtask.titre1}</span>
                    </p>
                    <p>
                        <span>Date :</span>
                        <span  class="spanDate">${newtask.date1}</span>
                    </p>
                </div>
                <div class="grid grid-cols-1">
                    <button onClick="deletePost(this)" type="button" class="text-white bg-red-700 hover:bg-red-400 rounded-3xl border border-x-4 border-red-700 hover:border-red-400 mb-2"><img src="../img/poubelle.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
                    <button onClick="editPost(this)" type="button" class="text-white bg-green-700 hover:bg-green-400 rounded-3xl border border-x-4 border-green-700 hover:border-green-400 "><img src="../img/editer.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
                </div>
                `
    if (newtask.statut1 === "todo") {
        todo.appendChild(taskElement1);
        C_todo++;
        conteur_todo.innerHTML = C_todo;
    } else if (newtask.statut1 === "doing") {
        doing.appendChild(taskElement1);
        C_doing++;
        conteur_doing.innerText = C_doing;
    } else if (newtask.statut1 === "done") {
        done.appendChild(taskElement1);
        C_done++;
        conteur_done.innerText = C_done;
    }
    moltiplrModal.reset();
    moltiplrModal.classList.add("hidden"); 
    modal1.classList.add("hidden"); 

}

});



// clear one task

function cleartask(){
    titre.value = '' ;
    date.value = '';
    description.value = '';
}

// clear multiple task
function cleartask1(){
    titre1.value = '' ;
    date1.value = '';
    description1.value = '';
}


// delet task

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

// edit task
let editPost = (e) => {
    const edit = e.parentElement.parentElement;
    const titre = edit.querySelector(".spanTitre").innerText;
    const date = edit.querySelector(".spanDate").innerText;
    e.parentElement.parentElement.remove();

    document.getElementById("titre").value = titre;
    document.getElementById("date").value = date;
    document.getElementById("description").value = description;

    toggleModal();
};



// function getTasks() {
//     let tasks = localStorage.getItem()
// }


// function allStorage() {

//     var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while ( i-- ) {
//         values.push( JSON.parse(localStorage.getItem(keys[i])) );
//     }

//     return values;
// }


// console.log(allStorage()[0].titre);










