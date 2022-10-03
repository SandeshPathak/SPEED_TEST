import React, { useState } from "react";
import axios from axios;

const SubmitArticle = () => {
  const handleSubmissionOfArticle = (event) => {
    event.preventDefault();

    const [isSubmitted, setIsSubmitted] = useState(false);
    var title = document.getElementsById("title").value;
    var author = document.getElementsById("author").value;
    var description = document.getElementsById("description").value;
    var publishedDate = document.getElementsById("publishedDate").value;
    var publisher = document.getElementsById("publisher").value;

    axios
      .get('http://localhost:5000/api/SPEED/submit')
      .then(res => { setIsSubmitted(res.isSuccessful ? true : false) })
      .catch(err => console.log("API error!"));
  };

  const formToSubmitArticle = (
    <div>
      <h2>Submit Article</h2>
      <div className="container">
        <div className="form">
          <form onSubmit={handleSubmissionOfArticle}>
            <div className="input-container">
              <label>Title </label><br></br>
              <input type="text" name="title" id="title" required />
            </div>
            <div className="input-container">
              <label>Author </label><br></br>
              <input type="text" name="author" id="author" required />
            </div>
            <div className="input-container">
              <label>Description </label><br></br>
              <input type="text" name="description" id="description" required />
            </div>
            <div className="input-container">
              <label>Published Date </label><br></br>
              <input type="text" name="publishedDate" id="publishedDate" required />
            </div>
            <div className="input-container">
              <label>Publisher </label><br></br>
              <input type="text" name="publisher" id="publisher" required />
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      formToSubmitArticle
      <p>isSubmitted ? <i>Article Submitted Successfully</i> : <i></i></p>
    </div>
  );
};

export default SubmitArticle;