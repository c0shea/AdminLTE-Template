$(function () {
    $(".datepicker").datepicker({
        autoclose: true
    });

    $('input[type="checkbox"], input[type="radio"]').iCheck({
        checkboxClass: "icheckbox_minimal-blue",
        radioClass: "iradio_minimal-blue"
    });

    $("#datemask").inputmask("dd/mm/yyyy", { "placeholder": "dd/mm/yyyy" });
    $("#datemask2").inputmask("mm/dd/yyyy", { "placeholder": "mm/dd/yyyy" });
    $("[data-mask]").inputmask();

    // Fix sidebar white space at bottom of page on resize
    $(window).on("load", function () {
        setTimeout(function () {
            $("body").layout("fix");
            $("body").layout("fixSidebar");
        }, 250);
    });
});