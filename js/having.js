$(document).on('change', '#having', function(e) {
    updateJson('having', e);
});


$('#havingBtn').on('click', function(e) {
    var flag = $('.having-conditions').children('#hav_group');
    if(flag.length > 0){
        return false;
    }
    addHaving(this,e);
});


var addHaving = function(that,e) {
    having = $('[target="cloneHavinggroup"]').clone();
    option(having);
    having.removeAttr('target');
    having.removeAttr('style');
    having.attr('id','hav_group');
    having.attr('rel','Having');
    $(having).appendTo($(that).siblings('.having-conditions')).delegate('#removeGroup_having', 'click', function(e) {
        removeGroup_having(this, e);
    }).delegate('#addCondition_having','click',function(e){
         addCondition_having(this,e);
        
    }).delegate('#removeCondition_having','click',function(e){
        removeCondition_having(this, e);
    }).delegate('#addGroup_having','click',function(e){
         addHaving(this,e);
    }).delegate('#removeGroup_having','click',function(e){
         removeGroup_having(this,e);
    });
   
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}

var removeGroup_having = function(that, e) {
    $(that).closest('#hav_group').remove();
    updateJson('having', e);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

}

var addCondition_having = function(that, e) {
    condition_having = $('[target="cloneHavingcondition"]').clone();
    option(condition_having);
    condition_having.removeAttr('target');
    condition_having.removeAttr('style');
    condition_having.attr('id','condition_having');
    $(condition_having).appendTo($(that).siblings('.having-conditions')).delegate('#removeCondition_having', 'click', function(e) {
        removeCondition_having(this, e);
    });

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}

var removeCondition_having = function(that, e) {
    $(that).parents('#condition_having').remove();
    updateJson('having', e);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}

