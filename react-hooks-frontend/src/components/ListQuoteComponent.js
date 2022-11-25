import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuoteService from "../services/QuoteService";

const ListQuoteComponent = () => {
  const [Quotes, setQuotes] = useState([]);

  useEffect(() => {
    getAllQuotes();
  }, []);

  const getAllQuotes = () => {
    QuoteService.getAllQuotes()
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteQuote = (id) => {
    QuoteService.deleteQuote(id)
      .then((response) => {
        getAllQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> List Quotes </h2>
      <Link to="/add-Quote" className="btn btn-primary mb-2">
        {" "}
        Add Quote{" "}
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th> Title </th>
          <th> Quote </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {Quotes.map((quote) => (
            <tr key={quote.id}>
              <td> {quote.id} </td>
              <td> {quote.title} </td>
              <td>{quote.quote}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-Quote/${quote.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteQuote(quote.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListQuoteComponent;
