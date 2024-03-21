import NavBar from './navBar'
import Home from './home'

function App() {
  const message= 'welcome to the life of coding';
  const like = 23434;const link='www.google.com';
  const nameBlog='Beo Blog';
return (
    <>

  <div className="top">
    
      <NavBar />
  </div>

  
     <div className="card">
      <Home />
      
     </div>
    
      </>


      
    
  )
}

export default App
