// 그림에 마우스 올라왔을때 (mouse over) 레이어로 또다른 이미지 보여주는 자바스크립트 (java script)

this.imagePreview = function(){
    /* CONFIG */
    
    xOffset = 200;
    yOffset = 1;
    
    /* END CONFIG */
    $("img.preview").hover(function(e){
    this.t = this.title;
    this.title = "";
    var c = (this.t != "") ? "<br/>" + this.t : "";
    $("body").append("<p id='preview'><img src='"+ $("#pics"+this.id).val() +"' alt='Image preview' width='300px' />"+ c +"</p>");
    $("#preview")
    .css("top",(e.pageY - xOffset) + "px")
    .css("left",(e.pageX + yOffset) + "px")
    .fadeIn("fast");
    },
    function(){
    this.title = this.t;
    $("#preview").remove();
    });
    $("img.preview").mousemove(function(e){
    $("#preview")
    .css("top",(e.pageY - xOffset) + "px")
    .css("left",(e.pageX + yOffset) + "px");
    });
    };
    
    
    // starting the script on page load
    $(document).ready(function(){
    imagePreview();
    });