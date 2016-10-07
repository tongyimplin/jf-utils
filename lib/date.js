/**
 * 获取完整的月，01-12
 */
Date.getFullMonth = function() {
    var m = this.getMonth()+1;
    return m<10 ? '0'+m : m;
}
/**
 * 获取完整的日, 01-31
 */
Date.getFullDate = function() {
    var d = this.getDate();
    return d<10 ? '0'+d : d;
}
/**
 * 获取完整的小时,0-23
 * @param isShort bool 默认是false,如果设置为true，那么小时的范围为1-12
 */
Date.getFullHour = function(isShort) {
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
Date.getFullMinus = function() {
    var m = this.getMinutes();
    return m<10 ? '0'+m : m;
}
/**
 * 获取完整的秒,0-59
 */
Date.getFullSeconds = function() {
    var s = this.getSeconds();
    return s<10 ? '0'+s : s;
}
/**
 * 获取完整的毫秒，0-999
 */
Date.getFullMilliseconds = function() {
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
Date.toFormattedString = function(formatter) {
    var format = formatter || 'yyyy-MM-dd';
    return format.replace('yyyy', this.getFullYear())
        .replace('MM', this.getFullMonth())
        .replace('dd', this.getFullDate())
        .replace('HH', this.getFullHour())
        .replace('hh', this.getFullHour(true))
        .replace('ss', this.getFullSeconds())
        .replace('SSS', this.getFullMilliseconds());
}


module.exports = {
};