var exports;
!function (global) {

    function equal(value, equals)
    {
        return value === equals;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.equal = equal;
}(exports || this);