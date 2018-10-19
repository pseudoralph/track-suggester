$(function(){
  $("#submit").click(function(){

    $(".question").each(function() {
      console.log($(this))


    })
    if ($("#q1 input:radio:checked").length) {
      console.log($("#q1 input:radio:checked").val())
    }

    // console.log($("input[name=resp1]:radio:checked").val())
  })


});
