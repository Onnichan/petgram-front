/*
import { ContentCircleStories } from "components/Stories/CircleStories/ContentCircleStories";
 */
import { HeaderHome } from '@components/HeaderHome'
import { Hero } from '@components/home/Hero'
import { FooterActionButtons } from '@components/FooterActionButtons'
import { HeadInfo } from '@components/HeadInfo'

const Home = () => {
  return (
    <>
      {/* <HeaderHome/>
      <section className="container-global home animate__animated animate__rubberBand">
        <ContentCircleStories/>
      </section>
    */}
      <HeadInfo title="Petgram" />
      <HeaderHome />

      <Hero />

      <FooterActionButtons />
    </>
  )
}

export default Home
