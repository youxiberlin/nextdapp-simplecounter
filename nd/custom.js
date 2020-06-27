export const add = ({ set, val, props}) =>
  set(props.count + val, "count")
add.props = ["count"]
