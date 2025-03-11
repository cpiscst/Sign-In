


function App() {
 

  return (
    <>
     <div className="flex justify-center bg-sky-800">
      <div className='font-bold text-3xl text-sky-300 text-center'>Sign-In</div>
      
       <div>
       <input placeholder='UserName' type='text' className=' rounded bg-white  font-bold text-md p-2 block m-2'/>
        <input type='Password' placeholder='Password'className=' rounded bg-white  font-bold text-md p-2 block m-2'/>
        
        <button className="rounded-xl border-2 bg-amber-300 mt-6">Log-In</button>
      
     
       </div>
     </div>
    </>
  )
}

export default App
