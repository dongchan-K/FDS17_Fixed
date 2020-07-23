// DOM 노드 찾기
var items = $('.menu-item');
var btn = $('.btn-menu');
var pannel = $('.board section');
var tab = $('.tab');

// 기능 구현

btn.click(function (e){
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
});

tab.click(function(e){
  e.preventDefault();
  pannel.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
});