$(document).ready(function(){
   welcome();
});

function call_back(data) {
  $("#content").append(data);
  log("Success: Ali is happy");
}

function error_back(data, err_msg, ex) {
  log("Error: Ali is sad because: " + err_msg);
}

log = function(message) {
  console.log("" + new Date() + " : " + message);
}

welcome = function() {
  log("starting welcome");
  $.ajax(
          {
            url: "test.js",
            success: call_back,
            error: error_back
          }
  );
  log("ending welcome");
}

