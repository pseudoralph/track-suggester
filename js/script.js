$(function(){

  $("#start").click(function(){
    $("#q1").addClass("is-active");
  })

  $("#next").click(function(){

    var present = $(".is-active").prop("id")
    next = present[0]+(parseInt(present[1])+1)

    $("#"+present).removeClass("is-active")
    $("#"+next).addClass("is-active")
  })

  $("#prev").click(function(){
    var present = $(".is-active").prop("id")
    prev = present[0]+(parseInt(present[1])-1)

    $("#"+present).removeClass("is-active")
    $("#"+prev).addClass("is-active")

  })




  $("#submit").click(function(){
    var tally=0;
    $(".question").each(function(i) {

      // checks all sections are completed on submit
      var block = $(this).attr("id");

      if ($("#"+block+" input:radio:checked").length) {
        console.log("question "+parseInt(i+1)+" reponse = "+ $("#"+block+" input:radio:checked").val());
        tally = tally + parseInt($("#"+block+" input:radio:checked").val())
      } else {
        console.log("student left question " +parseInt(i+1)+ " blank")
        return false
      }

      console.log(tally)

    })

  })


});
