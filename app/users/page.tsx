import { Thasadith } from 'next/font/google';
import React from 'react'
interface User{
    id: number;
    name: string;
    email:string;
}

const UsersPage = async () => {
    const res =await fetch("https://jsonplaceholder.typicode.com/users",{cache:'no-store'})
    const  users :User[]= await res.json();
  return (
    <>
    <h1> users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-border'>
      <thead>
        <tr>
          <th>name</th><th>email</th>
        </tr>
      
      </thead>
      <tbody>
{users.map( user => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>)}
</tbody>
    </table>
    </>
  )
}

export default UsersPage
