const tietKiemController = {};

tietKiemController.post = (req,res) =>{

}

tietKiemController.get = (req,res) =>{
	var date =new Date();
	res.send("month: " + sum(date.getMonth(),1))
}

let sum =(a,b)=>{
	return a + b ;
}

module.exports = tietKiemController