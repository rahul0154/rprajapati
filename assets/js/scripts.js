jQuery(document).ready(function () {
    $(document).on('click', '.title-bar-controls .minimize', function (e) {
        $(this).closest('.window').find('.window-body').addClass('hide');
    });

    $(document).on('click', '.title-bar-controls .maximize', function (e) {
        $(this).closest('.window').find('.window-body').removeClass('hide');
    });
});