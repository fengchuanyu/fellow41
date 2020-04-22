import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/vue-admin-template/table/list',
//     method: 'get',
//     params
//   })
// }

export function addStudent(data) {
  return request({
    url: '/student/add',
    method: 'post',
    data
  })
}