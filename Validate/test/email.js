test("Email", function () {
    var email;

    // valid email addresses
    email = 'niceandsimple@example.com';
    equal(Validate.email(email), true, email + ' is a vaild email address');

    email = 'a.little.unusual@example.com';
    equal(Validate.email(email), true, email + ' is a vaild email address');

    email = 'much."more\ unusual"@example.com';
    equal(Validate.email(email), true, email + ' is a vaild email address');

    email = 'very.unusual."@".unusual.com@example.com';
    equal(Validate.email(email), true, email + ' is a vaild email address');

    email = '"first\last"@iana.org';
    equal(Validate.email(email), true, email + ' is a vaild email address');

    /* @todo: get this complicated example to pass */
    email = 'very."(),:;<>[]".VERY."very\\\ \@\"very".unusual@cool.example.com';
    equal(Validate.email(email), true, email + ' is a vaild email address');

    email = 'me@123.123.123.123';
    equal(Validate.email(email), true, email + ' is a vaild email address');


    // invalid email addresses
    email = 'Abc.example.com';
    equal(Validate.email(email), false, email + ' is an invaild email address');

    email = 'A@b@c@example.com';
    equal(Validate.email(email), false, email + ' is an invaild email address');

    email = '"(),:;<>[\]@example.com';
    equal(Validate.email(email), false, email + ' is an invaild email address');

    email = 'just"not"right@example.com';
    equal(Validate.email(email), false, email + ' is an invaild email address');

    email = 'this\ is\"really\"not\\allowed@example.com';
    equal(Validate.email(email), false, email + ' is an invaild email address');
});