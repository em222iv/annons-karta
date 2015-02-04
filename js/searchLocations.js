/**
 * Created by erikmagnusson on 17/12/14.
 */
//takes searchRequest info as parameter
var search;
var cat ="";
var reg;
var content = document.getElementById("info-container");
function searchLocations(data,searchResult,region,category) {

    //keep result if search is the same as previous
    //else save new search to localstorage
    if(searchResult == null){
        alert('Du måste ange en sökning');
        return
    }
    if(data == '{"SearchResult":{"@currentPage":"","@pages":""}}'){

        content.innerHTML = '<div class="popover fade right in" role="tooltip" id="popover686512" style="top: 26px; left: 237.015625px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Information</h3><div class="popover-content">'+'Din sökning av inga resultat.<br><br>Antingen finns det inga artiklar till försäljning eller så bör din sökning ses över'+'</div></div>'

    }
    if(search == searchResult && cat == category && reg == region){
        return;
    }else {


        var json = $.parseJSON(data);
        localStorage.removeItem("previousSearch");
        localStorage.setItem("previousSearch", JSON.stringify(json));
        json = $.parseJSON(localStorage.getItem("previousSearch"));

    }
    search = searchResult;
    cat = category;
    reg = region;

    //array to filter out region who has articles avaible
    var filteredLocations = [];
    //filtering regions from search result
    if($(json.SearchResult.Node).length <= 1){
        alert('Din sökning gav inga resultat');
        return;
    }
    for (var i = 0; i < json.SearchResult.Node.length; i++) {

        var locations = json.SearchResult.Node.map(function(location) {
            return location['Location'];
        });

        var indexValue = $.inArray(locations[i],locations);

        if(indexValue == i && locations[i] != null){
            filteredLocations.push(locations[i]);
        }
    }

    localStorage.removeItem("filtered");
    localStorage.setItem("filtered", JSON.stringify(filteredLocations));
    codeAddress(json);
}

