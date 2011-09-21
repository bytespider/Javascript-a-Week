var exports;
!function (global) {

    function integer(value)
    {
        var integer = parseInt(value, 10);
        if (isNaN(integer))
        {
            return false;
        }

        // parseInt will return if value starts with a number, so check if it
        // did match a valid integer by comparison to the original
        return integer == value;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.integer = integer;
}(exports || this);