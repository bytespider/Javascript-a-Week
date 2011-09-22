var exports;
!function (global) {

    function alphanum(value)
    {
        var regex = /^[a-zA-Z0-9]+$/;
        return regex.test(value);
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.alphanum = alphanum;
}(exports || this);