$('#selectBtn').on('click', function(e) {
    var flag = $('.select-lines').children('#Select');
    if(flag.length > 0){
        return false;
    }
    var flag2 = $('.from-model').children('#frm');
    if(flag2.length == 0){
        alert('choose table first by clicking on From!');
        return false;
    }
    addSelect(this, e);
});

$(document).on('change', '#select', function(e) {
    updateJson('select',e);

});



var addSelect = function(that,e){
    select = $('[target="cloneSelect"]').clone();
    option(select);
    select.removeAttr('target');
    select.removeAttr('style');
    select.attr('id', 'Select');
    $(that).siblings('.select-lines').addClass('');
    $(select).appendTo($(that).siblings('.select-lines')).delegate('#selectRemove', 'click', function(e) {
        selectRemove(this,e);
        $(this).closest('#Select').remove();
    }).delegate('#selectAdd', 'click', function(e) {
       addSelect($('#selectBtn'), e);
    });

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

}
var selectRemove = function(that,e){
    $(that).closest('#Select').remove();
     updateJson('select',e);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
     
}
