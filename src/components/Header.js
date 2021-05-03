import React from 'react';
import "../index.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {

  function handlePageChangeGitHub() {
      window.location.href="https://github.com/nima-hakimi/";
  }

  function handlePageChangeLinkedIn() {
      window.location.href="https://www.linkedin.com/in/nima-hakimi-387716175/";
  }

  return (
    <div className="header">
      <div className="gitHubIcon" onClick={handlePageChangeGitHub}>
        <GitHubIcon style={{ fontSize: 44 }}/>
      </div>
      <div class="colors">NIMA'S &nbsp;COCKTAIL &nbsp;CALCULATOR</div>
      <div className="linkedInIcon" onClick={handlePageChangeLinkedIn}>
        <LinkedInIcon style={{ fontSize: 44 }}/>
      </div>
    </div>
  );
}

export default Header;
