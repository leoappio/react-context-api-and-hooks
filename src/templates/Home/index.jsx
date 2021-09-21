import { useEffect, useState } from "react";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
  const [state, actions] = useCounterContext();
  const [actionsState] = useState(actions);

  useEffect(()=>{
      actionsState.increase();
  }, [actionsState]);
  return (
    <div>

    </div>
  );

}
