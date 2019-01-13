module.exports = (app) => {
    app.get('/', (req, res) => {
        // render home page 
        res.render('index');
    });

    app.get('/choice', (req, res) => {
        // render choice page
        res.render('option');
    });

    app.get('/investor/signup', (req, res) => {
        //render investor signup home page
        res.render('investor-signup');
    })
}