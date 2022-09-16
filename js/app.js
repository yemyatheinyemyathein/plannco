$(document).ready(function () {

    // Start back to Top
    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000)
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    })

    // Start Header
    // Start nav

    // for bugger
    $(".navbuttons").click(function () {
        $(".navbuttons").toggleClass("crossxs")
    })

    // for nav
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if (getscrolltop >= 200) {
            $(".navbar").addClass("navmenus");
        } else {
            $(".navbar").removeClass("navmenus");
        }
    })

    // End nav

    // Start Properties 
    $('.propertylists').click(function(){
        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        // for filter
        let getattvalue = $(this).attr("data-filter");
        console.log(getattvalue);

        if( getattvalue === "all"){
            $('.filters').show("slide",500);
        }else{
            $(".filters").hide();

            $('.filters').not("."+getattvalue).hide("slide",500);

            $(".filters").filter("."+getattvalue).show("slide",500);
        }
    });

    lightbox.option({
        showImageNumberLabel :false
      })

    // End Properties



    // Start ADV
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if (getscrolltop >= 900) {
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        } else {
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    })

    // End ADV

    // End Header



    // Start Footer  Section
    const getyear= $("#getyear");
    const getfullyear = new Date().getUTCFullYear();

    getyear.text(getfullyear)
    // End Footer  Section
});
