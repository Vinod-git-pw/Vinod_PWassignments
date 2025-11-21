function launchBrowser(browserName){

    if (browserName==="Chrome"){
        console.log("Browser name is", browserName);
        
    }
    else {
        console.log("Invalid Browser");
    }
}

launchBrowser("chrome");


function runTests(testType) {

    switch (testType) {
        case "Sanity":
            console.log("Sanity Testing");
            break;
        case "Regression":
            console.log("Regression Testing");
            break;
        case "Integration":
            console.log("Integration Testing");
            break;
        default:
            console.log("Smoke Testing");
            break;
    }

}

runTests("anity");