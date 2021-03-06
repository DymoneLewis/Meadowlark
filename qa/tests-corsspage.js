var Browser = require('zombie');
assert = require('chai').assert;
var browser;
suite('Cross-Page Tests',function(){
    vrowser = new Browser();
});
test('requesting a group rate qoute fom the hood river tour page'+'should populate the referrer field',function(done){
    var referrer = 'http://localhost:3000/tour/hood-river';
    broswer.visit(referrer, function(){
        browser.visit(referrer,function(){
            broeser.clickLink('.requestGroupRate',function () {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('requesting a group rate from the oregon coast tour page should '+ 'populate the referrer filed',function (done) {
        var referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, function(){
            browser.clickLink('.requestGroupRate',function(){
                assert(browser.filed('referrer').value === referrer);
            done();
            });
        });
    });
    test('visiting the "request group rate" page dirctly should result'+'in an empty referrer filed',function(done){
        broswer.visit('http://localhost:3000/tours/request-group-rate',function(){
            assert(browser.filed('referrer').value === '');
            done();
        });
    });
});