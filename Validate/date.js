var exports;
!function (global) {

    function date(value)
    {
        // ISO 8601 date
        var regex = /^(\d{4}-?\d{2}-?\d{2}|\d{4}-\d{2})$/;
        return regex.test(value);
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.date = date;
}(exports || this);