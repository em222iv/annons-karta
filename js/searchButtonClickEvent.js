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
    console.log('1',category,region);
    if(category == null){
        category = 11
    }
    if(region == null){
        region = 0
    }

    if ($('.bar').is('.ui-draggable-dragging')) {
        return false;
    }

    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    var token = $("#token").val();
    console.log("Token in HTML: " +token);
    console.log('2');
    $.post(
        "APISearch.php",
        {
            name: seachquery,
            category : category,
            region : region,
            token:token
        },
        function(data) {
            console.log('3');
            console.log(data);
            //sends API request answer to extract info for google maps
            searchLocations(data,seachquery,region,category);
        }
    );
});

