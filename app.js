console.log("Its Working")

const filterOutOdds = (...arguments) => arguments.filter((num)=> num % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj, obj2) => ({...obj, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num *2)]

const removeRandom = (items)=> {
    const randomIndex = Math.floor(Math.random()* items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex+1)];
}

const extend = (array1, array2) => {
   return [...array1, ...array2]
}

const addKeyVal = (obj,key,val) => {
    let newObj = {...obj};
    newObj[key]= val;
    return newObj;
}

const removeKey = (obj,key) => {
    let newObj = {...obj};
    newObj[key].shift
    return newObj;
}

const combine = (obj1, obj2) => {
    let combined = {...obj1, ...obj2};
    return combined;
}

const update = (obj, key, val) => {
    let updated = {...obj};
    updated[key] = val;
    return updated;
}


