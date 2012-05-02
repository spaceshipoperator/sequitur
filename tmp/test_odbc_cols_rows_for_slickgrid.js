var sys = require("util");
var odbc = require("odbc");
var db = new odbc.Database();
var rows = [];
var columns = [];

var columnDef = function(c) {
    return {"name": c, "field": c, "id": c};
};

db.open("DSN=thinkstats", function(err) {
    db.query("select birthwgt_oz, prglength, outcome from fem_preg_2002 limit 10", function(err, resultset) {
        rows = resultset;
        columns = Object.keys(rows[0]).map(columnDef);
    });
});
