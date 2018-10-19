function whichTrack(score) {
  var track = score/5;

  if (track < 1.5) {
    return {
      title: 'CSS/Design',
      summary: 'Based on these results...',
      image: 'imgs/css.jpg'}
    }
  else if (track < 2.4) {
    return {
      title: 'Java/Android',
      summary: 'Based on these results...',
      image: 'imgs/java.jpg'}
    }
  return {
    title: 'C#/.Net',
    summary: 'Based on these results...',
    image: 'imgs/c-sharp.jpg'
  }
}


$(function(){
  $("#start").click(function(){
    $("#q1").addClass("is-active");
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

    // console.log(whichTrack(tally));
    $(".results #image").attr("src",whichTrack(tally).image);
    $(".results #title").text(whichTrack(tally).title);
    $(".results #summary").text(whichTrack(tally).summary);
    $(".results").show();


  })

  $("#restart").click(function(){
    $("input:radio:checked").prop("checked", false);
    $(".is-active").removeClass("is-active");
    $(".quiz").hide();
    $(".results").hide();
    $("#submit").hide();
    $("#start").show();
  })


});


// reset all selections $("input:radio:checked").prop("checked", false)
