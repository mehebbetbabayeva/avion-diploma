
import './Title.css'
import frame from "../../../src/assets/images/products/frame.png"

const Title = () => {
  return (
<section className="title">
    <div className="title-container">
        <div className="title-right-side">
            <img src={frame} alt="title Image" className="title-image" />
        </div>
      
    </div>
</section>

  )
}

export default Title