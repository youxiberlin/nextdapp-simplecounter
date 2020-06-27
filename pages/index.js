import { bind } from "nd"


const Counter = bind(({ count, set }) => 
  <span onClick={() => set(count +1, "count")}>{count}</span>, ["count"])

export default bind(
  () => (
    <div >
      add count: <Counter />
    </div>
  )
)
