import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      date: [{
        created_at: "2019-10-23 12:00:00"
      }, {
        created_at: "2019-10-23 13:00:00"
      }, {
        created_at: "2018-10-23 14:00:00"
      }, {
        created_at: "2018-10-24 12:00:00"
      }, {
        created_at: "2017-10-22 12:00:00"
      }, {
        created_at: "2017-10-22 12:00:00"
      }, {
        created_at: "2016-10-25 12:00:00"
      }, {
        created_at: "2016-10-28 12:00:00"
      }, {
        created_at: "2016-10-28 11:00:00"
      }],
      month: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ]
    }
  },
  methods: {
    groupBy(arr, prop, callback) {

      var newArr = {},
        tempArr = [];
      for (var i = 0, j = arr.length; i < j; i++) {

        var result = callback(arr[i], arr[i + 1], prop);
        if (result) {

          tempArr.push(arr[i]);

        } else {
          tempArr.push(arr[i]);
          // newArr.push(tempArr.slice(0));
          newArr[arr[i].created_at.split(' ')[0].split('-')[0]] = tempArr.slice(0);
          tempArr.length = 0;
        }

      }

      return newArr;
    },
    queryMonthDate() {
      $.get('/count/montylyCount')
    },
    getdifferentArr(arry1, arry2) {
      var arry3 = []
      var tmp = arry1.concat(arry2)
      var o = {}
      for (let i = 0; i < tmp.length; i++)(tmp[i] in o) ? o[tmp[i]]++ : o[tmp[i]] = 1
      for (let x in o)
        if (o[x] === 1) arry3.push(x)
      return arry3
    },
  },
  mounted() {
    this.queryMonthDate()
    var result = this.groupBy(this.date, 'created_at', (a, b, key) => {

      var C1 = a[key].split(' ')[0].split('-')[0];
      var C2 = null;
      try {
        C2 = b[key].split(' ')[0].split('-')[0];
      } catch (exception) {
        C2 = null;
      }

      return C1 == C2;
    });

    // 日期统计
    let currentTime = $.timeFormat(new Date() - 0).split(" ")[0];
    let cYear = currentTime.split('-')[0];
    let cMonth = currentTime.split('-')[1];
    let currentYearArr = this.month.slice(0, Number(cMonth));
    let nextYearArr = this.month.slice(Number(cMonth));
    let nextResult = [],
      currentResult = [];
    nextYearArr.forEach((next, nIndex) => {
      nextResult.push(`${ cYear - 1 }-${next}`);
    });
    currentYearArr.forEach((current, nIndex) => {
      currentResult.push(`${ cYear }-${current}`);
    });
    let result1 = nextResult.concat(currentResult);
    let result2 = [
      '2017-01',
      '2017-04',
      '2018-01',
      '2018-03',
      '2018-06',
      '2018-10',
      '2018-12',
      '2019-01',
      '2019-04',
      '2019-08'
    ];

    console.log(this.getdifferentArr(result1, result2), 'time')
  }
}