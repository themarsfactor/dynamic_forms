const form_data = [
	{
		"name" : "firstname",
		"type": "text",
		"label": 'Enter first name',
		"required": false
	},

	{
		"name" : "lastname",
		"type": "text",
		"label": 'Enter last name', 
		"required": true
	},

	{
		"name" : "course",
		"type": "select",
		"label": 'Select Course of Study',
		"required": false, 
		"options" : [
					{
						"label": "Web Programming",
						"value": "web_programming"
					}, 
					{
						"label": "Front-End Development",
						"value": "frontend_development"
					},
					{
						"label": "Python Development",
						"value": "python_development"
					},



		]
	},
	
	{
		"name" : "email",
		"type": "email",
		"label": 'Enter email', 
		"required": false
	},
	{
		"name" : "password",
		"type": "password",
		"label": 'Enter password',
		"required": false
	}

];



export default form_data;

