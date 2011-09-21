var exports;
!function (global) {

    function checked(element)
    {
        return element.checked === true;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.checked = checked;
}(exports || this);