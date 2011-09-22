test("Postcode", function () {
    var value;

    // valid postcodes
    value = "M1 1AA";
    equal(Validate.postcode(value), true, value + ' is a postcode');

    value = "B33 8TH";
    equal(Validate.postcode(value), true, value + ' is a postcode');

    value = "CR2 6XH";
    equal(Validate.postcode(value), true, value + ' is a postcode');

    value = "DN55 1PT";
    equal(Validate.postcode(value), true, value + ' is a postcode');

    value = "W1A 1HQ";
    equal(Validate.postcode(value), true, value + ' is a postcode');

    value = "EC1A 1BB";
    equal(Validate.postcode(value), true, value + ' is a postcode');
});