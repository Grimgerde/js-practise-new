/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('Statue of Liberty', 'Built to stay free') === true
 * anagram('просветитель', 'терпеливость') === true
 * anagram('апельсин', 'Апельсин') === false
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
const transform = str => str.toLowerCase().split("").filter(function (item) { return item != " "; }).sort().join("");
function anagram(str1, str2) {
    if (str1 === str2) return false;
    return transform(str1) === transform(str2);
}
var str1 = "кабан", str2 = "б анка";
console.log(anagram(str1, str2));