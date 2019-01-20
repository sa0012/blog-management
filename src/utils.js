const ua = navigator.userAgent
import Vue from 'vue'
let utils = {
  version: 0.01,
  isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
  isiPhone: ua.indexOf('iPhone') > -1,
  isWeChat: () => (/micromessenger/i).test(navigator.userAgent),
  isMobile: phone => /^1(3|4|5|6|7|8|9)[0-9]\d{8}$/.test(phone),
  isCar: car => /(^(浙|闽|粤|京|津|冀|晋|蒙|辽|吉|黑|沪|苏|皖|赣|鲁|豫|鄂|湘|桂|琼|渝|川|贵|云|藏|陕|甘|青|宁|新){1}[A-Z0-9]{6,7}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(car),
  isID: function (ID) { // 是否是PRC身份证
    if (typeof ID !== 'string') return false
    var city = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外'
    }
    var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2))
    var d = new Date(birthday)
    var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate())
    var currentTime = new Date().getTime()
    var time = d.getTime()
    var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    var sum = 0
    var i
    var residue
    if (!/^\d{17}(\d|x)$/i.test(ID)) return false
    if (city[ID.substr(0, 2)] === undefined) return false
    if (time >= currentTime || birthday !== newBirthday) return false
    for (i = 0; i < 17; i++) {
      sum += ID.substr(i, 1) * arrInt[i]
    }
    residue = arrCh[sum % 11]
    if (residue !== ID.substr(17, 1)) return false
    return true
  },
  isPassport: (num) => /^[a-zA-Z0-9]{7,18}$/.test(num),
  isBankCard: num => /^\d{16}|\d{19}$/.test(num),
  isEmail: mail => /^(?=\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$).{0,50}$/.test(mail),
  isChinese: chinese => /^.{1,50}$/.test(chinese),
  isName: name => /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/.test(name),
  isNumAndLetter: numAndLetter => /^[a-z0-9A-Z]{0,20}$/.test(numAndLetter),
  isCarLicense: (num) => /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6,7}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(num),
  fullTwo: num => num > 9 ?
    num : '0' + num,
  ele: (ele, all) => all ?
    document.querySelectorAll(ele) : document.querySelector(ele),
  get: (url, params = {}, method = 'get', headers) => new Promise((resolve, reject) => {
    let req = method === 'get' ? {
      params: params
    } : params
    url = '/api' + url;
    headers = headers && headers.headers ? headers.headers : {
      "Content-Type": "application/json; charset=utf-8"
    }
    console.log(headers, 'headers')
    window.axios[method](url, req, headers).then(res => {
      if (res.data.code != 200) {
        new Vue().$message.error(res.data.msg)
      }
      resolve && res && typeof res.data !== 'undefined' && resolve(res.data)
    }, error => {
      reject && reject(error)
    })
  }),
  post: (url, params, headers) => utils.get(url, params, 'post', headers),
  numberToChinese: (number, integer) => {
    if (integer) {
      return number ? (number / 10000 >= 1 ? (number / 10000) + '万' : number) : ''
    }
    return number ? (number / 10000 >= 1 ? (number / 10000).toFixed(2) + '万' : number.toFixed(2)) : ''
  },
  arrayNumberToSlot: (array, fn, flag) => {
    let resArray = []
    for (let num of array) {
      resArray.push({
        value: num,
        key: '' + fn(Number(num), flag)
      })
    }
    return resArray
  },
  /**
   * 对日期进行格式化
   * @param date 要格式化的日期
   * @param format 进行格式化的模式字符串
   *     支持的模式字母有：
   *     y:年,
   *     M:年中的月份(1-12),
   *     d:月份中的天(1-31),
   *     H:小时(0-23),
   *     m:分(0-59),
   *     s:秒(0-59),
   *     S:毫秒(0-999),
   *     q:季度(1-4)
   * @return String
   */
  dateformat: (date, format) => {
    if (!date) return

    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) // eslint-disable-line
      }
    }

    return format
  },
  add0(m) {
    return m < 10 ? '0' + m : m
  },
  timeFormat(timestamp) {
    //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    // return year + '年' + month + '月' + date + '日' + hours + '时' + minutes + '分' + seconds + '秒';
    return year + '/' + utils.add0(month) + '/' + utils.add0(date) + ' ' + utils.add0(hours) + ':' + utils.add0(minutes) + ':' + utils.add0(seconds);
  },
  // 提取字符串中的整數數字
  getNum: (text) => {
    var value = parseInt(text.replace(/[^0-9]/ig, ""));
    return value;
  },
  diffDate: (parmDate, sysDate) => {
    if (!parmDate) return
    if (Object.prototype.toString.call(parmDate) !== '[object Date]') return
    if (sysDate && Object.prototype.toString.call(sysDate) !== '[object Date]') return

    let date = sysDate || (new Date())
    return parseInt((date.getTime() - parmDate.getTime()) / (1000 * 60 * 60 * 24))
  },
  // requestAnimationFrame兼容处理
  requestAnimationFrame: () => {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  },
  //获取非行间样式(style标签里的样式或者link css文件里的样式)，obj是元素，attr是样式名
  getStyle(obj, attr) {
    //针对IE
    if (obj.currentStyle) {
      return obj.currentStyle[attr]; //由于函数传过来的attr是字符串，所以得用[]来取值
    } else {
      //针对非IE
      return window.getComputedStyle(obj, false)[attr];
    }
  },
  /*
     获取或者设置css属性
   
  */
  css(obj, attr, value) {
    if (arguments.length == 2) {
      return this.getStyle(obj, attr);
    } else {
      obj.style[attr] = value;
    }
  },
  // 输入yyyy/MM/dd HH:mm:ss OR yyyy-MM-dd HH:mm:ss返回年月日时分秒
  backEveryTime(time, type) {
    if (time) {
      try {
        let ymdTime = time.split(' ')[0] ? time.split(' ')[0].split(type) : [];
        let hmsTime = time.split(' ')[1] ? time.split(' ')[1].split(':') : [];
        let timeArr = [];
        return timeArr.concat(ymdTime, hmsTime);
      } catch (e) {
        console.log('time error')
      }

    }
  }
}

export default utils
