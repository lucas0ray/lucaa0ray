var javadeta
var html_table ='<table class="table table-bordered"><tr><th class="text-center">介绍</th><th class="text-center">代码</th></tr></table>'

$(function(){
    
    $("#input-button").click(function(){
        javadeta=new RegExp($("#input-text").val())
        
        
        read_xml.xml()
        
    })
    
})

var empty_div_01

(function(){

    empty_div_01={

        empty_table:function(){

            $("#div-01").empty()
            $("#div-01").append(html_table)
            
        }

    }

})()
