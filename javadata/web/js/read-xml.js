$(function(){

    $("#input-button").click(function(){

        var javadeta=$("#input-text").val()
        var html ='<tr><th>介绍</th><th>代码</th></tr>'

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
