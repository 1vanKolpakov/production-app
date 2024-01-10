import { classNames } from "shared/lib/classNames/classnames";

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with add parameter', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  })
  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass', {hovered: true}, ['class1', 'class2'])).toBe(expected);
  })

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass', {hovered: true, padding: false}, ['class1', 'class2'])).toBe(expected);
  })

})