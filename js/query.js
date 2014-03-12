var processSelect = function(dom) {
    var select = '';
    var select_lines = $(dom).find('.select-lines');
    $(select_lines).children().each(function(e) {
        if ($(this).attr('id') == 'Select') {
            var x = $(this).find('#selectFields').val();
            var exp = $(this).find('#expression').val();
            if (exp != '') {
                x = exp + ' (' + x + ')';
            }
            if (select.indexOf(x) != -1) {
                alert('Field already added!')
            } else {

                if (select != '') {
                    select = select + ' , ';
                }
                select = select + x;
            }

        }

    });
    return select;
}

var processFrom = function(dom) {
    //console.log(dom)
    var from = '';
    var from_model = $(dom).find('.from-model');
    $(from_model).children().each(function(e) {
        if ($(this).attr('id') == 'frm') {
            // logic for join
            var join = $(this).find('#join').val();
            if(typeof(join) != 'undefined'){
                
                var col1 = $(this).find('#fields1').val();
                var col2 = $(this).find('#fields2').val();
                var ope =  $(this).find('#comparisons').val();
                var table1 = $(this).prev().find('#fromModel').val();
                var table2 = $(this).find('#fromModel').val();
                from += ' '+join+ ' '+table2+' ON '+ table1 + '.'+col1+ ope+table2+'.'+col2;
                
            }else{
                var x = $(this).find('#fromModel').val();
            if (from.indexOf(x) != -1) {
                alert('Table already added!')
            } else {
                if (from != '') {
                    from +=  ' , ';
                }
                from +=  x;
            }
                
            }
            
            
            
            
            
        }

    });
    return from;
}

function processWhere(dom, where, prevOp) {
    var len = $(dom).find('[rel="Group"]').length;
    var finalResult = '';
    if (len == 0) {
        return finalResult;
    } else {
        var lastOp = null;

        // var prevResult = result;
        for (i = 0; i <= len - 1; i++) {
            result = '';
            var group = $(dom).find('[rel="Group"]')[i];
            if (lastOp != null) {
                finalResult = finalResult + ' ' + lastOp;

            }
            if (finalResult != '') {

                finalResult = finalResult + ' (';
            }

            //do processing here and put result in finalResult
            var currentOperator = $(group).children('#logicalOperators').val();
            var condition = $(group).find('.group-conditions')[0];
            $(condition).children().each(function() {
                if ($(this).attr('id') == 'condition') {
                    if (result != '') {
                        result = result + ' ' + currentOperator + ' ';
                    }
                    var field = $(this).find('#fields').val();
                    var operator = $(this).find('#comparisons').val();
                    var value = "'" + $(this).find('#Value').val() + "'";


                    result = result + field + ' ' + operator + ' ' + value;


                }

            });

            finalResult = finalResult + result;

            //result = '(' + result + ')';

            lastOp = currentOperator;

        }

        finalResult = '(' + finalResult;
        for (i = 0; i <= len - 1; i++) {
            finalResult += ')';
        }
        return finalResult;
    }
}


var processGroupby = function(dom) {
    var groupby = '';
    var groupby_lines = $(dom).find('.groupby-line');
    $(groupby_lines).children().each(function(e) {
        if ($(this).attr('id') == 'grpby') {
            var x = $(this).find('#groupbyFields').val();
            if (groupby.indexOf(x) != -1) {
                alert('Column already added!')
            } else {
                if (groupby != '') {
                    groupby = groupby + ' , ';
                }
                groupby = groupby + x;
            }

        }

    });
    return groupby;
}

var processHaving = function(dom) {
    console.log(dom)
    var len = $(dom).find('[rel="Having"]').length;
    var finalResult = '';
    if (len == 0) {
        return finalResult;
    } else {
        var lastOp = null;

        // var prevResult = result;
        for (i = 0; i <= len - 1; i++) {
            result = '';
            var group = $(dom).find('[rel="Having"]')[i];
            if (lastOp != null) {
                finalResult = finalResult + ' ' + lastOp;

            }
            if (finalResult != '') {

                finalResult = finalResult + ' (';
            }

            //do processing here and put result in finalResult
            var currentOperator = $(group).children('#logicalOperators').val();
            var condition = $(group).find('.having-conditions')[0];
            $(condition).children().each(function() {
                if ($(this).attr('id') == 'condition_having') {
                    if (result != '') {
                        result = result + ' ' + currentOperator + ' ';
                    }
                    var expression = $(this).find('#expression').val();
                    var field = $(this).find('#fields').val();
                    var operator = $(this).find('#comparisons').val();
                    var value = "'" + $(this).find('#ValueHaving').val() + "'";
                    if (expression != '') {
                        result += expression + '(' + field + ') ' + operator + ' ' + value;

                    } else {

                        result = result + field + ' ' + operator + ' ' + value;

                    }
                }

            });

            finalResult = finalResult + result;

            //result = '(' + result + ')';

            lastOp = currentOperator;

        }

        finalResult = '(' + finalResult;
        for (i = 0; i <= len - 1; i++) {
            finalResult += ')';
        }
        return finalResult;
    }

}


var processOrder = function(dom) {
    var order = '';
    var order_lines = $(dom).find('.order-by');
    $(order_lines).children().each(function(e) {
        if ($(this).attr('id') == 'Order') {
            var x = $(this).find('#fields').val();
            if (order.indexOf(x) != -1) {
                alert('Field already added!')
            } else {
                var by = $(this).find('#orderBy').val();
                if (by == 'Ascending') {
                    by = 'ASC';
                } else if (by == 'Descending') {
                    by = 'DSC';
                }
                x += ' ' + by;
                if (order != '') {
                    order += ' , ';
                }
                order += x;
            }

        }

    });
    return order;
}

var updateJson = function(clause, e) {

    if (clause == 'select') {
        var select_con = $('#select');
        var select = processSelect(select_con);
        if (select != '') {
            select = 'SELECT  ' + select;
        }

        $('#outputSelect').text(select);
    } else if (clause == 'from') {
        var from_con = $('#from');
        from = processFrom(from_con);
        if (from != '') {
            from = 'FROM  ' + from;
        }
        $('#outputFrom').text(from);


    } else if (clause == 'where') {
        where = '';
        var where_con = $('#where');
        var where = processWhere(where_con, where);
        if (where != '') {
            where = 'WHERE ' + where;
        }
        $('#outputWhere').text(where);
    } else if (clause == 'groupby') {
        var group_by = $('#groupby');
        var groupby = processGroupby(group_by);
        if (groupby != '') {
            groupby = 'GROUP BY  ' + groupby;
        }

        $('#outputGroupby').text(groupby);
    } else if (clause == 'having') {
        var having_d = $('#having');
        var having = processHaving(having_d);
        if (having != '') {
            having = 'HAVING  ' + having;
        }
        $('#outputHaving').text(having);
    } else if (clause == 'order') {
        var order_by = $('#order');
        var order = processOrder(order_by);
        if (order != '') {
            order = 'ORDER  ' + order;
        }

        $('#outputOrderby').text(order);

    }




    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
}