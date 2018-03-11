import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => console.log('hello')}>Click me</button>
    </div>
  )
}

export default {
  component: Home
}