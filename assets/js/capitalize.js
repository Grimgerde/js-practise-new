/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */
var text="А роза упала на лапу Азора";

function capitalize(text) {
    let r=text.split(" ");
    return r
        .map(value => value.charAt(0).toUpperCase() + value.slice(1))
        .join(" ");
}
console.log(capitalize(text));