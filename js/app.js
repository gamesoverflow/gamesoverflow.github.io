

function redirectToDestinagetion() {
    var redirectUrl = getUrlVars()["url"]
    const httpsPrefix = "https://"
    const httpPrefix = "http://"

    if(redirectUrl !== undefined){
        redirectUrl = atob(redirectUrl)
        if (!redirectUrl.includes(httpsPrefix) && !redirectUrl.includes(httpPrefix)){
            redirectUrl = httpPrefix + redirectUrl
            console.log(finalRedirUrl)
        }
        window.location = redirectUrl
    }
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
