export default function Section({ 
  title, 
  children, 
  image, 
  imagePosition = 'right', 
  darkBg = false,
  fullWidth = false
}) {
  return (
    <section className={`section ${darkBg ? 'dark-bg' : ''} ${fullWidth ? 'full-width' : ''}`}>
      {!fullWidth ? (
        <div className={`section-content ${image ? 'with-image' : ''} ${imagePosition}`}>
          <div className="text-content">
            <h2>{title}</h2>
            <div>{children}</div>
          </div>
          {image && (
            <div className="image-content">
              <img src={image} alt={title} />
            </div>
          )}
        </div>
      ) : (
        <div className="full-width-content">
          <h2>{title}</h2>
          {children}
        </div>
      )}
    </section>
  );
}