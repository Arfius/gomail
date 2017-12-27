# GoMail
### nodemailer Wrapper 



#### Usage
1. var gomailer = require('gomail')
2. var filepath=/path/to/nodemailer/config.json
3. var transporter = gomailer.createEmail(filepath)
4. var mailoption = gomailer.createMailOption();
5. gomailer.sendEMail(transporter,mailOptions)

#### filepath
```
{
  "configuration":
    {
      "host": "mail.itsapp.it",
      "port": 587,
      "auth": {
        "user": "itsapp.it@gmail.com",
        "pass": "talemascurdavu"
            }
    }
}
```
#### mailoption
gomailer.createMailOption() creates the below json object.
Modify the values and pass it to gomailer.sendEMail().

```
{
    "from: "itsapp.it@gmail.com",
    "to": "itsapp.it@gmail.com",
    "subject": "Test invio email",  
    "text": "Test invio email",  
    "html": "<b>Test invio email</b>"  
}
```   