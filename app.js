var timers = $(".timer");
//get all the timers
timers.each(function() {
    var time = $(this).attr("data-interval");
    var obj = $(this);
    //set the visible time from data-interval
    $(".mt-5", this).html(time);

    //start the timers
    var cd = setInterval(function(){
        time = time - timerInterval;
        if(time <= 0){
            //clear the countdown
            $(".mt-5", obj).html("Time up!");
            clearInterval(cd);
        }else{
            $(".mt-5", obj).html(time);
        }
    },(timerInterval*1000));
});

