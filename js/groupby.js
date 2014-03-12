$(document).on('change', '#groupby', function(e) {
    updateJson('groupby', e);
});





$('#groupbyBtn').on('click', function(e) {
    var flag = $('.groupby-line').children('#grpby');
    if(flag.length > 0){
        return false;
    }
    addGroupby(this, e);
});



var addGroupby = function(that, e) {
   
    groupby = $('[target="cloneGroupby"]').clone();
    option(groupby);
    groupby.removeAttr('target');
    groupby.removeAttr('style');
    groupby.attr('id', 'grpby');
    $(groupby).appendTo($(that).siblings('.groupby-line')).delegate('#groupbyRemove', 'click', function(e) {
        $(this).closest('#grpby').remove();
        updateJson('groupby', e);
        // updateJson('page', e);
    }).delegate('#groupbyAdd', 'click', function(e) {
       addGroupby($('#groupbyBtn'), e);
    });

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();



}

