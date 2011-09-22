test("Integer", function () {
    var value;

    // integer values
    value = 0;
    equal(Validate.integer(value), true, value + ' is an integer');

    value = 1;
    equal(Validate.integer(value), true, value + ' is an integer');

    value = -1;
    equal(Validate.integer(value), true, value + ' is an integer');

    value = "0";
    equal(Validate.integer(value), true, value + ' is an integer');

    value = "1";
    equal(Validate.integer(value), true, value + ' is an integer');

    value = "-1";
    equal(Validate.integer(value), true, value + ' is an integer');


    // not integer values
    value = 0.1;
    equal(Validate.integer(value), false, value + ' is not an integer');

    value = 'a';
    equal(Validate.integer(value), false, value + ' is not an integer');

    value = false;
    equal(Validate.integer(value), false, value + ' is not an integer');

    value = null;
    equal(Validate.integer(value), false, value + ' is not an integer');

    value = undefined;
    equal(Validate.integer(value), false, value + ' is not an integer');
});