// Jquery
// URL https://www.dell.com/support/home/en-us

$(document).ready(function(){
    $("#divEnterpriseProductLinks").appendTo("#divResourceLinks");
    $("#divResourceLinks .container").css({"width":"50%", "height": "60vh", "display": "flex"});
    $("#divResourceLinks").css({"display": "flex", "flex-direction": "row"});
    $("#divResourceLinks .mb-4").removeClass("col-lg-3").addClass("col-lg-6 mt-3");
    $("#divEnterpriseProductLinks").css({"width":"50%"});
    $("#divEnterpriseProductLinks .container").css({"width":"100%"});
    $("#divEnterpriseProductLinks h3").css({"display" : "none"});
    $("#divEnterpriseProductLinks .mb-5").addClass("col-lg-12");
});