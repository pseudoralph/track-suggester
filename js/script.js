function whichTrack(score) {
  var track = score/5;

  if (track < 1.5) {return 'CSS/Design'}
  else if (track < 2.4) {return 'Java/Android'}
  return 'C#/.Net'
}


$(function(){
  $("#start").click(function(){
    $(".quiz").slideDown();
    $("#q5 input:radio").change(function(){
      $(".is-active #submit").show();
    })
    $("#start").hide();
  })

  $("#next").click(function(){
    var present = $(".is-active").prop("id");
    var next = present[0]+(parseInt(present[1])+1);

    $(".is-active input:radio").change(function(){
      $("p.make-selection").hide();
    })

    if ($(".is-active input:radio:checked").length) {
      if (($(".question").length) > parseInt(present[1])){
        $("#"+present).removeClass("is-active");
        $("#"+next).addClass("is-active");
      }
    } else {
      $("p.make-selection").show();
    }

  })

  $("#prev").click(function(){
    var present = $(".is-active").prop("id");
    var prev = present[0]+(parseInt(present[1])-1);

    if (parseInt(present[1]-1)>0) {
      $("#"+present).removeClass("is-active");
      $("#"+prev).addClass("is-active");
    }
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

    })

    console.log(whichTrack(tally));

  })


});


// reset all selections $("input:radio:checked").prop("checked", false)
