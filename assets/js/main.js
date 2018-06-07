
    // =========侧边导航下拉列表========= //

    $('.navMenu li a').on('click', function() {
        $(this).siblings('.sub-menu').slideToggle(600)
            .end()
            .find('.arrow').toggleClass('tpl-left-nav-more-ico-rotate');
    });
   
    // tabs
    $('#new-tabs').tabs({noSwipe: 1});

    // paginations
    $('.paginations').pagination({
        pageCount: 50,
        jump: true,
        coping: true,
        homePage: '首页',
        endPage: '末页',
        prevContent: '上页',
        nextContent: '下页',
        callback: function (api) {
            console.log(api.getCurrent())
        }
    });



   


   
 


    
  
   
  