/**
 * 获取完整的月，01-12
 */
Date.prototype.getFullMonth = function() {
    var m = this.getMonth()+1;
    return m<10 ? '0'+m : m;
}
/**
 * 获取完整的日, 01-31
 */
Date.prototype.getFullDate = function() {
    var d = this.getDate();
    return d<10 ? '0'+d : d;
}
/**
 * 获取完整的小时,0-23
 * @param isShort bool 默认是false,如果设置为true，那么小时的范围为1-12
 */
Date.prototype.getFullHour = function(isShort) {
    var h = this.getHours();
    if(isShort) {
        h = h%12;
        if(h==0) h = 12;
    }
    return h<10 ? '0'+h : h;
}
/**
 * 获取完整的分,0-59
 */
Date.prototype.getFullMinus = function() {
    var m = this.getMinutes();
    return m<10 ? '0'+m : m;
}
/**
 * 获取完整的秒,0-59
 */
Date.prototype.getFullSeconds = function() {
    var s = this.getSeconds();
    return s<10 ? '0'+s : s;
}
/**
 * 获取完整的毫秒，0-999
 */
Date.prototype.getFullMilliseconds = function() {
    var s = this.getMilliseconds();
    return s<10 ? '00'+s : (s<100 ? '0'+s : s );
}

/**
 * 获取格式化后的日期
 * yyyy：年
 * MM：月
 * dd：日
 * HH：小时0-23
 * hh：小时0-12
 * mm：分钟
 * ss：秒
 * SSS：毫秒
 * @param formatter String 格式化字符串默认为yyyy-MM-dd
 */
Date.prototype.toFormattedString = function(formatter) {
    var format = formatter || 'yyyy-MM-dd';
    return format.replace('yyyy', this.getFullYear())
        .replace('MM', this.getFullMonth())
        .replace('dd', this.getFullDate())
        .replace('HH', this.getFullHour())
        .replace('hh', this.getFullHour(true))
        .replace('mm', this.getFullMinus())
        .replace('ss', this.getFullSeconds())
        .replace('SSS', this.getFullMilliseconds());
}

/**
 * 获取前一天
 */
Date.prototype.prevDate = function() {
    this.setDate(this.getDate()-1);
    return this;
}

/**
 * 获取下一天
 */
Date.prototype.nextDate = function() {
    this.setDate(this.getDate()+1);
    return this;
}

/**
 * 获取本周的时间范围
 */
Date.prototype.getCurWeekRange = function() {
    var date1 = new Date(this.getFormatDate());
    var date2 = new Date(this.getFormatDate());
    var d = this.getDay();
    date1.setDate(this.getDate()-(d==0?6:d-1));
    date2.setDate(this.getDate()+(d==0?0:7-d));
    return date1.getFormatDate() + ' ~ ' + date2.getFormatDate();
}

/**
 * 获取上一周
 */
Date.prototype.prevWeek = function() {
    this.setDate(this.getDate()-7);
    return this;
}

/**
 * 获取下一周
 */
Date.prototype.nextWeek = function() {
    this.setDate(this.getDate()+7);
    return this;
}

/**
 * 获取当前月
 */
Date.prototype.getCurMonth = function() {
    var m = this.getMonth()+1;
    if(m<10) {
        m = '0'+m;
    }
    return this.getFullYear()+'-'+m;
}

/**
 * 获取上一个月
 */
Date.prototype.prevMonth = function() {
    this.setMonth(this.getMonth()-1);
    var m = this.getMonth()+1;
    if(m<10) {
        m = '0'+m;
    }
    return this;
}

/**
 * 获取下一个月
 */
Date.prototype.nextMonth = function() {
    this.setMonth(this.getMonth()+1);
    var m = this.getMonth()+1;
    if(m<10) {
        m = '0'+m;
    }
    return this;
}

/**
 * 转到上一年
 */
Date.prototype.prevYear = function() {
    this.setFullYear(this.getFullYear()-1);
    return this;
}

/**
 * 转到下一年
 */
Date.prototype.nextYear = function() {
    this.setFullYear(this.getFullYear()+1);
    return this;
}

/**
 * 获取当前月最大天数
 */
Date.prototype.getCurMonthDayCount = function() {
    var d = new Date(this.getFormatDate());
    d.nextMonth().setDate(0);
    return d.getDate();
}


module.exports = Date;