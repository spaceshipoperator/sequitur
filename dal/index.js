var sys = require("util");
var odbc = require("odbc");
var db = new odbc.Database();

var columnDef = function(c) {
    return {name: c, field: c, id: c};
};

exports.runQuery = function(req, res, next) {
    req.query = req.params["query"] || "" ;
    req.data = "{}";
    req.columns = "{}";

    if (req.query.length > 0) {
        db.open("DSN=thinkstats", function(err) {
            db.query(req.query, function(err, resultset) {
                if (resultset) {
                    req.data = JSON.stringify(resultset);
                    req.columns = JSON.stringify(Object.keys(resultset[0]).map(columnDef));
                    next();
                } else {
                    next();
                };
            });
        });
    } else {
        next();
    };
};

