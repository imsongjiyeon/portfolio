//main.js

$(document).ready(function(){

  //animate 함수를 사용하려면 https://cdnjs.com/libraries/egjs-jquery-transform 라이브러리 연결해야 함.
  //https://cdnjs.cloudflare.com/ajax/libs/egjs-jquery-transform/2.0.0/transform.js

  // $('#polygon').animate({'bottom':'-9%'},0).animate({'bottom':'45%','transform':'scale(2)'},500);
  // $('#polygon').animate({'bottom':'-9%'},0).animate({'bottom':'45%'},500, function(){

  //   $('#polygon').css('transform','scale(2)').delay(200);
  //   $('#polygon').css('transform-origin','50% 50%');
  //});



  //인트로 텍스트를 움직이는 함수 //1초 =1000
  function moveText(){
    // $('#txt_wrap span').animate({'bottom':'-100px'},0).animate({'bottom':'200px'},500, 'easeInOutBack');


    $('.j').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},100, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},50)
    .animate({'bottom':'300px','left':'30%'},50)
    .animate({'bottom':'250px','left':'20%'},50)
    .animate({'bottom':'150px','left':'10%'},30)
    .animate({'bottom':'-20px','left':'2%'},100,'easeOutBack')
    .animate({'bottom':'0px','left':'30px'},50);

    $('.i').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},110, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},50)
    .animate({'bottom':'320px','left':'30%'},100)
    .animate({'bottom':'250px','left':'20%'},50)
    .animate({'bottom':'150px','left':'10%'},30)
    .animate({'bottom':'-20px','left':'8%'},100,'easeOutBack')
    .animate({'bottom':'0px','left':'95px'},10);

    $('.dash').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},120, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},50)
    .animate({'bottom':'330px','left':'30%'},100)
    .animate({'bottom':'250px','left':'20%'},50)
    .animate({'bottom':'150px','left':'12%'},30)
    .animate({'bottom':'0px','left':'145px'},10);

    $('.y').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},50)
    .animate({'bottom':'340px','left':'30%'},70)
    .animate({'bottom':'250px','left':'20%'},50)
    .animate({'bottom':'-40px','left':'17.5%'},100,'easeOutBack')
    .animate({'bottom':'0px','left':'210px'},20);

    $('.e').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},50)
    .animate({'bottom':'340px','left':'30%'},100)
    .animate({'bottom':'250px','left':'25%'},50)
    .animate({'bottom':'-30px','left':'23.3%'},120,'easeOutBack')
    .animate({'bottom':'0px','left':'280px'},10);

    $('.o1').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},70)
    .animate({'bottom':'310px','left':'35%'},70)
    .animate({'bottom':'-20px','left':'29%'},140,'easeOutBack')
    .animate({'bottom':'0px','left':'350px'},100);

    $('.n').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},140, 'easeInExpo')
    .animate({'bottom':'270px','left':'40%'},70)
    .animate({'bottom':'310px','left':'37%'},100)
    .animate({'bottom':'-10px','left':'35%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'420px'},50);

    $('.apostrophe').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},150, 'easeInExpo')
    .animate({'bottom':'290px','left':'39.5%'},100)
    .animate({'bottom':'0px','left':'475px'},150,'easeOutBack');

    $('.s').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},160, 'easeInExpo')
    .animate({'bottom':'310px','left':'45%'},100)
    .animate({'bottom':'-20px','left':'43.5%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'525px'},50);

    $('.p').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},70)
    .animate({'bottom':'300px','left':'52%'},100)
    .animate({'bottom':'-10px','left':'54%'},130,'easeOutBack')
    .animate({'bottom':'0px','left':'650px'},50);

    $('.o2').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},70)
    .animate({'bottom':'310px','left':'55%'},130)
    .animate({'bottom':'-10px','left':'60.15%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'725px'},50);

    $('.r').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},70)
    .animate({'bottom':'320px','left':'57%'},70)
    .animate({'bottom':'-10px','left':'65.5%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'790px'},50);

    $('.t').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},70)
    .animate({'bottom':'320px','left':'60%'},70)
    .animate({'bottom':'-10px','left':'71%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'855px'},50);

    $('.f').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},130, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},50)
    .animate({'bottom':'330px','left':'60%'},50)
    .animate({'bottom':'250px','left':'70%'},50)
    .animate({'bottom':'-10px','left':'76.5%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'920px'},50);

    $('.o3').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},140, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},50)
    .animate({'bottom':'330px','left':'70%'},50)
    .animate({'bottom':'250px','left':'75%'},50)
    .animate({'bottom':'-10px','left':'81.7%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'985px'},50);

    $('.l').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},150, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},50)
    .animate({'bottom':'320px','left':'70%'},50)
    .animate({'bottom':'250px','left':'80%'},50)
    .animate({'bottom':'-10px','left':'87.2%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'1050px'},50);

    $('.i2').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},150, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},50)
    .animate({'bottom':'320px','left':'70%'},50)
    .animate({'bottom':'250px','left':'80%'},50)
    .animate({'bottom':'150px','left':'85%'},50)
    .animate({'bottom':'-10px','left':'91.2%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'1100px'},50);

    $('.o4').animate({'bottom':'-150px'},0)
    .animate({'bottom':'200px'},150, 'easeInExpo')
    .animate({'bottom':'270px','left':'50%'},50)
    .animate({'bottom':'330px','left':'70%'},50)
    .animate({'bottom':'250px','left':'80%'},50)
    .animate({'bottom':'150px','left':'90%'},50)
    .animate({'bottom':'-10px','left':'96.5%'},150,'easeOutBack')
    .animate({'bottom':'0px','left':'1160px'},50);
  }
  let Timer = setTimeout(moveText, 2500); //2.5초 뒤에 moveText 함수 실행

  
  // 인트로 숨기기
  function hideIntro(){
    $('#intro').fadeOut();
  }
  let Timer2 = setTimeout(hideIntro, 3500); // 5초 뒤에 hideIntro 함수 실행


  // //scroll 마우스 애니메이션 함수
  // function scroll_btn(){
  //   $('.next_img').animate({'bottom':'10%'},800).animate({'bottom':'8%'},800);
  // }

  // //매 1.6초마다 함수를 반복 실행한다.
  // let Timer3 = setInterval(scroll_btn, 1000);
  
  // //next_btn을 클릭하면 comming가 상단으로 애니메이션되면서 올라오게 한다.
  // $('.next_btn, .next_img').click(function(){
  //   //e.prevent.Default();
  //   $('html, body').stop().animate({scrollTop:$('#comming').offset().top-70},100,'easeOutQuint');
  //   $('#comming_inner .h2_before').animate({'top':'-17px'},500,'easeInQuart');
  //   $('#comming_inner .h2_after').animate({'top':'5px'},1500,'easeOutBounce');
  //   return false;
  // });
  
  //이벤트 무력화 방법
  //a태그의 #때문에 클릭시 새로고침되는 현상이 발생되는데
  //이런 경우는 함수의 마지막에 return false를 넣어주는 방법과
  //e(이벤트 객체)를 사용하여 e.preventDefault();를 작성해주는 방법이 있다.




  

});