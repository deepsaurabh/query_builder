Generic 'q' builder Tool
========================

This is a simple HTML / JavaScript application that is used for Building 'q' That can be used with
any REST based system.

# Generic 'q' builder (Version 1.0)
An interative demo and ZIP download are hosted on gh page http://redquerybuilder.appspot.com/

'q' builder is based on pure Bootstrap and JQuery. Where You can build  sql queries as a tree.

### Build

- Download the code put project in any any local server and it will run
- For Integration with Rest based System you need to write AJAX calls in main.js to fill the pre given object of fields and models
- To use this plugin go through the scenarios of where clause given below.
-  You can post your comment and issues  on git hub issues

### Scenarios
##### Where condition as single group-
- Single AND Condition eg:  (a && b)
![55](https://f.cloud.github.com/assets/4989804/2350116/8cfb1ab6-a56c-11e3-96ef-f278a40cc352.png)
- Its Query
![56](https://f.cloud.github.com/assets/4989804/2350126/a12f1212-a56c-11e3-8644-04a5a65b5037.png)
- Single OR condition eg: (a || b)
![57](https://f.cloud.github.com/assets/4989804/2350131/aeedf558-a56c-11e3-829b-c4442b7a779d.png)
- Its Query
![58](https://f.cloud.github.com/assets/4989804/2350133/c0c97784-a56c-11e3-9bb4-94031c285c3c.png)

##### Where condition as Two  group-
- Both AND  (a && b && (c && d))
![60](https://f.cloud.github.com/assets/4989804/2350203/7f2ae85c-a56d-11e3-970f-edb924e101c5.png)
- Its Query
![61](https://f.cloud.github.com/assets/4989804/2350208/890b2be8-a56d-11e3-843e-c9390f95b83f.png)
- Both OR eg: (a || b || (c || d))
![62](https://f.cloud.github.com/assets/4989804/2350213/932eefd8-a56d-11e3-9bb8-63e5ff797386.png)
- its Query
![63](https://f.cloud.github.com/assets/4989804/2350217/9ca6d652-a56d-11e3-8625-7247fa986e66.png)
- First AND and inside it OR as (a && b && (c || d ))
![64](https://f.cloud.github.com/assets/4989804/2350260/39ddbf1c-a56e-11e3-82cc-91a5cdff46ec.png)
- Its Query
![65](https://f.cloud.github.com/assets/4989804/2350264/45d2c484-a56e-11e3-918a-58c6c706c36d.png)
- First  OR and inside it AND  as (a || b || (c && d))
![66](https://f.cloud.github.com/assets/4989804/2350287/9402b6be-a56e-11e3-891c-e2445dc37715.png)
- Its Query ( it will create a virtual key to represent as JSON object for c and d
![67](https://f.cloud.github.com/assets/4989804/2350292/9e5553ec-a56e-11e3-90b5-4d696abdc2c7.png)

> Similarly we can design it for three and more groups

##### Select clause can be designed as-
- Want to select Single field
![70](https://f.cloud.github.com/assets/4989804/2350403/24b92b2e-a570-11e3-9539-8c3639180c72.png)
- Its Query 
![71](https://f.cloud.github.com/assets/4989804/2350406/2f6462a0-a570-11e3-95c0-807b32aed39f.png)
- Select Two fields
![72](https://f.cloud.github.com/assets/4989804/2350412/3a61a960-a570-11e3-86a4-0f2cdc51cb9c.png)
- Its Query
![73](https://f.cloud.github.com/assets/4989804/2350419/40dc29a0-a570-11e3-8c64-cdd8e7d50a1a.png)

##### Other clauses can also be designed in the same way from UI.
