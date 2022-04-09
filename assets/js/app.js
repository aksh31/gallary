let cl = console.log;

const change = document.getElementById("change");
const allDivs = Array.from(document.querySelectorAll(".all"));
cl(allDivs);



const onChnageHandler = eve =>{
    let getDiv = `.${eve.target.value}`;
    cl(getDiv);
    allDivs.forEach(ele =>{
        ele.classList.add("d-none");
    })
    let selectedDiv = Array.from(document.querySelectorAll(getDiv));
    selectedDiv.forEach(div =>{
        div.classList.remove("d-none");
    })
}


change.addEventListener("change", onChnageHandler);