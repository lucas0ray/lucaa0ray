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
                            var html ='<tr><td>#{title}</td><td>#{format}</td></tr>'
                            
                            html = html.replace(/#{title}/g,title)
                            html = html.replace(/#{format}/g,format)
                            table += html
                            
                        }
                        
                    }) 
                    table += html_table1
                    $("#div-01").append(table)
                }
            
            })

        }

    }
    
})()
