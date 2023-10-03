function generationButtonClick(e){
    e.preventDefault();
    let codeToPutInBlock = document.getElementById("dynamicCodeTypingBlock").value;
    document.getElementById("output-dynamic").innerHTML = codeToPutInBlock;
}

document.addEventListener("click", e => {
    if(e.target.id === "generateDynamic"){
        generationButtonClick(e)
    }
})