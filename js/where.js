$(document).on('change', '#where', function(e) {
    updateJson('where', e);
});


$('#whereBtn').on('click', function(e) {
    var flag = $('.group-conditions').children('#group');
    if(flag.length > 0){
        return false;
    }
    addGroup(this,e);
});

var addGroup = function(that,e) {
    group = $('[target="cloneGroup"]').clone();
    option(group);
    group.removeAttr('target');
    group.removeAttr('style');
    group.attr('id','group');
    group.attr('rel','Group');
    $(group).appendTo($(that).siblings('.group-conditions')).delegate('#removeGroup', 'click', function(e) {
        removeGroup(this, e);
    }).delegate('#addCondition','click',function(e){
         addCondition(this,e);
        
    }).delegate('#addGroup','click',function(e){
         addGroup(this,e);
    });
   
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}

var removeGroup = function(that, e) {
    $(that).closest('#group').remove();
    updateJson('where', e);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

}

var addCondition = function(that, e) {
    condition = $('[target="cloneCondition"]').clone();
    option(condition);
    condition.removeAttr('target');
    condition.removeAttr('style');
    condition.attr('id','condition');
    $(condition).appendTo($(that).siblings('.group-conditions')).delegate('#removeCondition', 'click', function(e) {
        removeCondition(this, e);
    });

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}

var removeCondition = function(that, e) {
    $(that).parents('.condition').remove();
    updateJson('where', e);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}

