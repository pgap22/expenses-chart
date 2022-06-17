let totalAmount = 0;

let daysGraph = document.querySelectorAll(".chart__graph");

for (let i = 0; i < daysGraph.length; i++) {
    const elementClicked = daysGraph[i];
    elementClicked.addEventListener("click", ()=>{
        for (let i = 0; i < daysGraph.length; i++) {
            const element = daysGraph[i];
            if(element != elementClicked){
                element.classList.remove("chart__graph--active")
                element.parentElement.setAttribute("data-checked", "no")
            }
            else{
                element.classList.toggle("chart__graph--active")
                element.classList.forEach(className => {
                    if(className == "chart__graph--active"){
                        element.parentElement.setAttribute("data-checked", "yes")
                    }
                    else{
                        element.parentElement.setAttribute("data-checked", "no")
                    }
                });
            }
        }
    })
}

async function getData (){
    let data  = await fetch("data.json");
    data = data.json();
    return data;
}

function setData(){
    getData().then(data =>{
        data.forEach((day,i) =>{
            totalAmount += day.amount;
            daysGraph[i].setAttribute("data-amount", "$"+day.amount)
            daysGraph[i].style.height = (100*day.amount)/52.36+"px"
        })
    })
}
setData();