//两个数比较
//避免在XHTML中出现类似语法错误的方法有两个。一是用相应的HTML实体（&lt;）替换代码中所有的小于号（<）
//保证让相同代码在XHTML中正常运行的第二个方法，就是用一个CData片段来包含JavaScript代码。在XHTML（XML）中，
//CData片段是文档中的一个特殊区域，这个区域中可以包含不需要解析的任意格式的文本内容。因此，在CData片段中就可以使用任意字符
function compare(a,b){
    if(a < b){
        alert("A is less than B");
    }else if(a > b){
        alert("A is greater than B");
    }else{
        alert("A is equal to B");
    }
}