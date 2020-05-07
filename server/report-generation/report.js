const express = require('express');
const app = express();

const pdf = require('pdf-creator-node');
const fs = require('fs');

const html = fs.readFileSync('template.html', 'utf8');

app.get('/', (req, res)=>{
	  var options = {
		    format: "A3",
		    orientation: "portrait",
		    border: "10mm",
		    header: {
				height: "45mm",
				contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
		    },
		    "footer": {
				"height": "28mm",
				"contents": {
					  first: 'Cover page',
					  2: 'Second page', // Any page number is working. 1-based index
					  default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
					  last: 'Last Page'
				}
		    }
	  };
	  let user = {
		    email: 'afifi@gmail.com',
		    reason :'i am tired',
		    from: '01-05-2020',
		    to: '05-05-2020'
	  }

	  var document = {
		    html: html,
		    data: {
				user: user
		    },
		    path: "./output.pdf"
	  };

	  pdf.create(document, options)
		    .then(res => {
				console.log(res)
		    })
		    .catch(error => {
				console.error(error)
		    });
})


app.listen(8081, ()=>{
	  console.log('server is running at port 8081');
})
