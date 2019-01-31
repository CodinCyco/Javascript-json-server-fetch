$('document').ready(function () {
    $.get("Home.html",function (data) {
        $(".container").html(data)
    },'html')

})

function router(page){
    $.get(page+".html",function (data) {
        $(".container").html(data);
    })
    $(".nav-item").removeClass('active');
    $("."+page).addClass("active");

}