import Img2 from '../images/testimonials/pfp1.jpg'
import Img3 from '../images/testimonials/pfp2.jpg'

function Testimonials() {
  return (
    <>
      <section className='testimonials-section'>
        <div className='container'>
          <div className='testimonials-content'>
            <div className='testimonials-content__title'>
              <h4>Reviewed by People</h4>
              <h2>Clients' Testimonials</h2>
              <p>
                Explore the favorable influence we have had on our clients by
                reviewing their testimonials. Our clients have firsthand
                experience of our service and results, and they are enthusiastic
                about sharing their positive encounters with you.
              </p>
            </div>

            <div className='all-testimonials'>
              <div className='all-testimonials__box'>
                <span className='quotes-icon'>
                  <i className='fa-solid fa-quote-right'></i>
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className='all-testimonials__box__name'>
                  <div className='all-testimonials__box__name__profile'>
                    <img src={Img2} alt='user_img' />
                    <span>
                      <h4>Peris Hoteris</h4>
                      <p>Vilnius</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className='all-testimonials__box box-2'>
                <span className='quotes-icon'>
                  <i className='fa-solid fa-quote-right'></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className='all-testimonials__box__name'>
                  <div className='all-testimonials__box__name__profile'>
                    <img src={Img3} alt='user_img' />
                    <span>
                      <h4>Ronas Rizlis</h4>
                      <p>Kaunas</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
