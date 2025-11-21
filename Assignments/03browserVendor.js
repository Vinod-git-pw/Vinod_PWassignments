function checkBrowserVendor(browser)
{

switch (browser) {
   
    case "Firefox":
        console.log("Input value is:",browser ,"->Mozilla Firefox");
        break;
        
    case "Chrome":
        console.log("Input value is:",browser ,"->Google Chrome")
        break;

    case "Edge":
        console.log("Input value is:",browser ,"->MS Edge")
        break;

    case "Safari":
        console.log("Input value is:",browser ,"->Safari");
        break;

    default:
        console.log("Input value is:",browser ,"-> unknown Browser or check your input case sensitivity ");
        break;
}
}

checkBrowserVendor("Chrome");