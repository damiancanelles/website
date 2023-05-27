import Navbar from '../components/navbar'
import Header from '../components/header'
import Grid from '../components/grid'
import Carousel from '../components/carousel'
import Resume from '../components/resume'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar></Navbar>
      <Header></Header>
      <Grid></Grid>
      <Carousel></Carousel>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  )
}
