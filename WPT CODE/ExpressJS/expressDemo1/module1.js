
exports.addition = function (a, b) {
    add = a + b;
    return add;
}

exports.factorial = function (no) {
    f = 1;

    for (var i = no; i > 0; i--) {
        f = f * i;
    }

    return f;
}