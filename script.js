function GenerateTable(){
    let result = ""
    let number = +document.querySelector("#number").value
    let numberUpTo = +document.querySelector("#numberUpTo").value
    console.log("number : ",number)
    console.log("numberUpto : ",numberUpTo)
    for (let i = 0; i < numberUpTo ; i++) {
         result = `${result} <br> ${number} x ${i+1} = ${number * (i+1)}`
         console.log(`${number} x ${i+1} = ${number*(i+1)}`)
         document.querySelector("#result").innerHTML=result;
    }

}