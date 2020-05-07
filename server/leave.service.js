const express = require('express');

// Request leave application handle
function requestLeave(req, res){
	  const body = {
		    email: req.body.email,
		    reason: req.body.reason,
		    from: new Date(req.body.from),
		    to : new Date(req.body.to)

	  };

	  //validate body
	  // add to requests dataase
	  // display request to admin
	  // if aproved remove from database
	  // else if rejected

}


