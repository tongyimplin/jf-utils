
/**
 * for logger
 * 
 */

const VueLogger = function(page, level, dateFormat) {
    this.page = page || 'null';
    this.level = level || LEVEL_LIST.DEBUG;
    this.dateFormat = dateFormat || settings.dateFormat;
    this.lebelPool = {};
};
const styles = {
    console: 'font-size:12px; color:#C4C4C4; font-family: Consolas',
    debug: 'font-size:12px; color: #436EEE; font-family: Consolas',
    warn: 'font-size:12px; color: #CDAD00; font-family: Consolas',
    info: 'font-size:12px; color: #2E2E2E; font-family: Consolas',
    error: 'font-size:12px; color:#FF1111; font-family: Consolas'
};

VueLogger.prototype = {
    debug: function() {
        if(this.level === LEVEL_LIST.DEBUG) {
            this.log.call(this, LEVEL_LIST.DEBUG, arguments);
        }
    },
    warn: function() {
        if(this.level === LEVEL_LIST.DEBUG
            || this.level === LEVEL_LIST.WARN) {
            this.log.call(this, LEVEL_LIST.WARN, arguments);
        }
    },
    info: function() {
        if(this.level === LEVEL_LIST.DEBUG
            || this.level === LEVEL_LIST.WARN
            || this.level === LEVEL_LIST.INFO) {
            this.log.call(this, LEVEL_LIST.INFO, arguments);
        }
    },
    error: function() {
        if(this.level === LEVEL_LIST.DEBUG
            || this.level === LEVEL_LIST.WARN
            || this.level === LEVEL_LIST.INFO
            || this.level === LEVEL_LIST.ERROR) {
            this.log.call(this, LEVEL_LIST.ERROR, arguments);
        }
    },
    fatal: function() {
        if(this.level === LEVEL_LIST.DEBUG
            || this.level === LEVEL_LIST.WARN
            || this.level === LEVEL_LIST.INFO
            || this.level === LEVEL_LIST.ERROR
            || this.level === LEVEL_LIST.FATAL) {
            this.log.call(this, LEVEL_LIST.FATAL, arguments);
        }
    },
    /**
     * 记录一个标签的开始时间
     */
    debugStart: function(label) {
        if(label) {
            this.lebelPool[label] = [new Date().getTime()];
        }
    },
    debugTime: function(label) {
        if(label) {
            if(this.lebelPool.hasOwnProperty(label)) {
                let stamp = new Date().getTime();
                let curLabel = this.lebelPool[label];
                curLabel.push(stamp);
                let curIdx = curLabel.length;
                let lastGap = stamp-curLabel[curIdx-2];
                let outStr = '这是您第'+curLabel.length
                    +'次计'+label+'距离上次的时间为'+
                    +lastGap+'ms';
                if(curIdx>2) {
                    let firstGap = stamp-curLabel[0];
                    outStr += ', 距离第一次的时间为'+firstGap+'ms';
                }
                console.log(outStr);
            }else {
                this.warn('您输入的[ '+label+' ]不存在');
            }
        }
    },
    log: function(level, args) {
        let dateStr = this.getFormattedDate();
        let outStr = '['+dateStr+']['+this.page+']['+level+'] ';
        let outStr1 = '';
        if(args) {
            for(let i=0, len=args.length; i<len; i++) {
                outStr1 += args[i];
                if(i<len-1) {
                    outStr1 += ', ';
                }
            }
        }
        if(level === LEVEL_LIST.WARN) {
            console.log('%c%s',styles.warn, outStr);
            console.warn(outStr1);
        }else if(level === LEVEL_LIST.FATAL) {
            console.log('%c%s',styles.error, outStr);
            console.error(outStr1);
        }else if(level === LEVEL_LIST.DEBUG) {
            console.log('%c%s',styles.debug, outStr);
            console.log('%c%s', styles.debug, outStr1);
        }else if(level === LEVEL_LIST.INFO) {
            console.log('%c%s',styles.info, outStr);
            console.log('%c%s', styles.info, outStr1);
        }else if(level === LEVEL_LIST.ERROR) {
            console.log('%c%s',styles.error, outStr);
            console.log('%c%s', styles.error, outStr1);
        }
    },
    getFormattedDate: function () {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        if(month<10) month = '0'+month;
        let date = d.getDate();
        if(date<10) date = '0' +date; 
        let hour = d.getHours();
        if(hour<10) hour = '0'+hour;
        let minutes = d.getMinutes();
        if(minutes<10) minutes = '0'+minutes;
        let seconds = d.getSeconds();
        if(seconds<10) seconds = '0'+seconds;
        let ms = d.getMilliseconds();
        if(ms<10) {
            ms = '00'+ms;
        }else if(ms<100) {
            ms = '0'+ms;
        }

        let dateStr = this.dateFormat.replace('yyyy', year)
            .replace('MM', month)
            .replace('dd', date)
            .replace('HH', hour)
            .replace('mm', minutes)
            .replace('ss', seconds)
            .replace('SSS', ms);
        return dateStr;
    }
};

const LEVEL_LIST = {
    DEBUG: 'DEBUG',
    WARN: 'WARN',
    INFO: 'INFO',
    ERROR: 'ERROR',
    FATAL: 'FATAL'
};

//配置变量
const settings = {
    curLevel: LEVEL_LIST.DEBUG,
    // dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS'
    dateFormat: 'yyyy-MM-dd HH:mm:ss'
};

/**
 * 将arguments转换成一个数组
 */
VueLogger.arumentsToArray = function(darguments) {
    let args = [];
    for(let i=0, len=darguments.length; i<len; i++) {
        args[i] = darguments[i];
    }
    return args;
}

// VueLogger.install = function (Vue, options) {
//     //设置调试级别
//     let setLevel = options.level;
//     if(LEVEL_LIST.hasOwnProperty(setLevel)) {
//         settings.curLevel = LEVEL_LIST[setLevel];
//     }
//     //设置时间格式
//     let setDateFormat = options.dateFormat;
//     if(setDateFormat) {
//         settings.dateFormat = setDateFormat;
//     }

//     let logger = new VueLogger(settings.curLevel, settings.dateFormat);
    
//     Vue.prototype.$D = function() {
//         let args = VueLogger.arumentsToArray(arguments);
//         logger.$D(args);
//     }
// }

module.exports = VueLogger