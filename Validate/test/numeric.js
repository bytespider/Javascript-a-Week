test("Numeric", function () {
    var value;

    // empty values
    value = '0';
    equal(Validate.numeric(value), true, value + ' is numeric');

    value = 1;
    equal(Validate.numeric(value), true, value + ' is numeric');

    value = '٦';
    equal(Validate.numeric(value), true, value + ' is numeric');

    value = 'ↂ';
    equal(Validate.numeric(value), true, value + ' is numeric');

    value = '⅜';
    equal(Validate.numeric(value), true, value + ' is numeric');

    value = 'Ⅲ';
    equal(Validate.numeric(value), true, value + ' is numeric');

    value = 'A';
    equal(Validate.numeric(value), false, value + ' is not numeric');

    value = null;
    equal(Validate.numeric(value), false, value + ' is not numeric');

    value = 'a';
    equal(Validate.numeric(value), false, value + ' is not numeric');
});