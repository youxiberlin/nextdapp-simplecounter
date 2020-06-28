export const add = ({ set, val: { num, target }, props}) =>
  set(props[target] + num, target)
// add.props = ["count"]
