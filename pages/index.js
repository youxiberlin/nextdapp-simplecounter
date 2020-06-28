import { bind } from "nd"
import { add } from "nd/custom";

const Counter = bind(({ count, init }) => {
    const fn = init();
    return (
      <div>
        <span onClick={() => fn.add(1)}>counter1: {count}</span>
      </div>
    )
  }, 
  [
    "count",
    "add"
  ]
)

const Counter2 = bind(({ count2, init }) => {
  const fn = init();
  return (
    <div>
      <span onClick={() => fn.add(2)}>counter2: {count2}</span>
    </div>
  )
}, 
[
  "count2",
  "add"
]
)

export default bind(
  () => (
    <div >
      <Counter />
      <Counter2 />
    </div>
  )
)
