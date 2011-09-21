var exports;
!function (global) {

    function zipcode(value)
    {
        var regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/
        return regex.test(value);
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.zipcode = zipcode;
}(exports || this);