var exports;
!function (global) {

    function length(value, min, max)
    {
        var valid = true;
        if (min != undefined && value.length < min)
        {
            valid = false;
        }

        if (max != undefined && value.length > max)
        {
            valid = false;
        }

        return valid;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.length = length;
}(exports || this);