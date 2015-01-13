/**
 * Created by erikmagnusson on 13/01/15.
 */

function renderBrowsList() {
    var listdiv = document.getElementById('browsList');
    console.log(listdiv);
    var div = document.createElement('div');
    div.class = 'form-group text-center';
    var browsList  = localStorage.getItem("browsList");
    console.log(browsList);
    $( div ).append( browsList );

    $( listdiv ).append( div );
    console.log(listdiv);
}

$("#cleanBrowseHistory").click(function(e) {

});

window.addEventListener(window,'load', renderBrowsList())