import { bind } from "nd"


const Counter = bind(({ count, init }) => {
    const fn = init();
    return (
      <span onClick={() => fn.add(1)}>{count}</span>
    )
  }, 
  [
    "count",
    "add"
  ]
)

export default bind(
  () => (
    <div >
      add count: <Counter />
    </div>
  )
)
