// ajout et l'affichage de task
const modal = document.getElementById("addModal");
const roturn = document.getElementById("rotorn");
const addForm = document.getElementById("task-modal");
const todo = document.getElementById("todo");
const doing = document.getElementById("doing");
const done = document.getElementById("done");



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
// const titre = document.getElementById("titre");
// const date = document.getElementById("date");
// const statut=document.getElementById("statut");
// const description = document.getElementById("description");
// const todo = document.getElementById("todo");
// const doing = document.getElementById("doing");
// const done = document.getElementById("done");


// document.getElementById("add-task-btn").addEventListener("click",(e) => {
//     e.preventDefault();
    
//     const titre = document.getElementById("titre");
//     const date = document.getElementById("date");
//     const statut=document.getElementById("statut");
//     const description = document.getElementById("description");

//     if(titre.value === ""  || date.value === "" || statut.value === "" || description.value === ""){
//         alert("entre les anformation");
//     }
//     else{
//         const row = document.createElement("div");
//             row.innerHTML = `
//             <div id="task" class="flex flex-wrap justify-center gap-5 border border-l-8 border-red-700  p-2 rounded-3xl w-[100%] my-1 ">
//                 <div onclick="showFullText()" class="col-span-1 border-4 border-black hover:border-blue-300 px-8 py-2 rounded-3xl my-2">
//                     <p>
//                         <span>Titre :</span>
//                         <span id="myspan">${titre.value}</span>
//                     </p>
//                     <p>
//                         <span>Date :</span>
//                         <span>${date.value}</span>
//                     </p>
//                 </div>
//                 <div class="grid grid-cols-1">
//                     <button type="button" class="text-white bg-red-700 hover:bg-red-400 rounded-3xl border border-x-4 border-red-700 hover:border-red-400 mb-2"><img src="../img/poubelle.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
//                     <button type="button" class="text-white bg-green-700 hover:bg-green-400 rounded-3xl border border-x-4 border-green-700 hover:border-green-400 "><img src="../img/editer.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
//                 </div>
//             </div>
//             `
//     }
//     if (statut.value === "todo") {
//         todo.appendChild(row);
//     } else if (statut.value === "doing") {
//         doing.appendChild(row);
//     } else if (statut.value === "done") {
//         done.appendChild(row);
//     }
//     addmodel.reset();
//     addmodel.classList.add("hidden"); 
//     modal.classList.add("hidden"); 
// });


// const span = document.getElementById("myspan");
// const fullText = span.textContent;
// const shortText = fullText.slice(0, 5) + "...";
// span.textContent = shortText;
// function showFullText() {
//     span.textContent = fullText;
// }

// let toutModel = [];


// function ajout(toutModel){
//     todo.innerHTML="";
//     doing.innerHTML="";
//     dome.innerHTML="";
//     toutModel.forEach(enAjout => {
//         if(enAjout.statut =='todo'){
//              todo.innerHTML = `
//              <div id="task" class="flex flex-wrap justify-center gap-5 border border-l-8 border-red-700  p-2 rounded-3xl w-[100%] my-1 ">
//                  <div onclick="showFullText()" class="col-span-1 border-4 border-black hover:border-blue-300 px-8 py-2 rounded-3xl my-2">
//                      <p>
//                          <span>Titre :</span>
//                          <span id="myspan">${titre}</span>
//                      </p>
//                      <p>
//                          <span>Date :</span>
//                          <span>${date}</span>
//                      </p>
//                  </div>
//                  <div class="grid grid-cols-1">
//                      <button type="button" class="text-white bg-red-700 hover:bg-red-400 rounded-3xl border border-x-4 border-red-700 hover:border-red-400 mb-2"><img src="../img/poubelle.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
//                      <button type="button" class="text-white bg-green-700 hover:bg-green-400 rounded-3xl border border-x-4 border-green-700 hover:border-green-400 "><img src="../img/editer.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
//                  </div>
//                 <div>
//                     <button onclick="showFullText()" type="button" class="text-white bg-red-700 hover:bg-red-400 rounded-3xl border border-x-4 border-red-700 hover:border-red-400 mb-2"><img src="../img/poubelle.png" alt="" style="width: 15px; height: 15px; margin: 10px;"></button>
//                 </div>
//             </div>
//             `
//         }
//     })
        
//     }

// ajout(toutModel);
// document.getElementById('addModel').addEventListener('submit',function(event){
//     this.hidden.classList.add('hidden');
//     event.preventDefault();
//     const titre = document.getElementById('titre').value;
//     const date = document.getElementById('date').value;
//     const statut=document.getElementById('statut').value;
//     const description = document.getElementById('description').value;
//     const enAjout = {
//         titre: titre,
//         date: date,
//         description: description,
//         statut: statut,
//     };
//     toutModel.push(enAjout);
//     ajout(toutModel);
// });



addForm.addEventListener("submit", (event) => {
    event.preventDefault();
const titre = document.getElementById("titre").value;
const date = document.getElementById("date").value;
const statut=document.getElementById("statut").value;
const description = document.getElementById("description").value;

const taskElement = document.createElement("div");
taskElement.innerHTML = `
                        <div id="task" class="flex flex-wrap justify-center gap-5 border border-l-8 border-red-700  p-2 rounded-3xl w-[100%] my-1 ">
                <div onclick="showFullText()" class="col-span-1 border-4 border-black hover:border-blue-300 px-8 py-2 rounded-3xl my-2">
                    <p>
                        <span>Titre :</span>
                        <span id="myspan">${titre.value}</span>
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

                if (statut === "todo") {
                    todo.appendChild(taskElement);
                } else if (statut === "doing") {
                    doing.appendChild(taskElement);
                } else if (statut === "done") {
                    done.appendChild(taskElement);
                }
                addForm.reset();
                addForm.classList.add("hidden"); 
                modal.classList.add("hidden"); 
});








