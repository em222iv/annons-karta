/**
 * Created by erikmagnusson on 02/02/15.
 */
setInterval(function(){
    connectionStatus();
}, 5000);
function connectionStatus() {
    if(navigator.onLine == false){
        $("#searchInput").attr("placeholder", "Du är offline");
        $("#searchButton").attr("disabled", "disabled");
        return false;
    }else {
        $("#searchButton").removeAttr("disabled");
        return true;
    }
}