/**
 * Created by erikmagnusson on 16/12/14.
 */
var content = document.getElementById("info-container");
//funtionality for interatacing. on doubleclick, show menu, on dragging, do nothing
var isDragging = false;
$("#map-canvas")
.mousedown(function() {
    $(window).mousemove(function() {
        isDragging = true;
        $(window).unbind("mousemove");

    });
})
.mouseup(function() {
    var wasDragging = isDragging;
    isDragging = false;
    $(window).unbind("mousemove");
    if (!wasDragging) { //was clicking
        content.innerHTML = "";
        //do nothing
    }
}).on("dblclick", function(e){
        $("#wrapper").toggleClass("toggled");
        content.innerHTML = "";
    //toggle on double-click
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    content.innerHTML = "";
});
$("#info-popup").click(function(e) {
    content.innerHTML = '<div class="popover fade right in" role="tooltip" id="popover686512" style="top: 26px; left: 237.015625px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Information</h3><div class="popover-content">' +'För att använda annons-kartan måste du alltid veta vart du vill söka. Välj en Kategori och ett Län och skriv sedan in vad du vill hitta.<br><br> Den senaste artikeln du tittat på kommer alltid att sparas i din meny. Denna kan även ses i ett offline-läge'+'</div></div>'
});
$('.collapse').collapse();


