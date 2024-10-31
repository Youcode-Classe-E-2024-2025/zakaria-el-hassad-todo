// ajout et l'affichage de task
const modal = document.getElementById("addModal");
const roturn = document.getElementById("rotorn");


function toggleModal() {
        modal.classList.remove("hidden");
        setTimeout(() => {
            modal.classList.add("show");
        }, 10); 
    
}

function rutornpage() {
    modal.classList.add("hidden");    
}

// function addTask(){
//     if(document.querySelector("#titre").value ==''){
//         alert("enter titre");
//     }
//     else if (document.querySelector(document.querySelector()).value == ''){
//         alert("enter date");
//     }
//     else if (document.querySelector("#description").value=''){
//         alert("enter description");
//     }
//     else if (document.querySelector("#priorite").value=''){
//         alert("enter priorite");
//     }
//      else if (document.querySelector("#statut").value=''){
//             alert("enter statut");
//     }
// }

// add task
const titre = document.getElementById("titre");
const date = document.getElementById("date");
const statut=document.getElementById("statut");
const description = document.getElementById("description");


document.getElementById("add-task-btn").addEventListener("click",(e) => {
    e.preventDefault();
    if(titre.value === ""  || date.value === "" || statut.value === "" || description.value === ""){
        alert("entre les anformation");
    }
    else{
            const list = document.querySelector("#add-task");
            const row = document.createElement("div");
            row.innerHTML = `
            <div id="task" class="flex flex-wrap justify-center gap-5 border border-l-8 border-red-700  p-2 rounded-3xl w-[100%] my-1 ">
                <div class="col-span-1 border-2 border-black px-8 py-2 rounded-3xl my-2">
                    <p>
                        <span>Titre :</span>
                        <span>${titre.value}</span>
                    </p>
                    <p>
                        <span>Date :</span>
                        <span>${date.value}</span>
                    </p>
                </div>
                <div class="grid grid-cols-1">
                    <button type="button" class="text-white bg-red-700 hover:bg-red-400 rounded-3xl border border-x-4 border-red-700 hover:border-red-400 mb-2"><img src="../img/poubelle.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
                    <button type="button" class="text-white bg-green-700 hover:bg-green-400 rounded-3xl border border-x-4 border-green-700 hover:border-green-400 "><img src="../img/editer.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
                </div>
            </div>
            `
            list.appendChild(row);
            showAlert("task add ");
    }
})








