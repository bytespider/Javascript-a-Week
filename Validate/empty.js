var exports;
!function (global) {

    function empty(value)
    {
        switch (true)
        {
            case "" === value:
            case 0 === value:
            case 0.0 === value:
            case null === value:
            case false === value:
            case undefined === value:
            case 0 === value.length:
                return true
        }

        return false;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.empty = empty;
}(exports || this);