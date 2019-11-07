// ON LOAD WEB HOOK
$(function() {
    console.log('Hello JQuery Load Webhook');
});

$(function() {
    console.log('Hello Simple JQuery Load Webhook');
});

window.onload = function() {
    console.log('Hello Native Load Webhook');
};

$(function() {
    // SELECTOR
    $("p").text('Selector Tag');
    $("#selector_id").text('Selector ID');
    $(".selector_class").text('Selector Class');

    // Add Class
    $("#classAdder > li").addClass('nav-menu');

    // Add Attribute
    $("#attrAdder").attr("alt", "beach");

    // Add CSS
    $("#cssAdder").css({
        background: 'red',
        width: '500px',
        height: '200px'
    });

    // Event Add
    $("#eventAndAnimate").click(function(){
        $("#cssAdder").animate({
            width: '+=50px',
            height: "toggle"
        }, 5000);
    });

    // test modal
    $("#modalTest").click(function() {
        var layer =  $("<div></div>");
        layer.css({
            position: "fixed",
            "z-index": "99",
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            background: 'rgba(0,0,0,0.6)'
        }).hide();

        var msgBox = $("<div>awd</div>");
        msgBox.css({
            position: "fixed",
            left: "50%",
            "min-width": "400px",
            "min-height": "400px",
            background: "white",
            "border-radius": "10px"
        }).hide();

        layer.append(msgBox);

        msgBox.animate({
            top: '+=50px'
        });
        
        $("#app").append(
            layer.fadeIn("fast", function() {
                msgBox.fadeIn();
            })
        );
    })
});


