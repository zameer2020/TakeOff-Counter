let stateValue=document.getElementById("status");
console.log(stateValue);

let saved=document.getElementById("prev-e");
console.log(saved);

let count=0;
function increment(){
    count+=1;
    stateValue.textContent=count;

}

function save(){
    let countStr= count+" - ";
    saved.textContent+=countStr;
stateValue.textContent=0;
count=0;
}