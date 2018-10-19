function whichTrack(score) {
  var track = score/5;

  if (track < 1.5) {
    return {
      title: 'CSS/Design',
      summary: "You've got an eye for design and creativity! Persuing a track in CSS and design might be the right track for you. Often, this is the track persued by those who want to program on the web—specifically frontend UI.",
      image: 'imgs/css.jpg'}
    }
  else if (track < 2.4) {
    return {
      title: 'Java/Android',
      summary: "You're the type of the person who's in the know—and always on their phone. Persuing a track in Java, which powers the apps on the Android operating system, would be a great path for you to follow.",
      image: 'imgs/android.jpg'}
    }
  return {
    title: 'C#/.Net',
    summary: "You're a no-nonsense type of person. A track in C# and .Net would be best for you. But don't think you won't be having any fun. The .Net framework runs deep in the enterprise world—after all, it was built up by Microsoft.",
    image: 'imgs/c-sharp.jpg'
  }
}

$(function(){
  $("#start").click(function(){
    $("#q1").addClass("is-active");
    $(".quiz").slideDown();
    $("#q5 input:radio").change(function(){
      $("#q5 .progress-bar").attr("style","width: 100%");
      $(".is-active #submit").show();
    })
    $("#start").hide();
  })

  $("#next").click(function(){
    var present = $(".is-active").prop("id");
    var next = present[0]+(parseInt(present[1])+1);

    $(".is-active input:radio").change(function(){
      $("span.make-selection").hide();
    })

    if ($(".is-active input:radio:checked").length) {
      if (($(".question").length) > parseInt(present[1])){
        $("#"+present).removeClass("is-active");
        $("#"+next).addClass("is-active");
      }
    } else {
      $("span.make-selection").show();
    }
  })

  $("#prev").click(function(){
    var present = $(".is-active").prop("id");
    var prev = present[0]+(parseInt(present[1])-1);
    $("span.make-selection").hide();
    if (parseInt(present[1]-1)>0) {
      $("#"+present).removeClass("is-active");
      $("#"+prev).addClass("is-active");
    }
  })

  $("#submit").click(function(){
    var tally=0;

    $(".question").each(function(i) {
      var block = $(this).attr("id");
      if ($("#"+block+" input:radio:checked").length) {
        tally = tally + parseInt($("#"+block+" input:radio:checked").val())
      }

    })
    $("#submit").hide();

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
