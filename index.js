var itemNumber = 1;

 

$(".inputbutton").on("click", ()=>{
  if ($(".inputtext").val()!=="") {

    $(".list")
      .append($("<div>").addClass("itembox listitem" + itemNumber )
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
