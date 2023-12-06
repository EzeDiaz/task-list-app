import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TaskDetail = ({
  id,
  comments,
  task,
  isComplete,
  groups
}) => (
  <div>
    <div>
      <input value={task.name}>
    </div>
    <div>
      <button>Complete / Reopen Task</button>
    </div>
    <div>
      <select>
        {groups.map(groups=>(
          <option key={groups.id} value={groups.id}>{groups.name}</option>
        ))}
      </select>
    </div>
    <div>
      <Link to="/dashboard">
          <button> Done </button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  }
}

export const ConnectTaskDetail = connect(mapStateToProps) (TaskDetail);