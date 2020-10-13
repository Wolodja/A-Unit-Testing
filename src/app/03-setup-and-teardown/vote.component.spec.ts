import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  afterEach(() => {});

  it('should increment totalVoutes whe upVoted', () => {

    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement when totalVoutes decremented', () => {

    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
