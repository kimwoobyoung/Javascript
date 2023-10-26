// 탭 컴포넌트 동작 시작
$('.list').click(function(e){
        openTab(e.target.dataset.id);
    }
);

function openTab(a) {
    $('.tab-button').removeClass('orange').eq(a).addClass('orange');
    $('.tab-content').removeClass('show').eq(a).addClass('show');
}

// $('.tab-button').on('click', function() { 
//     const index = $(this).index();

//     $('.tab-button').removeClass('orange').eq(index).addClass('orange');
//     $('.tab-content').removeClass('show').eq(index).addClass('show');
// });

// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function() { 
//         openTab(i);
//     });
// }
