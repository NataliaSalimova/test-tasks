//Типы данных

// Ответ: null. && возвращает первое ложное значение. Либо, если все верны, то последнее значение.

// Функции
// Не поняла нужно вернуть дату через объект Date или просто сформировать строку.
// Сделала оба варианта

// Добавила соответствующие проверки. Изначально не придала этим проверкам никакого значения, так как подумала, что
// главное показать, что умею работать с функциями. А уточнения, в каком формате должны возвращаться данные, не было.

function formatDate (year, mounth, day) {
    if (day === 0 || day > 31) {
        alert('Введите другое значение дня. Значение должно быть больше 0 и меньше 32');
        return;
    }
    if (String(year).length < 4) {
        alert('Значение года должно состоять из 4-х символов');
        return;
    }

    if (mounth === 0 || mounth > 12) {
        alert('Введите другое значение месяца. Значение должно быть больше 0 и меньше 13');
        return;
    }

    const dd = day >= 10 ? day : '0' + day;
    const mm = mounth >= 10 ? mounth : '0' + mounth;

    return `${dd} + '.' + ${mm} + '.' + ${year}`;

    // Через объект new Date

    // const date = new Date(year, mounth, day);
    //
    // let dd = date.getDate();
    // if (dd < 10) dd = '0' + dd;
    //
    // let mm = date.getMonth() + 1;
    // if (mm < 10) mm = '0' + mm;
    //
    // let yy = date.getFullYear();
    //
    // return dd + '.' + mm + '.' + yy;
}

// Map и Set

function removeDuplicateValues(array) {
    return [ ...new Set(array)];
}

console.log(removeDuplicateValues(["apple", "banana", "carrot", "apple", "juice", "sugar", "banana", "tomato", "bread"]));

// Объекты
// Упустила момент, что один из ключей не является примитивом. Поправила

let Data = {
    name: "John",
    lastname: "Doe",
    age: 23,
    sex: "male",
    city: "London",
    adddress: "Oxford street, 25",
    ZIP: 132456,
    hobby: ["reading books", "jogging", "play guitar", "tets"]
}

function deepCopy(property) {
    if (typeof property !== 'object') return property;

    let copyData = Array.isArray(property) ? [] : {};

    for (let key in property) {
        copyData[key] = deepCopy(property[key]);
    }

    return copyData;
}

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

