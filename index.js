$(document).ready(function () {

    $(window).on("load",function(){
        $(".loading").fadeOut("fast");
    })

    var scrollTop = 0;
    $(".container").scroll(function () {
        scrollTop = $(".container").scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 70) {
            $('#naviblock').addClass('navblocknew');
            $(".navbtn").addClass("navbtnnew");
            $(".navlogo").addClass("navlogonew");
            $(".navham").addClass("navhamnew");
        } else if (scrollTop < 70) {
            $('#naviblock').removeClass('navblocknew');
            $(".navbtn").removeClass("navbtnnew");
            $(".navlogo").removeClass("navlogonew");
            $(".navham").removeClass("navhamnew");
        }

    });


    $(".navfullblock").hide();
    $(".navham").click(function(){
        $(".navfullblock").slideToggle();
    })

    $("#nfabout").click(function(){
        $(".navfullblock").slideToggle();
    })
    $("#nfprojects").click(function(){
        $(".navfullblock").slideToggle();
    })
    $("#nfskills").click(function(){
        $(".navfullblock").slideToggle();
    })
    $("#nfcontact").click(function(){
        $(".navfullblock").slideToggle();
    })



    // ___________________________________________

    $(".resumeblock").css("display", "none");
    $(".resumebtn").click(function () {
        $(".resumeblock").css("display", "flex");
    })
    $(".resumecross").click(function () {
        $(".resumeblock").css("display", "none");
    })

    // ______________________________________________________

    // $(".night").css("background-image", "url(./image/moon1.png)");
    $(".night").click(function () {
        $(".night").css("display","none")
        $(".day").css("display","flex")
        $(".aboutleft").css("background-color", "darkorchid");
        $("#h2").css("color", "white");
        $("#p").css("color", "white");
        $(".alink").css("color","white")
    })

    $(".day").click(function () {
        $(".day").css("display","none")
        $(".night").css("display","flex")
        $(".aboutleft").css("background-color", "white");
        $("#h2").css("color", "darkorchid");
        $("#p").css("color", "darkorchid");
        $(".alink").css("color","darkorchid")
    })


    // ______________________________________________
    $("#EagleOCR").click(function(){
        window.location = "https://sherke.github.io/EagleOCR/index.html"
    })
    $("#RedRoseRestaurant").click(function(){
        window.location = "https://sherke.github.io/RedRoseRestaurant/"
    })
    $("#GoaTripForm").click(function(){
        window.location = "https://sherke.github.io/GoaTrip/"
    })
    $("#RCBJersey").click(function(){
        window.location = "https://rcb-jersey.000webhostapp.com/"
    })
    $("#FruitBlast").click(function(){
        window.location = "https://sherke.github.io/FruitFlash/"
    })
    $("#MechanicalPortFolio").click(function(){
        window.location = "https://sherke.github.io/MechanicalPortFolio/home.html"
    })
    $("#PlanetFitnessGym").click(function(){
        window.location = "https://sherke.github.io/PlanetFitnessGym/home.html"
    })
    $("#SpaceInvader").click(function(){
        window.location = "https://sherke.github.io/SpaceInvader/"
    })




    // _________________________________-
    $("#texthtml").mouseenter(function () {
        $("#texthtml").text("80%")
    })
    $("#texthtml").mouseout(function () {
        $("#texthtml").text("HTML")
    })

    $("#textcss").mouseenter(function () {
        $("#textcss").text("75%")
    })
    $("#textcss").mouseout(function () {
        $("#textcss").text("CSS")
    })

    $("#textjavascript").mouseenter(function () {
        $("#textjavascript").text("70%")
    })
    $("#textjavascript").mouseout(function () {
        $("#textjavascript").text("JavaScript")
    })

    $("#textjquery").mouseenter(function () {
        $("#textjquery").text("75%")
    })
    $("#textjquery").mouseout(function () {
        $("#textjquery").text("JQuery")
    })

    $("#textreactjs").mouseenter(function () {
        $("#textreactjs").text("65%")
    })
    $("#textreactjs").mouseout(function () {
        $("#textreactjs").text("React.JS")
    })

    $("#textangularjs").mouseenter(function () {
        $("#textangularjs").text("70%")
    })
    $("#textangularjs").mouseout(function () {
        $("#textangularjs").text("Angular.JS")
    })

    $("#textphp").mouseenter(function () {
        $("#textphp").text("65%")
    })
    $("#textphp").mouseout(function () {
        $("#textphp").text("PHP")
    })

    $("#textmysql").mouseenter(function () {
        $("#textmysql").text("70%")
    })
    $("#textmysql").mouseout(function () {
        $("#textmysql").text("MySQL")
    })

    $("#textnodejs").mouseenter(function () {
        $("#textnodejs").text("70%")
    })
    $("#textnodejs").mouseout(function () {
        $("#textnodejs").text("Node.JS")
    })

    $("#textmongodb").mouseenter(function () {
        $("#textmongodb").text("65%")
    })
    $("#textmongodb").mouseout(function () {
        $("#textmongodb").text("MongoDB")
    })

    $("#textbootstrap").mouseenter(function () {
        $("#textbootstrap").text("65%")
    })
    $("#textbootstrap").mouseout(function () {
        $("#textbootstrap").text("Bootstrap")
    })

    $("#textmaterializejs").mouseenter(function () {
        $("#textmaterializejs").text("65%")
    })
    $("#textmaterializejs").mouseout(function () {
        $("#textmaterializejs").text("Materialize.JS")
    })

    $("#textphotoshop").mouseenter(function () {
        $("#textphotoshop").text("70%")
    })
    $("#textphotoshop").mouseout(function () {
        $("#textphotoshop").text("PhotoShop")
    })



    $("#textpython").mouseenter(function () {
        $("#textpython").text("70%")
    })
    $("#textpython").mouseout(function () {
        $("#textpython").text("Python")
    })

    $("#textopencv").mouseenter(function () {
        $("#textopencv").text("75%")
    })
    $("#textopencv").mouseout(function () {
        $("#textopencv").text("OpenCV")
    })

    $("#textpandas").mouseenter(function () {
        $("#textpandas").text("70%")
    })
    $("#textpandas").mouseout(function () {
        $("#textpandas").text("Pandas")
    })

    $("#textnumpy").mouseenter(function () {
        $("#textnumpy").text("75%")
    })
    $("#textnumpy").mouseout(function () {
        $("#textnumpy").text("Numpy")
    })

    $("#textandroidstudio").mouseenter(function () {
        $("#textandroidstudio").text("65%")
    })
    $("#textandroidstudio").mouseout(function () {
        $("#textandroidstudio").text("Android Studio")
    })

    $("#textmatlab").mouseenter(function () {
        $("#textmatlab").text("60%")
    })
    $("#textmatlab").mouseout(function () {
        $("#textmatlab").text("MATLAB")
    })

    $("#textuipath").mouseenter(function () {
        $("#textuipath").text("65%")
    })
    $("#textuipath").mouseout(function () {
        $("#textuipath").text("UI Path")
    })

    $("#textgit").mouseenter(function () {
        $("#textgit").text("75%")
    })
    $("#textgit").mouseout(function () {
        $("#textgit").text("Git")
    })

    $("#textc").mouseenter(function () {
        $("#textc").text("50%")
    })
    $("#textc").mouseout(function () {
        $("#textc").text("C/C++")
    })



    // ____________________________________________

    $("#cllink1").click(function(){
        window.location = "https://github.com/sherke"
    })
    $("#cllink2").click(function(){
        window.location = "https://www.facebook.com/vikas.sherke.1"
    })
    $("#cllink3").click(function(){
        window.location = "https://www.instagram.com/vikassherke/?hl=en"
    })
    $("#cllink4").click(function(){
        window.location = "https://www.google.com/gmail/"
    })
    $("#cllink5").click(function(){
        window.location = "https://web.whatsapp.com/"
    })
    $("#cllink6").click(function(){
        window.location = "https://www.linkedin.com/in/vikas-sherke-7987961a4/"
    })







})
