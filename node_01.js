//console.log("Hello World");


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World rohan das');
res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Intrest Survey Form</title>
    <style>
        
        border{
            background-size: cover;
        }
        form {
            background-position: center;
            /* background-color:whitesmoke; */
            /* color:whitesmoke; */
            width: 700px;
            
            /* background-position-x: center; */


        }

        div {
            background-image: url(php.jpeg);
            /* background-repeat:repeat-y; */
            border: solid;
            width: fit-content;
            color:rgb(5, 64, 83);

            /* background-color: black; */
            background-position: center;
        }
        h1{
            /* color:aqua; */
            background-size: center;
        }
       .inastagram{
           background-position: bottom;
       }
        .textarea{
            /* border: solid; */
            background: scroll;
            
        }
        .name{
            background: transparent;
        }
        .dipartment{
            background: transparent;
        }
        .dipartment{
            background: transparent;
        }
        .do{
            color:rgb(6, 83, 109);
        }
    </style>
</head>

<body>
    <div>
        <h1>Employee Intrest Survey Form</h1>
        <form action="form.php">
            <tr>
                <td>Enter Your Name</td>
                <input class="name" type="text">
            </tr><br><br>
            <tr>
                <td>Enter Your Dipartment</td>
                <td><input type="Enter Your Dipartment" class="dipartment"></td>
            </tr><br><br>
            <tr>
                <td>Tell Us A About Your Self</td>
                <textarea name="Tell Us A About Your Self" class="textarea" cols="30" rows="10"></textarea>
            </tr><br><br>
            <p>Do You Exercise At Home ?
                <input type="radio" name="exe" value="1">Yes
                <input type="radio" name="exe" value="2">No
            </p><br><br>
            <p>How Do You Like To Read About Your Favorite Topics ?</p>
            <p>
                <input type="radio" name="exe">Books
                <input type="radio" name="exe" id="">Online Resoures
                <input type="radio" name="exe" id="">Phone App
                <input type="radio" name="exe">Magzines
            </p><br>
            <p class="do">What Genre Of Movie Do You Like
                <select name="moviepref">
                    <option>
                    <option value=1 selected="true">comedy
                    <option value=2>romance
                    <option value=3>thriller
                    <option value=4>horror
                    <option value=5>biopic
                </select>
            </p>
            <p><button>Submit Form</button></p>
            <nav>
                <ul class="instagram">
                    <li><a href="https://www.instagram.com/itz_s_aurabh/" target="_blank"><img src="Free Icon _ Instagram.png" alt="img" width="30px"></a></li>
                    <li><a href="https://m.facebook.com/saurabh.sahare.986?_rdr" target="_blank">Facebook</a></li>
                </ul>

            </nav>


        </form>
    </div>
    
</body>

</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});