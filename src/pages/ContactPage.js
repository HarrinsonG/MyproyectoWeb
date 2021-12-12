import { ReactComponent as Logo } from "../assets/logopasteur.svg";

export default function ContactPage() {
  return (
    <form className="formContact">
      <div className="div-form">
        <Logo />
      </div>

      <h3>Contact</h3>

      <div className="form-group">
        <label>De: </label>
        <input type="text" className="form-control" placeholder="Enter name" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>

      <div className="form-group">
        <label>Para</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter message"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
}
