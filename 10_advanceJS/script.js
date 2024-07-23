// XML HTTPREQUEST is used to basically send or recieve data to/from the server.

const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();                          // This is XML HTTP-REQUEST object declaration.

xhr.open('GET', requestUrl)                                // open() -> used to initialize the object before sending it to the server.



xhr.onreadystatechange = function(){                       // readyState -> display every state 
 console.log(xhr.readyState);
 if(xhr.readyState === 4)
 {
    //const data = this.responseText
    //const data = JSON.parse(this.responseText)              // Create the string data to JSON 
    //console.log(data)
    //console.log(typeof data)                              // typeof -> string b/c data comes in string format
    //console.log(data.followers)                                  // EARLIER -> this will display undefined

 }
}



xhr.send()                                                 // send() -> send the data to the server