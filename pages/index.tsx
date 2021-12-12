import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Point from '../components/Point';
import Set from '../components/Set';
import ButtonMinus from '../components/ButtonMinus';
import ButtonPlus from '../components/ButtonPlus';
import ButtonReload from '../components/ButtonReload';
import { Container } from './style';
import { Result } from './interfaces';
import Results from '../components/Results';

const Board = () => {
  const [pointA, setPointA] = useState<number>(0);
  const [pointB, setPointB] = useState<number>(0);
  const [setA, setSetA] = useState<number>(0);
  const [setB, setSetB] = useState<number>(0);
  const [results, setResults] = useState<Result[]>([]);

  const removePointA = () => {
    if (pointA > 0) {
      setPointA(pointA - 1);
    }
  }

  const addPointA = () => {
    var value = pointA + 1;
    setPointA(value);

    if (value >= 25 && (value - pointB >= 2)) {
      setSetA(setA + 1);
      setResults(prevState => [ ...prevState,  { pointA: pointA, pointB: pointB }]);
      setPointA(0);
      setPointB(0);
    }
  }

  const removePointB = () => {
    if (pointB > 0) {
      setPointB(pointB - 1);
    }
  }

  const addPointB = () => {
    var value = pointB + 1;
    setPointB(value);

    if (value >= 25 && (value - pointA >= 2)) {
      setSetB(setB + 1);
      setResults(prevState => [ ...prevState,  { pointA: pointA, pointB: pointB }]);
      setPointA(0);
      setPointB(0);
    }
  }

  const reset = () => {
    setPointA(0);
    setPointB(0);
    setSetA(0);
    setSetB(0);
    setResults([]);
  }

  return (
    <Container>
      <table>
        <Header />

        <tr>
          <Point value={pointA} />
          <Set value={setA} />

          <Set value={setB} />
          <Point value={pointB} />
        </tr>
        <tr />
        <tr>
          <ButtonMinus onClick={removePointA} />
          <ButtonPlus onClick={addPointA} />

          <ButtonReload onClick={reset} />

          <ButtonMinus onClick={removePointB} />
          <ButtonPlus onClick={addPointB} />
        </tr>
      </table>

      <Results values={results} />

    </Container>
  )
}

export default Board