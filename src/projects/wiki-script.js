var main = function (){

  function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
        $("#results").html("<p class='no-results'>We are sorry, there was an error in retrieving the data.</p>");
    }
    return response;
  }
  
  function generateAndFillDivs(title, thumbnail, extract, index){

    var parent = document.getElementById("results");
    var div = document.createElement('div');

    var titleLink = '<a href= "https://en.wikipedia.org/wiki/'+ title.replace(/\s/g, "_") + '" >'+ title + '</a>';
    var newDiv = "<div><p class='result-title'>"+thumbnail+" "+titleLink+"</p>"+extract+"</div><br>";

    parent.appendChild(div);
    div.id = 'wikiresult'+index;
    div.className = "result-div";
    
    document.getElementById(div.id).innerHTML = newDiv;
        
   //if the result string is exactly the same as the search string, it is inserted at the top of the results list              
    if (title.toLowerCase()==searchText.toLowerCase()) { 
      parent.insertBefore(div, parent.firstChild);
    }       
  }

  function searchWikiWithJson(apiLink) {

    fetchJsonp(apiLink)
    .then(handleErrors)
    .then(response => response.json()).then( (data) => {
      
      if(data.query!= undefined) {
      
        data.query.pages.forEach(function(page, index){

          var title = page.title;
          
          var thumbnail; 
          if (page.hasOwnProperty('thumbnail')) {
            thumbnail = '<img src ="'+page.thumbnail.source+'" alt = "article thumbnail"/>' 
          } else {
            thumbnail = "";
          }
          
          var extract;
          if (page.hasOwnProperty('extract')) {
            extract = page.extract;
          } else {
            extract = "";
          }
         
          generateAndFillDivs(title, thumbnail, extract, index);
        })

      } else {
        $("#results").html("<p class='no-results'> Sorry, there are no Wikipedia entries with this term. </p>");
      }

    }).catch(error => {
      $("#results").html("<p class='no-results'>We are sorry, there was an error in retrieving the data.</p>");
      console.log(error); 
    });
  }

  document.forms["search"].onsubmit = function() {
    event.preventDefault();
    $("#results").html("");
    searchText = document.getElementById("wikisearch").value; 
    var apiLink = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageterms%7Cpageimages%7Cextracts&titles=&generator=prefixsearch&converttitles=1&formatversion=2&wbptcontinue=&wbptterms=&piprop=thumbnail&pithumbsize=50&pilimit=3&exchars=300&exlimit=4&exintro=1&explaintext=1&exsectionformat=plain&gpssearch="+searchText+"&gpsnamespace=0&gpslimit=10&callback=?"
    
    searchWikiWithJson(apiLink);
  }
};

$(document).ready(main)