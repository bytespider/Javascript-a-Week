var exports;
!function (global) {

    function postcode(value)
    {
        // http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
        var regex = /^([A-PR-UWYZ]([0-9]([0-9]|[A-HJKSTUW])?|[A-HK-Y][0-9]([0-9]|[ABEHMNPRVWXY])?)[0-9][ABD-HJLNP-UW-Z]{2}|GIR0AA)$/;
        return regex.test(value);
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.postcode = postcode;
}(exports || this);