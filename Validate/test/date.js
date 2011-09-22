test("Date", function () {
    var value;

    // empty values
    value = '2011-09-22';
    equal(Validate.date(value), true, value + ' is a valid date');

    value = '20110922';
    equal(Validate.date(value), true, value + ' is a valid date');

    value = '2011-09';
    equal(Validate.date(value), true, value + ' is a valid date');

    value = '22-09-2011';
    equal(Validate.date(value), false, value + ' is not a valid date');

    value = '09-2011';
    equal(Validate.date(value), false, value + ' is not a valid date');
});