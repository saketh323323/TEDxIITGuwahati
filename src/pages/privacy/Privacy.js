import styles from './privacy.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import { useEffect } from 'react';

const Privacy = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

    return(
        <>
        <NavBar></NavBar>
 <div className={styles.termssection}>
      <div className={styles.containertterms}>
        <div className={styles.termsheadingwrapper}>
          <h1 className={styles.h1}> &nbsp; Privacy Policy</h1>
          <div className={styles.dateupdatedwrapper}>
            <div className={styles.p2}>Date updated:11 January, 2024</div>
          </div>
        </div>
        <div className={styles.termscontentwrapper}>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Introduction:</h2>
            <div className={styles.termtextwrapper}>
              <p className="p2 custom">&nbsp; &nbsp; Welcome to TEDxIITGuwahati.</p>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    TEDxIITGuwahati (“us”, “we”, or “our”) operates{' '}
                    <a href="/" className="p2-link">
                      tedxiitguwahati.com
                    </a>{' '}
                    (hereinafter referred to as “Service”).
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    Our Privacy Policy governs your visit to{' '}
                    <a href="/" className="p2-link">
                      tedxiitguwahati.com
                    </a>
                    , and explains how we collect, safeguard and disclose information that results from your use of our Service.
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}> we respect your privacy and take all reasonable steps to ensure personal information we collect, use, hold. </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}> This policy sets out how we handle the information we collect about you.</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Add more content blocks as needed */}
        </div>
      
    

        <div className={styles.contentblock}>
      <h2 className={styles.h2term}>What is personal information?</h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              Personal information is information or an opinion about an identified individual, or an individual who is reasonably identifiable, whether the information or opinion is true or not, and whether the information is recorded in a material form or not.
            </p>
          </li>
        </ul>
      </div>
    </div>

        <div className={styles.contentblock}>
      <h2 className={styles.h2term}>How do we collect and hold personal information?</h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              We may collect your name, address, telephone number, email address, and other information you give to us. We collect personal information about you through our website, over the phone, and by email.
            </p>
            <p className={styles.p2}>
              Personal information is held securely, is subject to various security protections, and is held only for as long as the information remains relevant to the purpose for which it was collected.
            </p>
            <p className={styles.p2}>
              We take reasonable steps to ensure the security and integrity of the personal information we collect, store, use, and disclose, including restricted server access and other industry-standard security protocols such as complex password protection.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              Personal information is held securely, is subject to various security protections, and is held only for as long as the information remains relevant to the purpose for which it was collected.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              We take reasonable steps to ensure the security and integrity of the personal information we collect, store, use, and disclose, including restricted server access and other industry-standard security protocols such as complex password protection.
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.contentblock}>
      <h2 className={styles.h2term}>Why do we collect your personal information?</h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              We will not use or disclose personal information for any secondary purpose, unless that secondary purpose is related to the primary purpose for which we have collected that information, and you would reasonably expect the disclosure in the circumstances, or unless you consent to that use or disclosure.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper_unique}>
        We collect, hold, use, and disclose personal information about you for a number of reasons, including:
        <p className={styles.p2}></p>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" class >
          <li className={styles.termslistitem}>
            <p className={styles.p2}>conducting the TEDxIITGuwahati events and activations;</p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>registering attendees at TEDxIITGuwahati events;</p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>encouraging connection between TEDxIITGuwahati members (including by using your details to create lanyards for the TEDxIITGuwahati event);</p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>communicating with you (including responding to your queries and interacting with you on social media);</p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>sending you marketing and other information about us (including information about events, discounts, competitions, and promotions) as well as information about TED and TED related events;</p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>maintaining and improving our organization and our event, including planning, marketing, research, and product development; and</p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              sharing your personal information with TEDxIITGuwahati event sponsors, provided you have explicitly opted in to this disclosure.
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.contentblock}>
      <h2 className={styles.h2term}>Access and correction</h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              We will take all reasonable steps to ensure any personal data we collect, use, or disclose is up to date and accurate. If you believe personal information we hold about you is not up to date or accurate, you may ask us to correct it.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              You may ask us to provide you with details of the personal information we hold about you, and copies of that information. We will respond to your request and attempt to provide you with the data within a reasonable period of time.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              If we provide you with copies of the information you have requested, we may charge you a reasonable fee to cover the administrative costs of providing you with that information.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>Please direct all requests for access and correction to <a href="mailto:iitg.tedx@gmail.com">iitg.tedx@gmail.com</a>.</p>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.contentblock}>
      <h2 className={styles.h2term}>Do you disclose overseas?</h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              No, we, in the course of providing products and services, do not disclose personal information to overseas entities. We use Australian data servers to process information.
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.contentblock}>
      <h2 className={styles.h2term}>Does this policy change?</h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              We will review and update this Privacy Policy from time to time as needed without notice. Therefore, you should review the terms of this policy periodically to make sure that you are aware of how we collect, hold, store, and use personal information.
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.contentblock}>
      <h2 className={styles.h2term}>How do I contact you? </h2>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
            <p className={styles.p2}>
              If you consider a breach of your Privacy or your rights in relation to privacy has occurred, you can reach us via the Contact Us page on our website <a href="/ContactUs">here</a> and we will attempt to resolve your complaint.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.termtextwrapper}>
        <ul role="list" className={styles.termslist}>
          <li className={styles.termslistitem}>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    

      <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Privacy;
