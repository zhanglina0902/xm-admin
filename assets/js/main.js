
    // =========侧边导航下拉列表========= //

    $('.navMenu li a').on('click', function() {
        $(this).siblings('.sub-menu').slideToggle(600)
            .end()
            .find('.arrow').toggleClass('tpl-left-nav-more-ico-rotate');
    });
   
    // tabs
    $('#new-tabs').tabs({noSwipe: 1});

    // 
  
   
  