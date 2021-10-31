function Parallax(props) {
  const bgimage = props.bgimage;
  const height = props.height;
  const style = {
    minHeight: height,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRrepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + bgimage + ')',
  }
  return (
    <div className="parallax-container" style={style}></div>
  )
}

export {Parallax}
