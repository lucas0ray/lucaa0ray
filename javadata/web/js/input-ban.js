var filename
function onclick0 (x,judge){
    $("#div-input input").removeAttr("disabled")
    $(x).attr("disabled", "disabled")
    $('#input-button').removeAttr("disabled")
    
    empty_div_01.empty_table()

    switch(judge) {
        case 1:
            filename="java"
            $("#div_span_prompt>span").hide()
            break;
        case 2:
            filename="javascript"
            $("#div_span_prompt>span").hide()
            break;
        case 3:
            filename="css"
            $("#div_span_prompt>span").hide()
            break;
        case 4:
            filename="html"
            $("#div_span_prompt>span").hide()
            break;
        case 5:
            filename="sql"
            $("#div_span_prompt>span").hide()
            break;
        default:
            $('#input-button').attr("disabled", "disabled")
            $("#div_span_prompt>span").show()
            break;
    }
}
//多个js文件方法相互调，设置成全局方法 file_name.a()
// var file_name
// (function(){
//     file_name = {
//         a:function(){
//             return filename
//         }
//     }
// })()
