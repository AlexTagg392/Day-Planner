//Store messages locally and display immediately
memo = localStorage.getItem("message");
console.log(memo);
var timeCode = $("#time").text();
console.log(timeCode);

//Display date and time in the header
interval = setInterval(function () {
let dateTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(dateTime);

//$("#now").text(dateTime);
    $("#now").text(dateTime);
  }, 1000);

//Change textarea to gray once time has passed
//Input ans save memos
$("#comment").text(localStorage.getItem("message"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");

    // Here we grab the text from the input box
    var memo = $("#comment").val();
    console.log(memo);
    localStorage.setItem("message", memo);
   
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});