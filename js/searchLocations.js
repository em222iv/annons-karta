/**
 * Created by erikmagnusson on 17/12/14.
 */
//takes searchRequest info as parameter
var search;
var cat ="";
var reg;
function searchLocations(data,searchResult,region,category) {
    var json;

    //keep result if search is the same as previous
    //else save new search to localstorage
    console.log(category);
    if(searchResult == null){
        alert('Du måste ange en sökning');
        return
    }
    if(category == null){
        alert('Välj Kategori');
        return
    }
    if(region == null){
        alert('Välj Län');
        return;
    }
    if(search == searchResult && cat == category && reg == region){
        return;
    }else {
        json = $.parseJSON(data);
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

