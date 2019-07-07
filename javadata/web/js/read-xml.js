var read_xml

(function(){

    read_xml = {

        xml:function(){

            $.ajax({

                type: "get",
                url: "javadata/web/xml/"+filename+".xml",
                dataType: "xml",
                success: function (xml) {
                    
                    empty_div_01.empty_table()
            
                    $(xml).find("part").each(function() {
            
                        var part = $(this);
                        var name = part.attr("name")
            
                        if($.trim(name).match(javadeta)){
            
                            var title = part.find("title").text();
                            var format = part.find("format").text();
                            var html ='<tbody><tr><td>#{title}</td><td>#{format}</td></tr></tbody>'
                            
                            html = html.replace(/#{title}/g,title)
                            html = html.replace(/#{format}/g,format)
                            
                            $("#div-01").append(html)
            
                        }
            
                    }) 
            
                }
            
            })

        }

    }
    
})()
