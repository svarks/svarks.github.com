var Header = React.createClass({
  render() {
    const { data } = this.props;

    return(
      <div className="page-header">
        <div className="details">
          <p className="name">
            { data.name }
          </p>
          <p className="position">
            { data.position }
          </p>
          <p className="location">
            { data.location }
          </p>
        </div>

        <div className="contact">
          <p className="email">
            <a href={ 'mailto:' + data.email }>
              { data.email }
            </a>
          </p>

          <p className="phone">
            { data.phone }
          </p>

          <p className="social">
            <a target="_blank" href={ data.linkedin } title="Linkedin">
              <span className="icon icon-linkedin"></span>
            </a>
            <a target="_blank" href={ data.github } title="Github">
              <span className="icon icon-github"></span>
            </a>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Header;
