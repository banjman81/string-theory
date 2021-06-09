function xify(str){
    let result = "";
    for(const s of str){
        result += "x";
    }
    return result
}

console.log(xify("hi there"))

function yellingChars(str){
    const val = "!"
    let result = "";
    for(const s of str){
        result += s
        result += val
    }
    return result
}

console.log(yellingChars("hello"))

function indexedChars(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        result += `${i}`
        result += str[i]
    }
    return result
}

console.log(indexedChars("hello"))

function numberedChars(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        result += `(${i+1})`
        result += str[i]
    }
    return result
}

console.log(numberedChars("hello"))

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

console.log(exclaim("This is. fine?"))

function repeatIt(str, n){
    let result =""
    for(let i=0; i<n; i++){
        result += str;
    }
    return result
}

console.log(repeatIt("there ",3))

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

console.log(turncate("this is the only way"))

function ciEmailify(str){
    let result = ""
    for(const s of str){
        if(s ===" "){
            result += "."
        }
        else{
            result += s
        }
    }
    result += "@codeimmesivers.com"
    return result
}

console.log(ciEmailify("Ban Man"))

function reverse(str){
    let result =""
    for(let i=str.length-1; i >=0; i--){
        result += str[i];
    }
    return result
}

console.log(reverse("hello there"))

function onlyVowels(str){
    let result = ""
    for(const s of str){
        if(s =="a" || s=="e" || s=='i' || s=="o" || s=="u"){
            result += s
        }
    }
    return result
}

console.log(onlyVowels("benjamin kehblut htoo"))

function crazyCase(str){
    let result = ""
    for(const s of str){
        if(result.length !==0 && result.length %2 !==0){
            result += s.toUpperCase();
        }
        else{
            result += s
        }
    }
    return result
}

console.log(crazyCase("this is the way"))

function titleCase(str){
    let result = ""
    for(let i=0; i< str.length; i++){
        if(i ==0 || str[i-1] ==" "){
            result += str[i].toUpperCase()
        }
        else{
            result += str[i]
        }
    }
    return result
}

console.log(titleCase("this is sparta!!"))

function camelCase(str){
    let result = ""
    for(let i=0; i< str.length; i++){
        const s = str[i]
        if(s == " "){
            continue
        }
        else if(str[i-1]==" "){
            result += s.toUpperCase()
        }
        else{
            result += s
        }
    }
    return result
}

console.log(camelCase("its over anakin"))

function crazyCase2ReturnOfCrazyCase(str){
    let result = ""
    let counter = 0;
    for(const s of str){
        if(s == " "){
            result += " "
        }
        else if(counter !==0 && counter %2 !==0){
            result += s.toUpperCase()
            counter++
        }
        else{
            result += s
            counter++
        }
    }
    return result
}

console.log(crazyCase2ReturnOfCrazyCase("its over anakin i have the high ground"))