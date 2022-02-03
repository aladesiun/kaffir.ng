$(document).ready(()=>{ 
    $('.showsvg').toggle();
    $('.hero').mouseenter(()=>{
        $('.hovereffect').toggle(200);

        $('.showsvg').toggle(200);
    })

})