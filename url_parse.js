var exports; // define it if it doesnt exist
!function (global) {
    function Url(scheme, username, password, host, port, path, query_string, fragment)
    {
        /* Set up some defaults */
        this.scheme = scheme || 'http';
        this.username = username || "";
        this.password = password || "";
        this.host = host;
        this.port = parseInt(port, 10);
        this.path = path || "";
        this.fragment = fragment || "";
        query_string = query_string || "";

        if (this.scheme == 'http' && !this.port)
        {
            this.port = 80;
        }
        else if(this.scheme == 'https' && !this.port)
        {
            this.port = 443;
        }
        else if(this.scheme == 'ftp' && !this.port)
        {
            this.port = 20;
        }

        /* Parse the query string */
        var queryRegex = /\?([a-zA-Z0-9]*)(=([a-zA-Z0-9]*))?/g;
        var query = {};
        query_string.replace(queryRegex, function (str, $1, $2, $3) {
            query[$1] = $3;
            return str;
        });

        this.query = query;
    }

    Url.prototype = {
        scheme: "",
        username: "",
        password: "",
        host: "",
        port: "",
        path: "",
        query: {},
        fragment: "",
        toString: function ()
        {
            var url = [this.scheme];
            if (this.username)
            {
                var authority = this.username;
                if (this.password)
                {
                    authority += ":" + this.password;
                }

                url.push(authority + "@");
            }

            url.push(this.host);

            if ((this.scheme == 'http' && this.port != 80) ||  (this.scheme == 'https' && this.port != 443) ||  (this.scheme == 'ftp' && this.port != 20))
            {
                url.push(":" + this.port);
            }

            url.push(this.path);

            var queryArray = [];
            var queryString = "";

            for (var i in this.query)
            {
                if (this.query[i] !== "")
                {
                    queryArray.push(i + "=" + this.query[i]);
                }
                else
                {
                    queryArray.push(i);
                }
            }

            queryString = queryArray.join("&");

            if (queryString !== "")
            {
                url.push("?" + queryString);
            }

            if (this.fragment)
            {
                url.push("#" + this.fragment);
            }

            return url.join("");
        }
    };

    Url.parse = function (url)
    {
        var regex = /(([a-zA-Z][a-zA-Z0-9+\-\.]+):\/\/)((([a-zA-Z0-9\-\._~]*)(:([a-zA-Z0-9\-\._~]*))?@)?)([a-zA-Z0-9+\-\.]*)(:([0-9]*))?(\/(([a-zA-Z\+\-\.\/]|(%[0-9]{2}))*))?(\?([a-zA-Z0-9]*(=[a-zA-Z0-9]*)?&?)*)?(#([a-zA-Z0-9]*))?/;
        var matches = url.match(regex);

        var scheme = matches[2].toLowerCase();
        var username = matches[5];
        var password = matches[7];
        var host = matches[8];
        var port = matches[10];
        var path = matches[11];
        var query_string = matches[15];
        var fragment = matches[19];

        var location = new Url(scheme, username, password, host, port, path, query_string, fragment);
        return location;
    }

    global.JsWeekly = global.JsWeekly || {};
    global.JsWeekly.Url = Url;
}(exports || this);