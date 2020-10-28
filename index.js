'use strict'

let bands = ['Группа-Один', 'ГРуппа+два', 'Группа?Три', 'the BEST, band']

let bandsChange = bands.map(function (item) {
  return `# ${item}`
    .replace(/[&%()=*\-+?]/g, ` `)
    .replace(/[\,]/g, ``)
    .toLowerCase()
    .split(' ')
    .map((word, index) => word[0].toUpperCase() + word.slice(1))
    .join('')
})

console.log(bandsChange)
