require('../lib/date.js');
var expect = require('chai').expect;
describe('date.js测试', function() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    if(month<10) month = '0'+month;
    var date = d.getDate();
    if(date<10) date = '0'+date;
    var hour = d.getHours();
    if(hour<10) hour = '0'+hour;
    var hour1 = d.getHours()%12;
    if(hour1==0) hour1 = 12;
    if(hour1<10) hour1 = '0'+hour1;
    var minutes = d.getMinutes();
    if(minutes<10) minutes = '0'+minutes;
    var sec = d.getSeconds();
    if(sec<10) sec = '0'+sec;
    var msec = d.getMilliseconds();
    if(msec<10) {
        msec = '00'+msec;
    }else if(msec<100) {
        msec = '0'+msec;
    }
    var format = `${year}-${month}-${date} ${hour}:${minutes}:${sec}.${msec}`;

    it(`获取到的年应该是${year}`, function() {
        expect(d.toFormattedString('yyyy')).to.be.equal(`${year}`);
    });
    
    it(`获取到的月应该是${month}`, function() {
        expect(d.toFormattedString('MM')).to.be.equal(`${month}`);
    });

    it(`获取到的日应该是${date}`, function() {
        expect(d.toFormattedString('dd')).to.be.equal(`${date}`);
    });

    it(`获取到的小时（24小时制）应该是${hour}`, function() {
        expect(d.toFormattedString('HH')).to.be.equal(`${hour}`);
    });

    it(`获取到的小时（12小时制）应该是${hour1}`, function() {
        expect(d.toFormattedString('hh')).to.be.equal(`${hour1}`);
    });

    it(`获取到的分钟应该是${minutes}`, function() {
        expect(d.toFormattedString('mm')).to.be.equal(`${minutes}`);
    });

    it(`获取到的秒应该是${sec}`, function() {
        expect(d.toFormattedString('ss')).to.be.equal(`${sec}`);
    });

    it(`获取到的秒应该是${msec}`, function() {
        expect(d.toFormattedString('SSS')).to.be.equal(`${msec}`);
    });

    it(`获取格式化后的时间应该是${format}`, function() {
        expect(d.toFormattedString('yyyy-MM-dd HH:mm:ss.SSS')).to.be.equal(`${format}`);
    });

    var d1 = new Date('2016-10-01');
    d1.prevDate();
    var prvD = d1.toFormattedString();

    it(`2016-10-01的昨天是${prvD}`, function() {
        expect(d1.toFormattedString('yyyy-MM-dd')).to.be.equal(`2016-09-30`);
    });

    var d2 = new Date('2016-09-30');
    d2.nextDate();
    var prvD = d2.toFormattedString();
    it(`2016-09-30的明天是${prvD}`, function() {
        expect(d2.toFormattedString('yyyy-MM-dd')).to.be.equal(`2016-10-01`);
    });
});