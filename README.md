# the javascript function collections for daily usage

## 更新日志

### 1.0.1

* 增加许多新功能
 * 跳转到昨天
 * 跳转到明天
 * 跳转到上一周
 * 跳转到下一周
 * 获取本周的时间范围
 * 跳转到上个月
 * 跳转到下个月
 * 跳转到明年
 * 跳转到去年
 * 获取本月的有多少天
* 增加测试用例

### 1.0.0

* 增加格式化日期功能

## 工具库

#### 使用示例

    require('jf-utils');
    var d = new Date();
    #获取格式化的日期
    d.toFormattedString('yyyy-MM-dd HH:mm:ss.SSS');

#### API索引

**Date对象**

* toFormattedString(format) 获取格式化后的日期

**format:** 默认为yyyy-MM-dd,获取格式化后的日期

>yyyy：年
>
>MM：月

>dd：日

>HH：小时0-23

>hh：小时0-12

>mm：分钟

>ss：秒

>SSS：毫秒

``var d = new Date();
d.toFormattedString();``

* prevDate 获取前一天
* nextDate 获取下一天
* getCurWeekRange 获取本周的时间范围
* prevWeek 获取上一周
* nextWeek 获取下一周
* getCurMonth 获取当前月
* prevMonth 获取上一个月
* nextMonth 获取下一个月
* prevYear 转到上一年
* nextYear 转到下一年
* getCurMonthDayCount 获取当前月最大天数