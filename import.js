
let countEl=document.getElementById("count1")
let saveEl=document.getElementById("save1")
let count=0
function increment(){
     count+=1
     countEl.innerText=count
}
function decrement(){
     count-=1
     countEl.innerText=count
}
function save(){
      saveEl.innerText+=count + "-"
      countEl.innerText=0
      count=0
}
