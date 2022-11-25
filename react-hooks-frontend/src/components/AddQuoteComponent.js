import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import QuoteService from "../services/QuoteService";

const AddQuoteComponent = (button ) => {
  const [title, setTitle] = useState("");
  const [quote, setQuote] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateQuote = () => {
    // e.preventDefault();

    const Quote = {setTitle, setQuote};

    if (id) {
      QuoteService.updateQuote(id, Quote).then((response) => {
          history.push("/Quotes");
        }).catch((error) => {
          console.log(error);
        });
    } else {
      QuoteService.createQuote(Quote)
        .then((response) => {
          console.log(response.data.title,response.data.quote)

          history.push("/Quotes")
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  useEffect(() => {
    QuoteService.getQuoteById(id)
      .then((response) => {
        setTitle(response.data.title);
        setQuote(response.data.quote);
      })
      .catch((error) => {
        console.log(error);
      });
  },[id]);

  const Titl = () => {
    if (id) {
      return <h2 className="text-center">Update Quote</h2>;
    } else {
      return <h2 className="text-center">Add Quote</h2>;
    }
  }

  return (
    <div style={{background:'grey'}}>
      <br />
      <br />
      <div className="container" >
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {Titl()}
            <div className="card-body">
              <form >
                <div className="form-group mb-2">
                  <label className="form-label"> Title :</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Quote :</label>
                  <input
                    type="text"
                    placeholder="Enter Quote"
                    name="quote"
                    className="form-control"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateQuote(e)}
                >
                  Submit 
                </button>
                <Link
                  to="/Quotes"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
               
                  Cancel 
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddQuoteComponent;
