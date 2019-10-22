function mathsSums(string){
    var newArray = string.split(" ")
    console.log(newArray)
    if(newArray[1]== '+'){
        return parseInt(newArray[0]) + parseInt(newArray[2])
    }
    else if(newArray[1] == "-"){
        return parseInt(newArray[0]) - parseInt(newArray[2])
    } else if (newArray[1]=='x'){
        return parseInt(newArray[0]) * parseInt(newArray[2])
    } else if (newArray[1]=='/'){
        return parseInt(newArray[0]) / parseInt(newArray[2])
    }
}