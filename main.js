function xify(str){
    const x = "x"
    let result = "";
    for(let i=0; i<str.length; i++){
        result += x;
    }
    return result
}

// console.log(xify("hi there"))

function yellingChars(str){
    const val = "!"
    let result = "";
    for(const s of str){
        result += s
        result += val
    }
    return result
}

// console.log(yellingChars("hello"))

function indexedChars(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        result += `${i}`
        result += str[i]
    }
    return result
}

// console.log(indexedChars("hello"))

function numberedChars(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        result += `(${i+1})`
        result += str[i]
    }
    return result
}

// console.log(numberedChars("hello"))

function exclaim(str){
    let result =""
    for(let s of str){
        if(s == "?" || s == "."){
            result += "!"
        }
        else{
            result += s
        }
    }
    return result
}

// console.log(exclaim("This is. fine?"))

function repeatIt(str, n){
    let result =""
    for(let i=0; i<n; i++){
        result += str;
    }
    return result
}

// console.log(repeatIt("there ",3))

function turncate(str){
    let result =""
    for(const s of str){
        if(result.length < 15){
            result += s
        }
        else{
            result += "..."
            return result
        }
    }
    return result
}

// console.log(turncate("this is the only way"))