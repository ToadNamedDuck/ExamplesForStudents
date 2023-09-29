const array1 = [undefined, undefined, undefined]
const array2 = [undefined, undefined, undefined]

function inputChangeHandler(e){
    e.preventDefault();
    switch(e.target.id){
        case "array1-0":{
            array1[0] = e.target.value
            break
        }
        case "array1-1":{
            array1[1] = e.target.value
            break
        }
        case "array1-2":{
            array1[2] = e.target.value
            break
        }
        case "array2-0":{
            array2[0] = e.target.value
            break
        }
        case "array2-1":{
            array2[1] = e.target.value
            break
        }
        case "array2-2":{
            array2[2] = e.target.value
            break
        }
    }
}

function buttonOnClick(e){
    e.preventDefault();
    let selectedIndex = parseInt(document.getElementById("indexSelector").value)
    document.getElementById("output").innerHTML = `<p> ${array2[selectedIndex]} makes $${array1[selectedIndex]} a year.</p>
    <p><b>Both</b> elements are the same position in their respected arrays, and using the same variable, this sentence was generate with data in the <b>SAME POSITION</b>.</p>
    <p>We can accomplish this by storing the desired index into a <b>variable</b>. Each array is a variable as well, so we can simply get the data in the same position by calling each one, like "<b>nameArray[variable]</b>" and "<b>salaryArray[variable]</b> and directly using the returned values in our code.`

}

document.addEventListener("change", (e) => {
    inputChangeHandler(e)
})

document.addEventListener("click", (e) => {
    if(e.target.id === "generateResponse"){
        buttonOnClick(e)
    }
})