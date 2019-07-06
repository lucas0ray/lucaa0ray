$(function(){
    $("#input-button").click(function(){
        var javadeta=$("#input-text").val()
        alert(javadeta)
        $.get({
            type: "post",
            url: "xml/css.xml",
            dataType: "xml",
            success: function (xml) {
                alert(javadeta)
                $(xml).find("root").each(function() {
                    var root = $(this);
                    var name = root.attr("name")
                    alert(name)
                    if($.trim(name) == $.trim(javadeta)){
                        var title = root.find("title").text();
                        var format = root.find("format").text();
                    }
                }) 
            }
        })
        
      })





})
