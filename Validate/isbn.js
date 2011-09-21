var exports;
!function (global) {

    var patterns = [];
    function isbn(value, seperator)
    {
        var regex_isbn10 = /^[0-9]{1,7}[0-9]{1,7}[0-9]{1,7}[0-9X]{1}$/;
        var length_isbn10 = 10;
        var regex_isbn13 = /^[0-9]{1,13}$/;
        var length_isbn13 = 13;

        if (seperator !== undefined)
        {
            regex_isbn10 = new RegExp("^[0-9]{1,7}" + seperator + "[0-9]{1,7}"
              + seperator + "[0-9]{1,7}" + seperator + "[0-9X]{1}$");
            length_isbn10 = 13;

            regex_isbn13 = new RegExp("^[0-9]{1,9}" + seperator + "[0-9]{1,5}"
              + seperator + "[0-9]{1,9}" + seperator + "[0-9]{1,9}" + seperator
              + "[0-9]{1}$/");
            length_isbn13 = 17;
        }

        if (value ==)
        {

        }
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Validate = global.JsWeekly.Validate || {};
    global.JsWeekly.Validate.isbn = isbn;
}(exports || this);