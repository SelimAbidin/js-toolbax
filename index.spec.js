const {isObjectsValuesEqual} = require('./index.js')


test('isObjectsValuesEqual ', () => {
    
    let a = {a:1, b:2 }
    let b = {a:1, b:2 }
    let c = {a:10, b:20 }
    let d = {a:1, b:3 }
    let e = {a:1, b:2, c:3}

    
    expect(isObjectsValuesEqual(a, b)).toBe(true)
    expect(isObjectsValuesEqual(b, b)).toBe(true)
    expect(isObjectsValuesEqual(c, b)).toBe(false)
    expect(isObjectsValuesEqual(a, d)).toBe(false)
    expect(isObjectsValuesEqual(b, d)).toBe(false)
    expect(isObjectsValuesEqual(b, e)).toBe(false)
});