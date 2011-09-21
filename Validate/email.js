var exports;
!function (global) {

    function email(value)
    {
        //var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regex = /^(((?![a-zA-Z0-9])\".+?\"(?![a-zA-Z0-9])|[a-zA-Z0-9!#$%&'*+\-\/=\?^_`{|}~]+)(\.(?!@))?)+@([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}|[a-zA-Z0-9!#$%&'*+\-\/=\?^_`{|}~]+\.([a-zA-Z]{3,4}|[a-zA-Z]{2}(\.[a-zA-Z]{2})?))$/;
        return regex.test(value);
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.email = email;
}(exports || this);