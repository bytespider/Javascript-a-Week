var exports;
!function (global) {

    function zipcode(value)
    {
        // http://en.wikipedia.org/wiki/Zipcode
        var regex = /^\d{5}$/
        return regex.test(value);
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.zipcode = zipcode;
}(exports || this);