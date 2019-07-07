var read_xml

(function(){
    
    read_xml = {
        
        xml:function(){
            
            $.ajax({
                
                type: "get",
                url: "javadata/web/xml/"+filename+".xml",
                dataType: "xml",
                success: function (xml) {
                    
                    var table = html_table0
                    
                    $(xml).find("part").each(function() {
                        
                        var part = $(this);
                        var name = part.attr("name")
                        
                        if($.trim(name).match(javadeta)){
                            
                            var title = part.find("title").text();
                            var format = part.find("format").text();
                            var html ='<tr><td class="col-md-6 col-xs-6 col-sm-6 col-lg-6 text-center">#{title}</td><td class="col-md-6 col-xs-6 col-sm-6 col-lg-6 text-center">#{format}</td></tr>'
                            
                            html = html.replace(/#{title}/g,title)
                            html = html.replace(/#{format}/g,format)
                            table += html
                            
                        }
                        
                    }) 
                    table += html_table1
                    $("#div-01").empty()
                    $("#div-01").append(table)
                },
                error:function() {
                    
                    var span = '<span>没有查询到相关资料！</span>'
                    $("#div_span_prompt").empty()
                    $("#div_span_prompt").append(span)

                }
            
            })

        }

    }
    
})()
