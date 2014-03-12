var fields = [ 'Points', 'Goals', 'Assists', 'Shots', 'Shot%', 'PPG', 'SHG', 'Penalty Mins'];
var comparisons = ['=', '<>', '<', '<=', '>', '>=', 'LIKE', 'NOT LIKE', 'IS', 'IS NOT','IN','NOT IN', 'EXISTS','NOT EXISTS','BETWEEN','NOT BETWEEN'];
var logicalOperators = ['AND', 'OR'];
var fromList = ['address', 'inventory', 'catogory', 'city', 'country', 'customer', 'sales_by_store'];
var orderBy = ['Ascending', 'Descending'];
var expression = ['','COUNT', 'MAX','MIN','SUM'];
var virtual = 0;
var joins = ['INNER JOIN','LEFT JOIN','RIGHT JOIN'];



var option = function(div) {
    var option = '';
    for (i in fields) {
        option += '<option>' + fields[i] + '</option>'
    }
    $(div).find('select#fields').html(option);
    $(div).find('select#fields1').html(option);
    $(div).find('select#fields2').html(option);
    $(div).find('select#selectFields').html(option);
    $(div).find('select#groupbyFields').html(option);
    var option = '';
    for (i in comparisons) {
        option += '<option>' + comparisons[i] + '</option>'
    }
    $(div).find('select#comparisons').html(option);
    var option = '';
    for (i in logicalOperators) {
        option += '<option>' + logicalOperators[i] + '</option>'
    }
    $(div).find('select#logicalOperators').html(option);
    var option = '';
    for (i in fromList) {
        option += '<option>' + fromList[i] + '</option>'
    }
    $(div).find('select#fromModel').html(option);
    var option = '';
    for (i in orderBy) {
        option += '<option>' + orderBy[i] + '</option>'
    }
    $(div).find('select#orderBy').html(option);
    var option = '';
    for (i in expression) {
        option += '<option>' + expression[i] + '</option>'
    }
    $(div).find('select#expression').html(option);
    var option = '';
    for (i in joins) {
        option += '<option>' + joins[i] + '</option>'
    }
    $(div).find('select#join').html(option);
}





        