import ReactPlayer from 'react-player';
import videoFirst from '../images/1-edit.mp4';
import videoSecond from '../images/2-edit.mp4';

const InfoPage = () => {
  return (
    <div className="info">
      <section className="info__videos">
        <div className="info__videos-item">
          <div className="info__videos-head">
            <h2>The main idea</h2>
            {/* <div>{Array(3).fill(1).map((_, index) => (<span key={index} />))}</div> */}
          </div>
          <div className="info__videos-player">
            <ReactPlayer url={[{src: videoFirst, type: 'video/mp4'}]} width='100%' controls={true} />
          </div>
        </div>
        <div className="info__videos-item">
          <div className="info__videos-head">
            <h2>Features</h2>
            {/* <div>{Array(3).fill(1).map((_, index) => (<span key={index} />))}</div> */}
          </div>
          <div className="info__videos-player">
            <ReactPlayer url={[{src: videoSecond, type: 'video/mp4'}]} width='100%' controls={true} />
          </div>
        </div>
      </section>
      <section className="info__description">
        <p>
          You can watch these videos in order to comprehend the basic concept 
          of the project. Enjoy watching!
        </p>
      </section>
    </div>
  )
}
export default InfoPage;