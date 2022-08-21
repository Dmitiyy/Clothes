import ReactPlayer from 'react-player';
import videoFirst from '../images/1-edit.mp4';
import videoSecond from '../images/2-edit.mp4';

import videoFirstPoster from '../images/1-edit-poster.jpg';
import videoSecondPoster from '../images/2-edit-poster.jpg';

const InfoPage = () => {
  const renderPlayerAttrs = (poster: string, url: string) => {
    return {
      width: '100%', controls: true, config: {file: {attributes: {poster: poster}}},
      url: [{src: url, type: 'video/mp4'}]
    }
  }

  return (
    <div className="info">
      <section className="info__videos">
        <div className="info__videos-item">
          <div className="info__videos-head">
            <h2>The main idea</h2>
          </div>
          <div className="info__videos-player">
            <ReactPlayer {...renderPlayerAttrs(videoFirstPoster, videoFirst)} />
          </div>
        </div>
        <div className="info__videos-item">
          <div className="info__videos-head">
            <h2>Features</h2>
          </div>
          <div className="info__videos-player">
            <ReactPlayer {...renderPlayerAttrs(videoSecondPoster, videoSecond)} />
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