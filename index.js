//Типы данных

// Ответ: null. && возвращает первое ложное значение. Либо, если все верны, то последнее значение.

// Функции

function formatDate (day, mounth, year) {
    const dd = day >= 10 ? day : '0' + day;
    const mm = mounth >= 10 ? mounth : '0' + mounth;

    return `${dd}-${mm}-${year}`
}

console.log(formatDate(7, 10, 12));

// Map и Set

function removeDuplicateValues(array) {
    return [ ...new Set(array)];
}

console.log(removeDuplicateValues(["apple", "banana", "carrot", "apple", "juice", "sugar", "banana", "tomato", "bread"]));

// Деструктуризация

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [,,,forth,,six] = array;

console.log(forth, six)

const screenReader = {
    "type": "Monitor",
    "system": "Linux Ubuntu 22",
    "dimension": {
        "windowHeight": 720,
        "pixelRatio": "720dpi"
    }
}

let {
    dimension: {
        windowWidth: ww = 1920,
        windowHeight: wh,
        pixelRatio: pr
    }
} = screenReader;

console.log(ww, wh, pr)