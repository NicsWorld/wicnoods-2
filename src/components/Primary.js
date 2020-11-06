import Card from '@material-ui/core/Card';

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
          <div className="project-title">AI Powered Parking spot finder</div>

          <div className="project-desc"></div>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <div className="project-title">AI powered recycling - <a href="https://pls-recycle.com">pls-recycle.com</a></div>

          <div className="project-desc"></div>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <div className="project-title">COVID people counter with AI</div>

          <div className="project-desc"></div>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <div className="project-title">Lazy Lightswitch</div>

          <div className="project-desc"></div>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <div className="project-title">Remote controlled lightswitch</div>

          <div className="project-desc"></div>
        </div>
      </div>

      <div className="project">
        <div className="content-wrapper">
          <div className="project-title">Super Simple Tab</div>

          <div className="project-desc"></div>
        </div>
      </div>
    </Card>
  </div>
  );
}
