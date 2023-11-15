import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchBar = ({ searchRes, setSearchRes, events }) => {
 const [results, setResults] = useState("");
 const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

 const handleSearch = () => {
    const filteredRes = events.filtered((event) =>
      event.name.tolocaleLowerCase().includes(results.tolocaleLowerCase())
    );

    setSearchRes(filteredRes);
 };

 const handleAutocomplete = (event) => {
    const suggestions = [];

    events.forEach((event) => {
      if (event.name.tolocaleLowerCase().includes(event.tolocaleLowerCase())) {
        suggestions.push(event.name);
      }
    });

    setAutocompleteSuggestions(suggestions);
 };

 return (
    <Form>
      <Row>
        <Col xxs={1} className="Search">
          <Form.Control
            type="search"
            value={results}
            onChange={(e) => {
              setResults(e.target.value);
              handleAutocomplete(e);
            }}
            placeholder="Search.."
            list="autocompleteSuggestions"
          />
          <datalist id="autocompleteSuggestions">
            {autocompleteSuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
           <Button variant="outline-light" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
    </Form>
 );
};

export default SearchBar;