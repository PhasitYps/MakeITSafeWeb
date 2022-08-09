import Link from 'next/link'
import { Layout } from '../common/Layout'

export const Footer = () => {
  return (
    <div className="py-8 bg-[#ee0c78]">
      <Layout>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-10 justify-items-start">
          <div className="text-white text-xl">
            <h1 className="font-bold mb-2 text-2xl">Link</h1>
            <Link href={''}>
              <a>Startup Competition</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Metaverse Hackathon</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Blog</a>
            </Link>
            <br />
            <Link href={''}>
              <a>All Speakers</a>
            </Link>
          </div>
          <div className="text-white text-xl">
            <h1 className="font-bold mb-2 text-2xl">Other Link</h1>
            <Link href={''}>
              <a>About Us</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Terms & Conditions</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Privacy Policy</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Contact Us</a>
            </Link>
          </div>
          <div className="text-white text-xl">
            <h1 className="font-bold mb-2 text-2xl">Social Link</h1>
            <Link href={''}>
              <a>Facebook</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Twitter</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Telegram</a>
            </Link>
            <br />
            <Link href={''}>
              <a>Linkedin</a>
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-5 justify-items-start text-gray-300">
          <p>Copyright © 2022 Metaverse Summit</p>
          <p>Design and Build by START DESIGNS</p>
          <p>Contact: admin@metaverse-summit.org</p>
        </div>
      </Layout>
    </div>
  )
}
