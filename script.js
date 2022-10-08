function GenerateTable(){
    let result = ""
    let num = +document.querySelector("#num").value
    let numGenTo = +document.querySelector("#numGenTo").value
    console.log("num : ",num)
    console.log("numGenTo : ",numGenTo)
    for (let i = 0; i < numGenTo ; i++) {
         result = `${result} <br> ${num} x ${i+1} = ${num * (i+1)}`
         console.log(`${num} x ${i+1} = ${num*(i+1)}`)
         document.querySelector("#result").innerHTML=result;
    }

}