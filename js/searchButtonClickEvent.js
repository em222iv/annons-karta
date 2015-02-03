/**
 * Created by erikmagnusson on 12/01/15.
 */
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $( "#searchButton" ).click();
        return false;
    }
});
$("#searchButton").click(function(e) {

    var seachquery = $("#searchInput").val();

    //when searchbutton is clicked get value and filtering choices, save locally, toggle menu, post for php to make API request
    document.getElementById("info-container").innerHTML ="";
    var category = localStorage.getItem("chosenCategory");
    var region = localStorage.getItem("chosenRegion");
    if(category == null || category == undefined || category == 'category-dropdown'){
        content.innerHTML = '<div class="popover fade right in" role="tooltip" id="popover686512" style="top: 26px; left: 237.015625px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Information</h3><div class="popover-content">'+'Du måste välja en Kategori'+'</div></div>'

    }
    if(region == null || region == undefined || region == 'region-dropdown'){
        content.innerHTML = '<div class="popover fade right in" role="tooltip" id="popover686512" style="top: 26px; left: 237.015625px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Information</h3><div class="popover-content">'+'Du måste välja ett Län'+'</div></div>'
        return;
    }

    if ($('.bar').is('.ui-draggable-dragging')) {
        return false;
    }
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    var token = $("#token").val();
    $.post(
        "APISearch.php",
        {
            name: seachquery,
            category : category,
            region : region,
            token:token
        },
        function(data) {
            //sends API request answer to extract info for google maps

            if(data.empty || data == 'Token does not match'){
                content.innerHTML = '<div class="popover fade right in" role="tooltip" id="popover686512" style="top: 26px; left: 237.015625px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Information</h3><div class="popover-content">'+'Det har uppstått ett fel. Var god ladda om sidan och försök igen'+'</div></div>'
                return;
            }
            searchLocations(data,seachquery,region,category);
        }
    );
});

