One Stop Banking API Details:

Signup API Link - http://localhost:5000/auth/signup
Json Data: {
	"name": "Hariesh",
	"email" : "harieshofficial@gmail.com",
	"phoneNumber": "9876543212"
}

Sign Up OTP API Link - http://localhost:5000/auth/otpsignup
Json Data: {
	"otp" : "6215"
}

Loign API Link - http://localhost:5000/auth/login
Json Data: {
	"email" : "ftazariah@gmail.com"
}

Login OTP API Link - http://localhost:5000/auth/otplogin
Json Data: {
	"otp": "6215"
}

Account Details API Link (Must be logged in) - http://localhost:5000/agg/account-data
Loan Information API Link (Must be logged in) - http://localhost:5000/loan/loan-data
Ask for Loan API Link (Must be Logged in) - http://localhost:5000/loan/
