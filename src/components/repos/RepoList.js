import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <div className='card shadow-lg rounded-lg bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xml my-4 font-bold card-title">
          Top Repos
        </h2>
        { repos.map(repo => {
          return (
            <RepoItem key={repo.id} repo= {repo}/>
          )
        })}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos:PropTypes.array.isRequired
}

export default RepoList;