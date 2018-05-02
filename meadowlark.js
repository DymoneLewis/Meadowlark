/**
 * Created by Fantasy on 2018/4/22.
 * 在Express中,路由和处理器的添加顺序至关重要,
 * 如果我们把404处理器放在所有路由的上面
 * 则首页和About界面都不能用
 */
var express = require('express');
var app = express();
var handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){      //添加路由,在Express文档中写的为app.VERB
    //res.type('text/plain');         //(VERB可以取多个值,最常见的为get和post)
    //res.send('Meadowlark Travel');  //该方法有两个参数,一个路径一个函数
    res.render('home');
});

app.get('/about',function(req,res){//添加路由
    //res.type('text/plain')
    //res.send('About Meadowlark Travel');
    var randomFortune =
        fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about',{fortune:randomFortune });
});

app.use(function(req,res){                  //定制404界面
    // res.type('text/plain');
    // res.status(404);
    // res.send('404 - Not Found');
    res.status(404);
    res.render('404');
});

app.use(function(err,req,res,next){         //定制500界面
    console.error(err.stack);
    // res.type('text/plain');
    // res.status(500);
    // res.send('500 - Server Error');
    res.status(500);
    res.render('500');
});

app.use(express.static(__dirname + '/public'));
app.listen(app.get('port'),function(){
    console.log( 'Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.')
});

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know",
    "Whenever possible,keep it possible",
];
