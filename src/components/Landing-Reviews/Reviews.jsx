import "./Reviews.css";
import { IoStarSharp } from "react-icons/io5";

function Reviews() {
  return (
    <section className="reviews-container">
      <div className="headers">
        <p>patient reviews</p>
        <h1>what our patients say</h1>
        <p>
          Real stories from real smiles. See why thousands of patients trust
          Lumina Dental.
        </p>
      </div>
      <div className="reviews">
        <div className="review-card">
          <div className="rating">
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
          </div>
          <p className="review">
            I used to be terrified of the dentist. From the very first step at
            Lumina Dental, I felt completely at ease. My smile makeover results
            are incredible!
          </p>
          <div className="avatar-name">
            <p className="avatar">AY</p>
            <div className="name">
              <p>Ayşe Yılmaz</p>
              <p>Smile Design</p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="rating">
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
          </div>
          <p className="review">
            I had a dental emergency and was in so much pain. The team at Lumina
            Dental took me in right away, treated my issue, and made sure I was
            comfortable throughout the process. I'm so grateful for their care
            and professionalism.
          </p>
          <div className="avatar-name">
            <p className="avatar">ME</p>
            <div className="name">
              <p>Mehmet Erdem</p>
              <p>Emergency Care</p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="rating">
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
          </div>
          <p className="review">
            I had a dental emergency and was in so much pain. The team at Lumina
            Dental took me in right away, treated my issue, and made sure I was
            comfortable throughout the process. I'm so grateful for their care
            and professionalism.
          </p>
          <div className="avatar-name">
            <p className="avatar">AH</p>
            <div className="name">
              <p>Ahmet Hakan</p>
              <p>Dental Implants</p>
            </div>
          </div>
        </div>
      </div>
      <div className="see-all-reviews">
        <p>See All Reviews</p>
        <div className="rating-number">
          <p>4.9</p>
          <span>
            <IoStarSharp className="star" />
          </span>
          <p>from 2,000+ patients</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
