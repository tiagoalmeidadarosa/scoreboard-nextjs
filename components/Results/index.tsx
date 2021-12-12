import React from 'react';
import { Result } from '../../pages/interfaces';
import { Span, Container } from './styles';

interface ResultsProps {
  values: Result[];
}

const Results = (props: ResultsProps) => {
  return (
    <Container>
      {props.values.map((value, i) => (
        <div key={`result_${i}`}>
          <Span>{value.pointA}</Span> x <Span>{value.pointB}</Span>
        </div>
      ))}
    </Container>
  )
}

export default Results;