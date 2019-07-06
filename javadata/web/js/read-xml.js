$(function(){
    $("#input-button").click(function(){
        var javadeta=$("#input-text").val()
        alert(javadeta)
        $.get({
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
                    }
                }) 
            }
        })
        
      })





})
