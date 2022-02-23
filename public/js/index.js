function openMenu(){
    $('.topMenu').css('display','block');
    $('.close-menu').css('display','block');
    $('.open-menu').css('display','none');
    $('.topMenu-ul').css('background','black');
    $('.middle-apply').css('opacity','0.5');
    $('.footer').css('opacity','0.5');
}
function closeMenu(){
    $('.topMenu').css('display','none');
    $('.topMenu-ul').css('background','none');
    $('.close-menu').css('display','none');
    $('.open-menu').css('display','block');
    $('.middle-apply').css('opacity','1');
    $('.footer').css('opacity','1');
    
}
function OpenSmallMenu(num){
    var result = '#SmallMenu'+num;
    $(result).css('dislay','block');

}
// 자동 슬라이드를 구현항 방법은 setInterver을 사용해서 0.1초 동안 반복하게 적용함,
// 그리고 timer+1을 하여서 0.1초에 1vw를 이동하게끔 설계 후에 transition을 css에서 사용해서 부드럽게 적용
var timer = 0;                
let interval = setInterval(slideshow, 100); 
                
function slideshow(){ 
    $('.slide-container').css('opacity','1');
    $('.slide-container').css('transform','translateX(-'+timer+'vw)');
    timer = timer+1;
    if(timer >= 121){
        timer = 0;
        $('.slide-container').css('transform','translateX(-'+timer+'vw)');
        $('.slide-container').css('opacity','0').delay(400);
    }
} 