import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(()=>{
    actions.increase();
  }, [actions]);
  return (
    <div>
        <h1> {state.counter}</h1>
        <Button onButtonClick = {() => actions.increase()}>
            Increase
        </Button>
        <Button onButtonClick = {() => actions.decrease()}>
            Decrease
        </Button>
        <Button onButtonClick = {() => actions.reset()}>
            Reset
        </Button>
        <Button onButtonClick = {() => actions.setCounter({counter: 10})}>
            Set Counter
        </Button>

    </div>
  );

}
