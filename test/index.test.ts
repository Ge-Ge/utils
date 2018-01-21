import {classList} from '../src/index'

document.body.innerHTML =
  `<div>
      <span id="CLASSLIST"></span>
    </div>`
let ele_classList = document.getElementById('CLASSLIST') // dom element
const class_list = new classList(ele_classList) // classList instanced

//-----------------------------test--------------------------
describe('classList 测试', () => {
  test('addClass', () => {
    class_list.addClass('test')
    expect(ele_classList.classList.contains('test')).toBe(true)
  })

  test('removeClass', () => {
    class_list.removeClass('test')
    expect(ele_classList.classList.contains('test')).toBe(false)
  })

  test('hasClass', () => {
    expect(class_list.hasClass('test')).toBe(false)
  })
})