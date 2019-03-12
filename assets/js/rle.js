/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * @param  {string} input
 * @return {string}
 */
function rle(str)
{
    const rip = /(.)\1*/g;
    let arr = str.match(rip);
    var resultArray = [];

    for(let i=0;i<arr.length;i++)
    {
        let str1 = arr[i];
        var n=str1.length;
        var arr2=str1.split("");
        if (n>1) {resultArray.push(arr2[0],n);}
        else resultArray.push(arr2[0]);
    }
    
    return resultArray.join("");
}
var str=("AAAAAAAABBBBBBBBBBBBBBCCDDDDDDD");
console.log(rle(str));