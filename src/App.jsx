import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QueryClient, { useQueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()
async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}

function App() {
  
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
    </>
  )
}
function Todos() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <div>
      <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  )
}


export default App
