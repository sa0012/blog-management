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
      }]
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
    }
  },
  mounted() {
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

  }
}