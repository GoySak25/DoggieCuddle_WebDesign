const express = require('express');
const connectDB = require('./config/db')
const nodemailer= require('nodemailer');

const app = express();

connectDB();

app.use(express.json({extended:false, limit: '2mb'}));
app.use(express.urlencoded({limit: '2mb', extended: false}));
 app.use('/uploads', express.static('uploads'));

app.get('/', (req,res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'));



app.post('/api/email', (req, res)=>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail=`
        <h3>Contact details</h3>
        <ul>
            <li>Contact Detail: ${req.body.emailFrom}</li>
        </ul>
        <p>${req.body.message}</p>
        `

        let transporter =nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth:{
                user: 'DoggieCuddle@gmail.com',
                pass:''
            }
        });
        let mailOptions={
            from: 'DoggieCuddle@gmail.com',
            to: req.body.emailTo,
            subject: 'DoggieCuddle found a bone for your dog!!',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("email sent successfully");
                console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
            }
        })
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));