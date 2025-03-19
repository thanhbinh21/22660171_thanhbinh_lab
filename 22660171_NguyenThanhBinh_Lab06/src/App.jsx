import Navbar from "./components/Navbar"
import RecipeBox from './page/RecipeBox'
import Footer from "./components/Footer"
import Search from "./page/Search"
import SubscriptionPage from "./page/SubscriptionCard"
function App() {
 
  return (
    <>
      <Navbar></Navbar>
      {/* <RecipeBox></RecipeBox> */}
      {/* <Search></Search> */}
      <SubscriptionPage></SubscriptionPage>
       <Footer></Footer>
    </>
  )
}

export default App
