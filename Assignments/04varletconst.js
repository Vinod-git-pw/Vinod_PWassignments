
const browserVersion="Chrome";

function getBrowserVersion(browserVersion){

    if (browserVersion=="Chrome"){
        var browserVersion = "new browser value using var";  
         console.log("Inside Block for var :",browserVersion);
    }
  console.log("Outside Block for var:",browserVersion);
}

getBrowserVersion(browserVersion); 
console.log("Outside function for var:",browserVersion); 


function getBrowserVersion1(browserVersion) {

    if (browserVersion == "Chrome") {
        let browserVersion = "new browser value using let";
        console.log("Inside Block for let:", browserVersion);
    }
    console.log("Outside Block for let:", browserVersion);
}
    getBrowserVersion1(browserVersion);
    console.log("Outside function for let:", browserVersion);

