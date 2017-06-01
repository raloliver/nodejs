function uppercase(string) {
    return string.toUpperCase()
}

// da forma tradicional utilizariamos uppercase:uppercase (uppercase, atributo, recebe uppercase função)
// no ES2015 utilizamos apenas a notação de objeto { uppercase }
module.exports = { uppercase }