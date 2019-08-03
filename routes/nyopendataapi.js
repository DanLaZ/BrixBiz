var url = "https://data.cityofnewyork.us/resource/p2mh-mrfv.json";


$.ajax({
    url: "https://data.cityofnewyork.us/resource/p2mh-mrfv.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});