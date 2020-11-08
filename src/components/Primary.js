import Card from '@material-ui/core/Card';
import parking from '../parking.gif';
import plsRecycle from '../plsRecycle.JPG';
import peopleCounter from '../peopleCounter.gif';
import lazyLights from '../lazyLights.gif';
import remoteControlledLights from '../remoteControlledLights.gif';
import sst from '../SST.JPG';

export default function Primary() {
  return (
  <div className="section about">
    <Card className="inner">
      <h2 className="heading">About Me</h2>
      <p className="desc">
        Hi, I am Nic. Technology is my passion. I enjoy inventing, creating, transforming, home automation, 3D printing,  making phone apps, and in general making things. I gain a lot of value from making things from scratch.
        All the code for my projects should be on my github. If they aren't feel free to reach out.
      </p>
    </Card>

    <Card className="inner projects">
      <h2 className="heading">Projects</h2>

      <div className="project">
        <div className="content-wrapper">
        <img className="parking-lot-analyzer content-demo" src={parking} alt="AI Powered parking spot finder" />
          <h3 className="project-title">AI Powered Parking Spot Finder</h3>

          <p className="project-desc">This project, like most of the things I build stemmed from an actual real world problem I was having. After driving to work, if the parking lot was full, it was usually safe to park
          in the first spot you find. Otherwise you may end up driving around looking for spots for quite some time only to realize the first spot was the closest. BUT sometimes... I would be walking into the building only to realize that
          there was a spot closer.
          I decided I could make an application that tells me when a parking spot is empty, and where it is located in the parking lot.
          This was my first stab at AI, and I used Tensorflow to accomplish the example you see above.
          The app works by finding and locating all cars in the parking lot. After that, it detects when a car is moving, and does some various calculations to determine if the car is pulling out of the spot. If it determines the car is leaving, it highlights the spot where the car was.
          I submitted this project for a hackathon and placed 2nd.
          </p>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <img className="pls-recycle content-demo" src={plsRecycle} alt="AI Powered parking spot finder" />
          <h3 className="project-title">AI powered recycling - <a href="https://pls-recycle.com">pls-recycle.com</a></h3>

          <p className="project-desc">
            Like the others, this project was born from frustration of people recycling incorrectly. Often times, I would see pizza boxes in the recycling containers which is very frustrating to me. Without the proper knowledge I understand wanting to recycle at all costs.
            But what this does is create something called Recycling Contamination in which the facilities workers are required to throw away the entire batch.
            So potentially, I would recycle correctly every single day - and there is potential that everything I attempt to recycle has to be thrown away because someone created contamination.

            With this app, it allows individuals to take a picture of an item, and determines if it is recyclable or not based on the recycling laws of the county I currently live in.

            Checkout it out: <a href="https://pls-recycle.com">https://pls-recycle.com</a>
            <span className="disclaimer">Disclaimer: This isn't perfect. I built this app in about a day using Tensorflow.js. It uses a pre-trained model that knows of about 900+ items. So it may not know how to recognize everything you put in front of it.</span>
          </p>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
        <img className="people-counter content-demo" src={peopleCounter} alt="People counting with AI to beat COVID" />
          <div className="project-title">Beating COVID with AI</div>

          <p className="project-desc">
            I was approached by a friend to solve this problem. In 2020 knowing the number of people in a building, or a section of the building is valuable information for businesses.
            Often, when I go into any business today I read a sign that says no more than XX people in the building at a time.

            How is that enforced? How accurate is that actually?

            Now we have AI to do that. I made an AI powered people counter that determines can calculate direction that the person is moving, and either increment or decrement.

          </p>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
        <img className="lazy-lights content-demo" src={lazyLights} alt="lazyLights" />
          <div className="project-title">Lazy Lightswitch</div>

          <p className="project-desc">
            I realized just how much time I was wasting turning on/off my lights and fan. So I created an API in Javascript that I can use my phone to turn the switch on or off. The red parts you see are 3D printed, with a servo mounted to the light switch.
          </p>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
        <img className="remote-lights content-demo" src={remoteControlledLights} alt="Remote controlled lights" />
          <div className="project-title">Remote controlled lightswitch</div>

          <p className="project-desc">
            This was another project that stemmed from a need. I often would find I would forget to turn off certain appliances or lights. So I created a smart powerstrip that I can control from anywhere. The powerstrip conists of a raspberry pi wired to a 2-channel relay,
            which are all wired up to an standard electrical outlet.

            There is an API running on the raspberry pi that I created a UI for the control the items plugged into the outlet.
          </p>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <img className="remote-lights content-demo" src={sst} alt="Super Simple Tab" />
          <div className="project-title">Super Simple Tab</div>

          <p className="project-desc">
            I challenged myself to create a Chrome extension as fast as I could and here is what I got. It's a super simple tab. It replaces the default chrome tab, and I learned a bit on the way.

            <span className="disclaimer">You can find it in the Chrome Web Store here: <a href="https://chrome.google.com/webstore/detail/sst/fnoledofhahfangejhfdlmieejgbpgfi">https://chrome.google.com/webstore/detail/sst/fnoledofhahfangejhfdlmieejgbpgfi</a></span>
          </p>
        </div>
      </div>
    </Card>
  </div>
  );
}
