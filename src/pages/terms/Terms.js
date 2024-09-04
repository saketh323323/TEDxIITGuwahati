import styles from './terms.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter';
import Footer from '../../components/footer/Footer';
import ScrollButton from '../../components/scrollButton/scrollButton'
import { useEffect } from 'react';

const Terms = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <NavBar></NavBar>
      <div className={styles.termssection}>
        <div className={styles.containertterms}>

          <div className={styles.termsheadingwrapper}>
            <h1 className={styles.h1}>Terms Of Use</h1>
            <div className={styles.dateupdatedwrapper}>
              <div className={styles.p2}>Date updated: 11 January, 2024</div>
            </div>
          </div>

          <div className={styles.termscontentwrapper}>
            <div className={styles.contentblock}>
              <h2 className={styles.h2term}>Introduction</h2>
              <div className={styles.termtextwrapper}>
                <ul role="list" className={styles.termslist}>
                  <li className={styles.termslistitem}>
                    <p className={styles.p2}>
                      Welcome to TEDxIITGuwahati
                      (<b>we</b>,<b> us </b>or<b> our</b>).<span className="Apple-converted-space">&nbsp; </span>By registering as a
                      member of the TEDxIITGuwahati community, registering for and paying for attendance at TEDxIITGuwahati events (<b>Event(s)</b>),
                      attending an Event and/or using and/or accessing our services, website, resources and/or platforms (our <b>Services</b>)<b>
                      </b>you confirm you accept these terms of use (<b>Terms</b>) and agree to be bound by them.&nbsp;
                    </p>
                  </li>
                  <li className={styles.termslistitem}>
                    <p className={styles.p2}>
                      Our Services provided as a public service to promote the spread of good ideas throughout the world. We independently organise
                      and provide them under a licence from TED and we welcome anyone willing to join us in this pursuit.&nbsp;
                    </p>
                  </li>
                  <li className={styles.termslistitem}>
                    <p className={styles.p2}>
                      We reserve the right to change these Terms at any time.<span className="Apple-converted-space">&nbsp; </span>If any such
                      changes constitute a material change, we will notify you. What constitutes a “material change” will be determined at our sole
                      discretion, in good faith and using common sense and reasonable judgment. Your continued use of any of our Services (including
                      attending an Event) will constitute acceptance of such changes.&nbsp;
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.contentblock}>
              <h2 className={styles.h2term}>Services</h2>
              <div className={styles.termtextwrapper}>
                <ul role="list" className={styles.termslist}>
                  <li className={styles.termslistitem}>
                    <p className={styles.p2}> Our Services allow you to:</p>
                    <ul className={styles.abcd_list}>
                      <li>(a) Register for and pay for attendance at Events; and</li>
                      <li>
                        (b) Access:
                        <ul className={styles.num_list}>
                          <li className="li2">(i) inspiring, innovative and educational talks</li>
                          <li className="li2">(ii) An online collection of resources including talks, performances, news, ideas, and other information.&nbsp;</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.termslistitem}>
                    <p className={styles.p2}>You must use and access the Services for lawful purposes and in a way which does not infringe the rights of anyone or restrict or inhibit anyone’s use of them.&nbsp;</p>
                  </li>
                  <li className={styles.termslistitem}>
                    <p className={styles.p2}> We do not represent or warrant that the operation of the Services will be secure, confidential, uninterrupted, error-free, accurate, complete or current.&nbsp;</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Content </h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>You are responsible for any content that you submit, post and/or the Services, including data, text, files, information, usernames, photos, profiles, audio and video clips, works of authorship, applications, links and other materials (User Content).</p>
                </li>
                <li className={styles.x}>
                  <p className={styles.p2}> You must not submit, post or display any User Content that:</p>
                  <ul className={styles.abcd_list}>
                    <li className="li2">(a) constitutes (as determined by us in our sole discretion) a personal attack, a co-ordinated group attack, name-calling, trolling or abuse;</li>
                    <li className="li2">(b) you do not have permission, right or license to use;</li>
                    <li className="li2">(c) is objectionable, indecent, profane, offensive, discriminatory, unlawful, deceptive or harmful;</li>
                    <li className="li2">(d) is personal, private or confidential information belonging to others;</li>
                    <li className="li2">(e) impersonates or misrepresents your affiliation with another person or entity;</li>
                    <li className="li2">(f) is intentionally false or misleading;</li>
                    <li className="li2">(g) transmits spam (including unauthorised advertising or promotional materials), worms, viruses, malware or any code of a destructive nature; and/or</li>
                    <li className="li2">(h) is defamatory, threatening illegal, fraudulent, or manipulative.</li>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}> You must respect that other people in the TEDxIITGuwahati community have had different life experiences and may have a different perspective to yours. We welcome different viewpoints.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}> We may hide or remove User Content which is inappropriate or is in breach of these Terms without notice.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Acceptable use</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>You must not:</p>
                  <ul className={styles.null_list}>
                    <li className="li2"> copy, modify, or create derivative works based on the content available through the Services and/or based on the Services generally;</li>
                    <li className="li2"> infringe the intellectual property rights, privacy or confidentiality of any third party;</li>
                    <li className="li2"> engage in any activity that is illegal and/or that may result in injury, death, property damage, and/or liability of any kind; and/or</li>
                    <li className="li2"> post or transmit any unauthorised material, including material that is (in our opinion) offensive, inflammatory, defamatory, racist, obscene, threatening, or pornographic.&nbsp;</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Intellectual property</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    We post talks and content from around the world.
                    <span className="Apple-converted-space">&nbsp; </span>
                    While we strive to ensure all ideas posted are credible, based on facts and do not infringe on other
                    people’s intellectual property rights, there may be an occasion when content is provided by other parties,
                    and/or may include material that infringes on the copyright of another third party. If you believe in good
                    faith that content on our site infringes your copyright, you may send us a notice detailing the alleged
                    infringement and requiring it to be removed.
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    We own, or are the licensee of, the intellectual property rights in the content
                    available via the Services, including text, graphics, photographs, logos, icons, sound recordings, and
                    software. These Terms do not transfer any intellectual property rights from us to you or any third parties.&nbsp;
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>You must not (without our consent):</p>
                  <ul className={styles.abcd_list}>
                    <li>(a) adapt, reproduce, store, distribute, print, display, perform, publish, or create derivative works from any part of the content or material downloaded from the site;</li>
                    <li>(b) use our name, logo and other trademarks, service marks, graphics, and logos or any third-party trademarks appearing on the site; and/or</li>
                    <li>(c) create links to the Services.&nbsp;</li>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>The parties agree we will own any intellectual property rights arising from any suggestions or feedback you provide to us.&nbsp;</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Linked Websites</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    The Services may contain links to third-party websites, products, and services.&nbsp;
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    Nothing available through the Services amounts to an offer by us or any third-party provider to:
                  </p>
                  <ul className={styles.null_list}>
                    <li>provide any goods or services to you; or</li>
                    <li>enter into any contract with you.&nbsp;</li>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    We display certain Services via the YouTube embedded player on our website. Any content that is provided
                    by YouTube is subject to their terms of use and license requirements. Please review their terms of use that
                    apply for license and usage terms.&nbsp;
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    We do not make any representations or warranties in relation to, and we exclude all liability from, third-party websites, products, and services.&nbsp;
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Privacy and Security</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    Our collection, use, and disclosure of any personal information provided by you or accessible by us when
                    you use the Services will be subject to our <a href="/Privacy"><span
                      className="s2">privacy policy</span></a>.
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    You acknowledge and agree that the TEDxSydney community is a public place. Don’t post personal information
                    that you would not be comfortable sharing with a stranger. We don’t recommend you post any information that
                    may identify you, such as your address, email address, or phone number.
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    While we take reasonable steps to protect your information, we do not warrant and cannot ensure the
                    security of any information that you transmit to us.&nbsp;
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    We are not responsible for any of the privacy or security practices of any of the users of the Services or
                    any linked websites.&nbsp;
                  </p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>
                    Any information that you transmit to us or to any other user of the Services is transmitted at your own
                    risk. We are not responsible or liable with respect to any communications or transactions between you and
                    any third party that you contact as a result of accessing or using the Services.&nbsp;
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Event Attendance</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>From time to time we may host physical or digital TEDxIITGuwahati events (<strong>Event</strong>).</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>To attend a:</p>
                </li>
                <ul className={styles.abcd_list}>
                  <li>
                    <p className={styles.p2}>
                      (a) physical and/or digital Event, you must:
                    </p>
                    <ul className={styles.num_list}>
                      <li>(i) register via <a href="/Registration">tedxsydney.com/community/</a> to become a member of the TEDxSydney community;</li>
                      <li>(ii) have registered successfully and paid for your attendance in full;</li>
                      <li>(iii) agree to abide by our attendee code of conduct (to the extent applicable to the physical or digital Event) set out at clause 10;</li>
                      <li>(iv) provide photo identification if we require;</li>
                      <li>(v) consent to us (or someone on our behalf) or our partners taking screen shots or recording audio or video of your attendance and participation at the Event;</li>
                    </ul>
                  </li>
                  <li>(b) a digital Event, you must be 12 years of age or older; or</li>
                  <li>
                    (c) a physical Event:
                    <ul className={styles.num_list}>
                      <li>(i) be 18 years of age or older, or if you are under 18 years of age and it is a physical Event, be accompanied by an adult over 18 years old who has also registered to attend the Event;</li>
                      <li>(ii) consent to us (or someone on our behalf) or our partners taking and sharing photographs, and audio and video recordings of you at an Event (<strong>Recordings</strong>).</li>
                    </ul>
                  </li>
                </ul>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>We own all rights (including copyright and other intellectual property rights) to the Recordings, are under no obligation to use, or pay you for, our use of the Recordings, and you have no right of approval, claim for compensation, or claim, arising out of, directly or indirectly, from the use and publication of the Recordings.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Transfer or Cancellation of Event Registration</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>If you have paid registration fees for an Event and are unable to attend, you may transfer your registration without cost, provided:</p>
                  <ul className={styles.abcd_list}>
                    <li>(a) the transferee meets the requirements in clause 2, including registering via <a href="/Registration">Register</a> to become a member of the TEDxIITGuwahati community; and</li>
                    <li>(b) you submit your transfer request by emailing us at iitg.tedx@gmail.com at least 2 full days before the Event.</li>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>As we are a non-profit organisation, our registration fees represent an integral part of our funding, and we do not provide refunds for cancellations or non-attendance by you, unless required by any applicable Australian law. We apologise for the inconvenience, but we hope you understand. We do allow you to transfer your registration to another member, free of charge, in accordance with clause 1.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>We reserve the right to cancel, reschedule, or reframe the delivery of an Event in our sole discretion. If that happens, then the following terms apply.</p>
                  <ul  className={styles.abcd_list}>
                    <li>(a) We will notify you of any changes to an Event as soon as is reasonably practicable.</li>
                    <li>(b) Where we reschedule or reframe the delivery of an Event, we will automatically transfer your registration to the rescheduled/reframed Event. Clause 1 will continue to apply, and you may transfer your registration pursuant to it.</li>
                    <li>(c) If we cancel, reschedule, or reframe the delivery of an Event due to government restrictions or mandates arising as a result of COVID-19 (and/or any other cause independent of human control), we will outline the options that we are able to offer in respect of your registration at that time.</li>
                    <li>(d) For the reasons explained in clause 2, save for where we are required to provide a refund, our tickets are generally non-refundable.</li>
                    <li>(e) You can contact us at <a href="mailto:iitg.tedx@gmail.com">iitg.tedx@gmail.com</a> for further assistance in relation to your registration.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Attendee Code of Conduct</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>TEDxIITGuwahati is built around a spirit of curiosity, open-mindedness, respect, and tolerance, and we do not tolerate harassment in any form.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>As a member of the TEDxIITGuwahati community and Event attendee, you’re expected to practice tolerance and respect for everyone, including other attendees, staff, volunteers, and vendors, regardless of their background, class, political views, or status.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>At an Event, you agree to:</p>
                  <ul  className={styles.abcd_list}>
                    <li>(a) respect people’s space and everyone’s ability to participate in the event;</li>
                    <li>(b) respect confidentiality requests by speakers and other attendees; and</li>
                    <li>(c) look out for your fellow attendees.</li>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>These following behaviors don’t belong and will not be accepted at our Events.</p>
                  <ul  className={styles.abcd_list}>
                    <li>(a) Sexual harassment of any kind, including unwelcome sexual attention and inappropriate physical contact.</li>
                    <li>(b) Being disruptive, drinking excessively, bullying, stalking, following, or threatening anyone.</li>
                    <li>(c) Homophobia, racism, or behavior that unlawfully discriminates against a group or class of people.</li>
                    <li>(d) Invasion of privacy, including taking photos that are unwanted or intrusive.</li>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>We reserve the right to:</p>
                  <ul  className={styles.abcd_list}>
                    <li>(a) bar from our Events in their entirety or in part;</li>
                    <li>(b) cancel the Event or TEDxSydney registration of; and/or</li>
                    <li>(c) remove from an Event,</li>
                  </ul>
                  <p className={styles.p2} style={{ paddingLeft: '40px' }}>any person who violates this attendee code of conduct, without refund (to the extent permitted by law).</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>If, while at an Event, you have been involved in or have witnessed an incident that violates this attendee code of conduct, please report it as soon as possible to a TEDxIITGuwahati team member. Team members are onsite at our customer service and registration desks. Share as much information as you can to help us with any investigation of the incident.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>All reports will be treated in the strictest of confidence to the extent possible, taking account of the TEDxSydney’s obligations to properly investigate complaints in appropriate circumstances.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>If you wish, our team can also help you contact venue security or the local police or provide you with an escort to assist you in feeling safe for the duration of the event.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Reliance</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>To the extent permitted by law, we make no representations, and provide no warranties of any kind, including:</p>
                  <ul  className={styles.abcd_list}>
                    <li>(a) that your use of the Services will be uninterrupted or error-free, free from loss, corruption, attack, viruses, interference, hacking, or other security intrusion; or</li>
                    <li>(b) that any information or other content posted or otherwise made available to you (including at an Event) by us or by third parties is complete, accurate, verified, audited, adequate, reliable, up-to-date, or suitable for any particular purpose, or that reasonable care has been taken in compiling, preparing and posting such information and third-party content.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Liability</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>Your use of the Services and attendance at an Event is entirely at your own risk. Not with standing anything else in this agreement, we accept no liability for any decisions made by you, as a result of your use of the Services or attendance at an Event.</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>To the extent permitted by law:</p>
                  <ul className={styles.abcd_list}>
                    <li>(a) the Services and all third-party content available to you through the Services are (except as expressly stated by us) provided “as is” and “as available” for your use without warranties of any kind, either express or implied, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement; and</li>
                    <li>(b) we are not liable for any direct, indirect loss or Consequential Loss resulting from:</li>
                    <ul className={styles.num_list}>
                      <li>
                        <p className={styles.p2}>(i) any action taken, or reliance made by you on any information or other third-party content available to you through the Services;</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(ii) any unauthorised access of or breach of security to the Services for whatever reason;</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(iii) any error, faults, omissions, inaccuracies or misrepresentation in relation to the Services and their content;</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(iv) the transmission of any virus; and/or</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(v) your use of the Services or attendance at an Event.</p>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p>Nothing contained in these Terms restricts or modifies any guarantee. </p>
                </li>
                <li className={styles.termslistitem}>
                  <p>TEDxIITGuwahati’s liability for its failure to comply with a guarantee limited to:</p>
                  <ul className={styles.abcd_list}>
                    <li>(a) in the case of goods, to one or more of the following:</li>
                    <ul className={styles.num_list}>
                      <li >
                        <p className={styles.p2}>(i) the replacement of the goods or the supply of equivalent goods;</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(ii) the repair of the goods;</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(iii) the payment of the cost of replacing the goods or acquiring equivalent goods;</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(iv) the payment of the cost of having the goods repaired;</p>
                      </li>
                    </ul>
                  </ul>
                  <ul className={styles.abcd_list}>
                    <li>(b) in the case of services any cost of the following as determined by us:</li>
                    <ul className={styles.num_list}>
                      <li>
                        <p className={styles.p2}>(i) the supplying of the services again; or</p>
                      </li>
                      <li>
                        <p className={styles.p2}>(ii) the payment of the cost of having the services supplied again.</p>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className={styles.termslistitem}>
                  <p>In this clause 12:</p>
                  <ul className={styles.abcd_list}>
                    <li>(a) “Consequential Loss” includes losses which do not arise naturally from a breach of contract in the usual course, loss of profits, loss of revenue, loss of data, lost production, loss of business, loss of the benefit of any contract or other agreement or arrangement, death or personal injury, damage to health, damage to reputation, and legal costs; and</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>Maintenance</h2>
            <div className={styles.termtextwrapper}>
              <p className={styles.p2}>We may at any time and without notice, modify, suspend or terminate the operation of, or access to the Services, or any part of, for any reason, to interrupt the operation of the Services, or any part of, as necessary to perform maintenance, error correction or other changes.&nbsp;</p>
            </div>
          </div>
          <div className={styles.contentblock}>
            <h2 className={styles.h2term}>General terms</h2>
            <div className={styles.termtextwrapper}>
              <ul role="list" className={styles.termslist}>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>Notices required to be given under these Terms may be sent by email to <a href="mailto:iitg.tedx@gmail.com"><span className="s2">iitg.tedx@gmail.com</span></a>.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>If any term or provision of these Terms is held by a court to be illegal, invalid, or unenforceable under the applicable law, that term or provision will be severed from these Terms, and the remaining terms and conditions will be unaffected.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>A failure to enforce any right or provisions in these Terms will not constitute a waiver of such or any other provision.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>We will not be responsible for failures to fulfill any obligations due to causes beyond our control.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>These Terms will not be interpreted or construed to confer any rights or remedies on any third parties.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>These Terms constitute the entire agreement between the parties, with all other agreements or understandings previously existing between you and us hereby replaced.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>The Services or content made available on or through the Services are not intended for distribution to, or use by, any person or entity, in any jurisdiction or country, where such distribution or use would be contrary to law or regulation. We may limit the availability of the Services or content, or any part of, to any person, geographic area, or jurisdiction at any time.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>Nothing in these Terms should be read to override or circumvent any laws of a foreign jurisdiction. All Services or content made available through the Services are void where prohibited.&nbsp;</p>
                </li>
                <li className={styles.termslistitem}>
                  <p className={styles.p2}>These Terms are governed by the laws of Assam, India. You agree to submit to the non-exclusive jurisdiction of the courts of the State of Assam to resolve any dispute or claim arising from these Terms.&nbsp;</p>
                </li>
                <p className={styles.p2}><em>These terms were updated on 11 January 2024.</em></p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <ScrollButton />
    </>
  )
}

export default Terms;
