import React,{ useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from '../users/UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {

    const { users,loading } = useContext(GithubContext);
    
    if(loading) return <Spinner/>    
    
    return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        { users.map((item,index)=>{
            const { id } = item;
            return(
                <UserItem key={id} user={ item }/>
            )
        })}
    </div>
  )

}

export default UserResults;