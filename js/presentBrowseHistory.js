/**
 * Created by erikmagnusson on 13/01/15.
 */

function renderBrowsList() {
    var div = "";
    div = document.createElement('div');
    div.class = 'form-group text-center';
    var browsList  = localStorage.getItem("browsList");
    console.log(div,browsList)
    div.innerHTML=browsList;
    document.getElementById("browsList").appendChild(div);
}

window.addEventListener(window,'load', renderBrowsList())