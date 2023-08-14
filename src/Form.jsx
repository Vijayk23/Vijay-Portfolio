export function Form() {
  return (
    <div className="container">
      <form id="form">
        <div id="line1">
          <div className="input-group">
            <input type="text" id="yourname" placeholder="YOUR NAME..." />
          </div>
          <div className="input-group">
            <input type="text" id="youremail" placeholder="YOUR EMAIL..." />
          </div>
        </div>
        <div className="input-group">
          <input type="text" id="subject" placeholder="SUBJECT..." />
        </div>
        <div className="input-group">
          <input type="text" id="Message" placeholder="MESSAGE..." />
        </div>
        <button type="submit">SEND MESSAGE →</button>
      </form>
    </div>
  );
}
