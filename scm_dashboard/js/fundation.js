function test(){
    //严格模式
    //"use strict"
    //如果没有写var就是全局变量，但是严格模式下，这个会报错
    //message = "hi";
    //alert(message);

    //初始化三个变量
    // 由于ECMAScript是松散类型的，因而使用不同类型初始化变量的操作可以放在一条语句中来完成。
    // 严格模式下，不能定义名为eval或arguments的变量，否则会导致语法错误
    var message = "hi",
        found = false,
        age = 29;

    /* ECMAScript中有5种简单数据类型（也称为基本数据类型）：Undefined、Null、Boolean、Number和String。
    还有1种复杂数据类型——Object, Object本质上是由一组无序的名值对组成的。
    ECMAScript不支持任何创建自定义类型的机制，而所有值最终都将是上述6种数据类型之一。 */
    // typeof操作符
    /* 回下列某个字符串：
    ❏ "undefined"——如果这个值未定义；
    ❏ "boolean"——如果这个值是布尔值；
    ❏ "string"——如果这个值是字符串；
    ❏ "number"——如果这个值是数值；
    ❏ "object"——如果这个值是对象或null；
    ❏ "function"——如果这个值是函数。 */
    //#region  typeof操作符
    /* alert("字符串数据类型：" + typeof(message)); */
    /* alert("布尔值数据类型：" + typeof(found)); */
    /* alert("数值数据类型：" + typeof(age)); */
    /* // 函数在ECMAScript中是对象，不是一种数据类型 */
    /* alert("函数：" + typeof(test)); */
    /* // 调用typeof null会返回"object" */
    /* alert("null的：" + typeof(null)); */
    /* // Undefined类型只有一个值，即特殊的undefined。在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined */
    /* alert("未定义：" + typeof(message1)); */
    //#endregion
    
    //#region Undefined类型

    var message2;
    // var age1;

    // 这个例子只声明了变量message，但未对其进行初始化。比较这个变量与undefined字面量，结果表明它们是相等的。
    // alert(message2 == undefined);

    // alert(message2);
    //尚未声明的变量age——则会导致一个错误
    // alert(age1);

    //typeof 都返还undefined的，如果上面有错误下面的代码就无法执行
    // alert(typeof(message2));
    // alert(typeof(age1));


    // var car = null;
    // alert(typeof car);//object


    var found = true;
    var lost = false;

    var message = "";
    //字符串message被转换成了一个Boolean值
    var messageAsBoolean = Boolean(message);
    // alert(messageAsBoolean);

    var intNum = 55;
    var octalNum1 = 070;//八进制56
    var octalNum2 = 079;
    var octalNum3 =08;

    var hexNum1 = 0xA; //十六进制的10
    var hexNum2 = 0x1f;

    alert(hexNum1);

    // alert(octalNum2);
    //#endregion



}
//alert(message);