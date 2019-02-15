import $ from '@/utils';
export default (Vue) => {
  Vue.filter('formate', data => $.timeFormat(data))
}