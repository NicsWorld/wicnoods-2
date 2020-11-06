import main from '../main.jpg';
import { AppBar } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';

export default function Header() {
  return (
    <Card className="intro">
    <div className="container header">
    <img className="pic" src={main}/>
    <div className="header-content">
      <div className="name">Nic Woods</div>
      <div className="desc support-text">Software Engineer</div>
      <div className="social"><a target="_blank" href="https://github.com/NicsWorld"><GitHubIcon fontSize="large" style={{ fill: '#778492' }}/></a> <a target="_blank" href="https://twitter.com/thenicwoods"><TwitterIcon fontSize="large" style={{ fill: '#778492' }} /></a></div>
    </div>
    </div>
    </Card>
  );
}
