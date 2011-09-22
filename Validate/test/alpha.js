test("Alpha", function () {
    var value;

    // empty values
    value = 'Hello';
    equal(Validate.alpha(value), true, value + ' is alpha');

    value = 'Фэсапщи';
    equal(Validate.alpha(value), true, value + ' is alpha');

    value = '您好';
    equal(Validate.alpha(value), true, value + ' is alpha');

    value = 'イランカラプテ';
    equal(Validate.alpha(value), true, value + ' is alpha');

    value = '123456';
    equal(Validate.alpha(value), false, value + ' is not alpha');

    value = 'a1b2c';
    equal(Validate.alpha(value), false, value + ' is not alpha');

    value = 9;
    equal(Validate.alpha(value), false, value + ' is not alpha');
});