'use strict'

let bands = ['Группа-Один', 'Группа Два', 'Группа?Три']

let bandsChange = bands.map(function (item) {
  return `#${item}`.replace([ЁёА - я], '').toLowerCase()
})

console.log(bandsChange)
