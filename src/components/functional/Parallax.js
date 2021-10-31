function Parallax(props) {
  const id = props.id;
  const bgimage = props.bgimage;
  const icon = props.icon;
  const iconDisplay = props.iconDisplay;
  const height = props.height;
  const style = {
    minHeight: height,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRrepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + bgimage + ')',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  const styleContent = {
    // position: 'absolute',
    // top: '50%', left: '50%',
    // transform: 'translate(-50%,-50%)',
    fontSize: '3rem',
    fontWeight: '700',
    letterSpacing: '0.5rem',
    textShadow: '1px 1px 1px #666',
    color: '#ffffff',
  };
  const styleImg = {
    alignSelf: 'center',
    display: iconDisplay
  };
  return (
    <div className="parallax-container" style={style} id={id}>
        <img className="logo-lg" src={icon} style={styleImg} alt="logo" />
        <div className="parallax-title" style={styleContent}>{props.sectionTitle}</div>
    </div>
  )
}

export {Parallax}
