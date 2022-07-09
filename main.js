const express = require('express')

var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// các route
app.get('', function(req,res){
    res.send('<form method="POST" action="/register"><button>Register</button></form>')
  })
// http://localhost:3000/hello?name=hoang&email=hoangpentakills@gmail.com&phone=0397801944
  app.get('/hello', function(req,res){
    console.log(req.query)
    var name = req.query.name
    res.send({result: req.query})
  })
// http://localhost:3000/student/vu-hoang
  app.get('/student/:name', function(req,res){
    var name = req.query.name
    res.send({result: req.params})
  })
  // Nhận dữ liệu từ client lên 
  // thông qua phương thức POST
  app.post('/register',function(req,res){
    //console.table(req.body)
    res.send({result: req.body})
  })
  // Nhận dữ liệu từ client lên 
  // thông qua phương thức PUT
  app.put('/update',function(req,res){
    var respomData = {
        "message": "Cập nhật dữ liệu thành công",
        "data": req.body,
        "status": true
    }
    res.send(respomData)
  })
  // Nhận dữ liệu từ client lên 
  // thông qua phương thức DELETE
  app.delete('/delete/:id',function(req,res){
    var id = req.params.id
    res.send('Hello delete' + id)
  })

app.listen(3000,function(req,res){
    console.log('Ứng dụng đang chạy trên cổng http://localhost:3000')
})

// req.query => get | delete
// req.params => get | delete
// req.query => post | put (Cài thêm gói body-parser)