/**
 * Created by erikmagnusson on 13/01/15.
 */

function renderBrowsList() {
    div = document.createElement('div');
    div.class = 'form-group text-center';
    var browsList  = localStorage.getItem("browsList");
    if(browsList != null){

        browsList = browsList.slice(9,10000);
        div.innerHTML=browsList;
        document.getElementById("browsList").appendChild(div);
    }
}

window.addEventListener(window,'load', renderBrowsList())