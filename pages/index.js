import { bind } from "nd"
// import { add } from "nd/custom";

const Counter = bind(({ count }) => <span>{count}</span>, ["count"]);
const Counter2 = bind(({ count2 }) => <span>{count2}</span>, ["count2"]);

export default bind(
  (props) => {
    const { init, set } = props;
    const fn = init();
    return (
      <div >
        <div onClick={()=>fn.add({ num: 1, target: "count" })}>
          Counter1: <Counter />
        </div>
        <div onClick={()=>fn.add({ num: 2, target: "count2" })}>
          Counter2: <Counter2 />
        </div>
      </div>
    )
  },
  [
    "count",
    "count2",
    {
      add: [
        ({ val: { num, target }, props, set }) =>
          set((props[target] || 0) + num, target),
        ["count", "count2"]
      ]
    }
  ]
)
