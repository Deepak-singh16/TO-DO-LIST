const inputbox= document.getElementById('input')
const listcontainer =document.getElementById('list')

function add(){
    if(inputbox.value==='')
    {
        alert('Please enter something')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
        inputbox.value=''
        saveData()
    }
    
}

listcontainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentNode.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}
function showTask(){
    list.innerHTML=localStorage.getItem("data")
}
showTask()