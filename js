01、【js string 转 int 注意的问题】

var str='1250' ;

alert( Number(str) ); //得到1250

alert(parseInt(str)); //得到1250

var str1='00100';

alert( Number(str1) ); //得到100

alert(parseInt(str1)); //得到64

发现parseInt方法在format'00'开头的数字时会当作2进制转10进制的方法进行转换，所以建议string转int最好用Number方法
