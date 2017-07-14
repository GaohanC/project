function doNothing(event) {
    event.preventDefault();
    return false;
}
$( document ).ready(function() {
    $("#calculate_saving").submit(function(){
        alert(calculate_saving($("#q1").val(),
                                $("#q2").val(),
                                $("#q3").val(),
                                ($("#q4").val())/100,
                                $("#q5").val(),
                                $("#q6").val(),
                                $("#q7").val()) );
    })
});
function calculate_saving(q1, q2, q3, q4, q5, q6, q7) {
    if (q1=="" || isNaN(q1)) q1=10000;
    if (q2=="" || isNaN(q2)) q2=6942.36;
    if (q3=="" || isNaN(q3)) q3=8221.32;
    if (q4=="" || isNaN(q4)) q4=1;
    if (q5=="" || isNaN(q5)) q5=0;
    if (q6=="" || isNaN(q6)) q6=0;
    if (q7=="" || isNaN(q7)) q7=0;
    numerator1=q1-q2-q3;
    numerator2=1-Math.pow((1+q4),-(100-q5));
    denominator=q4;
    answer = numerator1*numerator2/denominator-q6-q7;
    if(answer>0){
        output=("我们预估为$"+toInteger(answer)+". 恭喜您，您有相对充裕的退休储蓄，妥善计划您的存款可以让您的退休生活更美好!");
    }else{
        output=("我们预估为$"+toInteger(answer)+". 您的退休存款可能会面临不足，了解我们的储蓄计划可以帮您更好的规划您的退休存款")
    }
    return output;
}
function toInteger(number){ 
  return Math.round(  
    Number(number)    
  ); 
};