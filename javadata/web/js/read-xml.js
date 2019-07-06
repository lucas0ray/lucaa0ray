$(function(){
    $("#input-button").click(function(){
        var javadeta=$("#input-text").val()
        alert(javadeta)
        $("#div-01").empty()

      
        
          


















        $.ajax({
            type: "get",
            url: "javadata/web/xml/css.xml",
            dataType: "xml",
            success: function (xml) {
                alert(javadeta)
                $(xml).find("part").each(function() {
                    var part = $(this);
                    var name = part.attr("name")
                    alert(name)
                    if($.trim(name) == $.trim(javadeta)){
                        var title = part.find("title").text();
                        var format = part.find("format").text();
                        var html ='<div class="row">'
                        +'<div class="col-md-6">#{title}</div>'
                        +'<div class="col-md-6">#{format}</div>'
                        +'</div>'
                        html = html.replace(/#{title}/g,title)
                        html = html.replace(/#{format}/g,format)
                        $("#div-01").append(html)
                    }
                }) 
            }
        })
      })
})
