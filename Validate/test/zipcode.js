test("Zipcode", function () {
    var value;

    // valid postcodes
    value = "35801";
    equal(Validate.zipcode(value), true, value + ' is a zipcode');

    value = "83254";
    equal(Validate.zipcode(value), true, value + ' is a zipcode');

    value = "98009";
    equal(Validate.zipcode(value), true, value + ' is a zipcode');

    value = "37222";
    equal(Validate.zipcode(value), true, value + ' is a zipcode');

    value = "03217";
    equal(Validate.zipcode(value), true, value + ' is a zipcode');

    value = "07039";
    equal(Validate.zipcode(value), true, value + ' is a zipcode');
});