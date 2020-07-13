import React from 'react';
import { connect } from 'react-redux';

import { increment, disable, reset } from '../store/candidates';

const VotesCounter = (props) => {
  return (
    <section>
      <ul>
        {props.candidates.map((candidate) => {
          return (
            <li key={candidate.name}>
              <button
                onClick={() => !candidate.disable && props.increment(candidate)}
              >
                +
              </button>
              <span
                className={candidate.disable ? 'disabled' : ''}
                onClick={() => props.disable(candidate)}
              >
                {candidate.name} : {candidate.votes}
              </span>
            </li>
          );
        })}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
  votes: state.votes,
});
const mapDispatchToProps = { increment, disable, reset };
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
