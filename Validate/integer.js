var exports;
!function (global) {

    function integer(value)
    {
        value = parseInt(value, 10);
        return value !== NaN;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.integer = integer;
}(exports || this);