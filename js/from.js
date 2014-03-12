$(document).on('change', '#from', function(e) {
    updateJson('from', e);

});



$('#fromBtn').on('click', function(e) {
    var flag = $('.from-model').children('#frm');
    if (flag.length > 0) {
        return false;
    }
    addFrom(this, e);
});
/*$('#selectBtn').on('click', function(e) {
 var flag = $('.select-lines').children('#Select');
 if(flag.length > 0){
 return false;
 }
 addSelect(this, e);
 });*/

var addFrom = function(that, e) {

    from = $('[target="cloneFrom"]').clone();
    option(from);
    from.removeAttr('target');
    from.removeAttr('style');
    from.attr('id', 'frm');
    $(from).appendTo($(that).siblings('.from-model')).delegate('#removeFrom', 'click', function(e) {
        $(this).closest('#frm').remove();
        updateJson('from', e);
    }).delegate('#fromAdd', 'click', function(e) {
        addJoin($('#fromBtn'), e);
    });

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();



}

var addJoin = function(that, e) {

    join = $('[target="cloneFromjoin"]').clone();
    option(join);
    join.removeAttr('target');
    join.removeAttr('style');
    join.attr('id', 'frm');
    $(join).appendTo($(that).siblings('.from-model')).delegate('#removeFrom', 'click', function(e) {
        $(this).closest('#frm').remove();
        updateJson('from', e);
    }).delegate('#fromAdd', 'click', function(e) {
        addJoin($('#fromBtn'), e);
    });

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();



}