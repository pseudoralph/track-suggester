$(function(){
  $("#show-first").click(function(){
    $("#q1").slideDown();
  });

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
      debugger

    })

  })


});
