var javadeta

$(function(){

    $("#input-button").click(function(){
        javadeta=new RegExp($("#input-text").val())
        var html ='<table class="table table-bordered"><tr><th class="text-center">介绍</th><th class="text-center">代码</th></tr></table>'

        $("#div-01").empty()
        $("#div-01").append(html)
        
        read_xml.xml()
        
    })
    
})
