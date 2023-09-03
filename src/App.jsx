import Grid from "./components/Grid"


const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen font-Rajdhani">
      <h1 className="font-bold  text-5xl my-3">My 30 Days of React</h1>  
      <p className="font-thin  text-4xl my-4">Number Generator</p>  
      <Grid />

    </div>
  )
}
 
export default App