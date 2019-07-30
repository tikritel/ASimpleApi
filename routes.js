const moviedetails = require('./moviedetails');
const useriddetails = require('./useriddetails');
const postrequest = require('./postrequest');



module.exports = {
	configure:function(app){
		app.get('/moviedetails', async function (req, res) {
			try{
				const result = await moviedetails.getAllMoviedetails();	//works async with only the rest of the code in try block. Whatever else is out of the try/catch block runs sunchronously
				res.json(result);
			}catch(err){
				throw err;
			}
		});
        
       

		app.get('/moviedetails/:movieId', async function (req, res) {
			try{
				const result = await moviedetails.getMoviedetailsById(req.params.movieId);//για οποιο id βαζω μ βρισκει τη 
				res.json(result);
			}catch(err){
				throw err;
			}
		});
        
        app.post('/moviedetails/:movieId', async function (req, res) {
			try{
				const result = await moviedetails.getMoviedetailsById(req.body);//για οποιο id βαζω μ βρισκει τη 
				res.json(result);
			}catch(err){
				throw err;
			}
		});
        
        app.get('/useriddetails', async function (req, res) {
			try{
				const result = await useriddetails.getAllUseriddetails();	//works async with only the rest of the code in try block. Whatever else is out of the try/catch block runs sunchronously
				res.json(result);
			}catch(err){
				throw err;
			}
		});
        
        app.get('/useriddetails/:userId', async function (req, res) {
			try{
				const result = await useriddetails.getUseriddetailsById(req.params.userId);//για οποιο id βαζω μ βρισκει τη 
				res.json(result);
			}catch(err){
				throw err;
			}
		});
        

	}
};