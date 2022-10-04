import React from "react";
import axios from 'axios';

const SearchArticle = () => {
  const handleSearch = (event) => {
    event.preventDefault();

    var title = document.getElementsById("title").value;
    var author = document.getElementsById("author").value;
    var description = document.getElementsById("description").value;
    var publishedDate = document.getElementsById("publishedDate").value;
    var publisher = document.getElementsById("publisher").value;

    axios
      .get('http://localhost:5000/api/SPEED/search')
      .then(res => { searchResults = res.data })
      .catch(err => console.log("API error!"));
  };

  const formToSearchArticle = (
    <div>
      <h2>Submit Article</h2>
      <div className="container">
        <div className="form">
          <form onSubmit={handleSearch}>
            <div className="input-container">
              <label>Title </label><br></br>
              <input type="text" name="title" id="title" />
            </div>
            <div className="input-container">
              <label>Author </label><br></br>
              <input type="text" name="author" id="author" />
            </div>
            <div className="input-container">
              <label>Description </label><br></br>
              <input type="text" name="description" id="description" />
            </div>
            <div className="input-container">
              <label>Published Date </label><br></br>
              <input type="text" name="publishedDate" id="publishedDate" />
            </div>
            <div className="input-container">
              <label>Publisher </label><br></br>
              <input type="text" name="publisher" id="publisher" />
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
      formToSearchArticle
      <div>
        res.data {/* if count > 0 */}
        ? <div>Results: </div>
        : <i>No article found!</i>
      </div>
    </div>
  );
};

export default SearchArticle;