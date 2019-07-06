$(function(){

    $("#input-button").click(function(){

        var javadeta=$("#input-text").val()
        var html ='<tr><td>介绍</td><td>代码</td></tr>'

        $("#table-01").empty()
        $("#table-01").append(html)

        $.ajax({
            type: "get",
            url: "javadata/web/xml/css.xml",
            dataType: "xml",
            success: function (xml) {

                $(xml).find("part").each(function() {

                    var part = $(this);
                    var name = part.attr("name")

                    if($.trim(name) == $.trim(javadeta)){

                        var title = part.find("title").text();
                        var format = part.find("format").text();
                        var html ='<tr><td>#{title}</td><td>#{format}</td></tr>'
                        
                        html = html.replace(/#{title}/g,title)
                        html = html.replace(/#{format}/g,format)
                        
                        $("#table-01").append(html)

                    }

                }) 

            }

        })

      })
      
})
