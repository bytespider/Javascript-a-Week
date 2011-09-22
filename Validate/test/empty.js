test("Empty", function () {
    var value;

    // empty values
    value = '';
    equal(Validate.empty(value), true, '"" is empty');

    value = 0;
    equal(Validate.empty(value), true, value + ' is empty');

    value = 0.0;
    equal(Validate.empty(value), true, value + ' is empty');

    value = null;
    equal(Validate.empty(value), true, value + ' is empty');

    value = undefined;
    equal(Validate.empty(value), true, value + ' is empty');

    value = [];
    equal(Validate.empty(value), true, '[] is empty');


    // not empty values
    value = 'some text';
    equal(Validate.empty(value), false, value + ' is empty');

    value = '0';
    equal(Validate.empty(value), false, value + ' is empty');

    value = '0.0';
    equal(Validate.empty(value), false, value + ' is empty');

    value = 0.1;
    equal(Validate.empty(value), false, value + ' is empty');

    value = 1;
    equal(Validate.empty(value), false, value + ' is empty');

    value = ["value"];
    equal(Validate.empty(value), false, value + ' is empty');

});