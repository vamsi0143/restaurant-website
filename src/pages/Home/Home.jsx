import Hero from '../../components/home/Hero/Hero'
import About from '../../components/home/About/About'
import CategoryTabs from '../../components/home/CategoryTabs/CategoryTabs'
import DiscoverMenu from '../../components/home/DiscoverMenu/DiscoverMenu'
import ReserveTable from '../../components/home/ReserveTable/ReserveTable'
import FeaturedDishes from '../../components/home/FeaturedDishes/FeaturedDishes'
import Testimonials from '../../components/home/Testimonials/Testimonials'
import Experts from '../../components/home/Experts/Experts'
import AppPromo from '../../components/home/AppPromo/AppPromo'
import RecentNews from '../../components/home/RecentNews/RecentNews'
import InstagramFeed from '../../components/home/InstagramFeed/InstagramFeed'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CategoryTabs />
      <DiscoverMenu />
      <ReserveTable />
      <FeaturedDishes />
      <Testimonials />
      <Experts />
      <AppPromo />
      <RecentNews />
      <InstagramFeed />
    </>
  )
}
