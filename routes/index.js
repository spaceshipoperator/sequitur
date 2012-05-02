
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express', data: req.data, columns: req.columns, query: req.query })
};