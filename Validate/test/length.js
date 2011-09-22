test("Length", function () {
    var value;

    // empty values
    value = 'foo';
    equal(Validate.length(value, 1), true, value + ' is longer than 1');

    value = 'foo';
    equal(Validate.length(value, 1, 3), true, value + ' is between 1 and 3 long');

    value = 'foo';
    equal(Validate.length(value, 3), true, value + ' is 3 or more long');

    value = 'foobar';
    equal(Validate.length(value, 1, 3), false, value + ' is not between 1 and 3 long');
});