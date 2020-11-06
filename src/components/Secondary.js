import Card from '@material-ui/core/Card';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import StarRateIcon from '@material-ui/icons/StarRate';

export default function Secondary() {
  return (
    <div className="section about">
      <Card className="inner about-secondary">
        <div className="about-item location"><LocationOnIcon style={{ fill: 'rgb(255, 153, 153) ' }}/> Clive, Iowa</div>
        <div className="about-item email"><EmailIcon style={{ fill: 'rgb(255, 153, 153) ' }}/> nicwoods63@gmail.com</div>
      </Card>

      <Card className="inner about-secondary skills">
        <h2 className="heading">Skills</h2>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>Javascript</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>React/Redux</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>React Native</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>HTML5, CSS3, SASS & LESS</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>Python</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>Java</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>AWS</div>
        <div className="about-item skill"><StarRateIcon style={{ fill: 'rgb(255, 153, 153) ' }}/>Making Jokes</div>
      </Card>
    </div>
  );
}
