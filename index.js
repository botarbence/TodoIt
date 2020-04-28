$("span").css("fontSize", "4.5rem");



var itemNumber = 0;
var itemString =[];

$(".inputtext").on("input", ()=>{
  var j = $(".inputtext").val();
  if (j.length<11) {
  $("label").text(11-j.length + " left");
  } else ($("label").text("0 left"));

});


$(".inputbutton").on("click", ()=>{
  if ($(".inputtext").val()!=="") {
    itemString.push($(".inputtext").val());
    $(".list")
      .append($("<div>").addClass("itembox listitem" + (itemNumber +1))
        .append(
          [$("<div>").text($(".inputtext").val()).addClass("textbox")],
          [$("<i>").addClass("fas fa-trash deletebutton btn")],
          [$("<i>").addClass("fas fa-check-square donebutton btn")])
          );
    
    itemNumber++;
 
    $(".donebutton").last().on("click",(event)=>{
      $(event.target).closest(".itembox").children(".textbox").toggleClass("doneitem");
      $(event.target).closest(".itembox").children(".btn").toggleClass("donebtn");
    });

    $(".deletebutton").last().on("click", (event)=>{
      $(event.target).closest("div").remove();
    });
  
    
    $(".inputtext").val("");
  }
});



