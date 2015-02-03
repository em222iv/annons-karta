/**
 * Created by erikmagnusson on 02/02/15.
 */
setInterval(function(){
    connectionStatus();
}, 5000);
var content = document.getElementById("popover-content");
function connectionStatus() {
    if(navigator.onLine == false){
        content.innerHTML = '<div class="popover fade right in" role="tooltip" id="popover686512" style="top: 26px; left: 237.015625px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Information</h3><div class="popover-content">'+'Du verkar vara offline. För att kunna söka på nya artiklar måste du ha en fungerande internetuppkoppling.'+'</div></div>';
        $("#searchInput").attr("placeholder", "Du är offline");
        $("#searchButton").attr("disabled", "disabled");
        return false;
    }else {

        $("#searchInput").attr("placeholder", "");
        $("#searchButton").removeAttr("disabled");
        return true;
    }
}