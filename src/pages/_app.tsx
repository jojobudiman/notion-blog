import '../styles/global.css'
import ExtLink from '../components/ext-link'
import contactStyles from '../styles/contact.module.css'
import CodeChild from '../components/svgs/codechild'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <span>© 2020 Code Child. All Rights Reserved</span>
      <div className={contactStyles.btn}>
        <ExtLink href="https://hypebeans.com">
          <CodeChild
            height={46}
            width={132}
            alt="view Code Child organization"
          />
        </ExtLink>
      </div>
      <span>
        or{' '}
        <ExtLink href="https://github.com/jojobudiman/notion-blog">
          view source
        </ExtLink>
      </span>
    </footer>
  </>
)
