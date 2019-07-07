var javadeta

var html_table0
html_table0 ='<table class="table table-bordered"><tr><th class="text-center">介绍</th><th class="text-center">代码</th></tr>'

var html_table1
html_table1 = '</table>'

var html_table = html_table0+html_table1

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
