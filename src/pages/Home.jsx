import { Helmet } from "react-helmet-async"
import ContactSection from "../components/ContactSection/ContactSection"
import Header from "../components/Header/Header"
import HomeCardSection from "../components/HomeCardSection/HomeCardSection"
import Newsletter from "../components/Newsletter/Newsletter"
import Stats from "../components/Stats/Stats"

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Blogify || Home</title>
    </Helmet>
      <Header/>
      
      <Stats/>
      <HomeCardSection/>
      
      <ContactSection/>
      <Newsletter/>
    </>
  )
}

export default Home