import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import { SwapOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Header from '../components/Header';
import Point from '../components/Point';
import Set from '../components/Set';
import MinusButton from '../components/MinusButton';
import PlusButton from '../components/PlusButton';
import ReloadButton from '../components/ReloadButton';
import Results from '../components/Results';

export interface Result {
  pointA: number;
  pointB: number;
};

export const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
`;

export const SwapOutlinedButton = styled(SwapOutlined)`
  font-size: 20px;
`;

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
      setResults(prevState => [ ...prevState,  { pointA: value, pointB: pointB }]);
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
      setResults(prevState => [ ...prevState,  { pointA: pointA, pointB: value }]);
      setPointA(0);
      setPointB(0);
    }
  }

  const resetPoints = () => {
    setPointA(0);
    setPointB(0);
    setSetA(0);
    setSetB(0);
    setResults([]);
  }

  const swapPoints = () => {
    var pA = pointA;
    var pB = pointB;
    var sA = setA;
    var sB = setB;

    setPointA(pB);
    setPointB(pA);
    setSetA(sB);
    setSetB(sA);

    var r = [];
    results.forEach((result) => r.push({ pointA: result.pointB, pointB: result.pointA }));

    setResults(r);
  }

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td colSpan={2} />
            <td colSpan={2}>
              <Image src="/favicon.png" width="32" height="32" />
            </td>
            <td colSpan={2} />
          </tr>
          <tr>
            <td colSpan={2} />
            <td colSpan={2}>
              <SwapOutlinedButton onClick={swapPoints} />
            </td>
            <td colSpan={2} />
          </tr>

          <Header />

          <tr>
            <Point value={pointA} />
            <Set value={setA} />

            <Set value={setB} />
            <Point value={pointB} />
          </tr>
          <tr />
          <tr>
            <MinusButton onClick={removePointA} />
            <PlusButton onClick={addPointA} />

            <ReloadButton onClick={resetPoints} />

            <MinusButton onClick={removePointB} />
            <PlusButton onClick={addPointB} />
          </tr>
        </tbody>
      </table>

      <Results values={results} />

    </Container>
  )
}

export default Board