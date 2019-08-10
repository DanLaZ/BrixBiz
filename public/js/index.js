// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/businesses",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

app.use(express.static('views/picsproject2')); 
// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var businessForm = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }
  // $.post('/formsubmit')
  // API.saveExample(example).then(function() {
  //   refreshExamples();
  // });

  $.post( '/formsubmit', function(data) {
    $( "#submit" ).html(data);
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);







$("#search").on("click", getLocation);
// Getting user's geolocation
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
    console.log(navigator.geolocation)
  } else{
    alert("Your browser doesn't support Geolocation");
  }
}
//
function onGeoSuccess(event){

  var longitude = event.coords.longitude;
  var latitude = event.coords.latitude;
  console.log(latitude,longitude);
  return (latitude, longitude);
}
function onGeoError(event) {
  alert("Error code " + event.code + ". " + event.message);
}


// Display card for businesses to join brixbiz
// event listener for business submit form on addbus.handlebars
$("#submits").on("click", function(){
  event.preventDefault();
  var newBiz = {
    biz_name: $("#biz_name").val().trim(),
    biz_type: $("#biz_type").val().trim(),
    biz_address: $("#biz_address").val().trim(),
    biz_zip: $("#biz_zip").val().trim(),
    biz_email: $("#biz_email").val().trim(),
    biz_password: $("#biz_password").val().trim()
  }
  console.log(newBiz);

})