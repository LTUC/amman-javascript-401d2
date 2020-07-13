import React from 'react';
import { connect } from 'react-redux';

const Status = (props) => {
  const currentLeader = { name: 'No Leader', votes: 0 };
  // console.log(props.candidates);
  props.candidates.forEach((candidate) => {
    if (!candidate.disable && candidate.votes !== 0) {
      if (candidate.votes > currentLeader.votes) {
        currentLeader.name = candidate.name;
        currentLeader.votes = candidate.votes;
      } else if (candidate.votes === currentLeader.votes) {
        currentLeader.name = currentLeader.name + ' & ' + candidate.name;
        currentLeader.votes = candidate.votes;
      }
    }
  });

  return (
    <section>
      <span>
        Current Leader: {currentLeader.name} Votes Cast:{props.votes.totalVotes}
      </span>
    </section>
  );
};

const mapStateToProps = (state) => ({
  votes: state.votes,
  candidates: state.candidates,
});

export default connect(mapStateToProps)(Status);
