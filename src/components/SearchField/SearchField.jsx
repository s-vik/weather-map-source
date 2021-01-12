import React from "react";
import { reduxForm, Field } from "redux-form";
import { Form, FormControl, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .search_city {
    margin-top: 50px;
  }
  .submit_button {
    margin: 0 auto;
    display: block;
    vertical-align: middle;
    line-height: ;
    padding: 6px;
    outline: none;
    border-radius: 5px;
    background: none;
    color: lightslategray;
    border: 1px solid gray;
    transition: 1s;
    &:hover {
      background: grey;
      color: #fff
    }
  }
`;

const FieldInput = ({ input, type, placeholder }) => {
  return (
    <FormControl
      type={type}
      placeholder={placeholder}
      value={input.value}
      onChange={input.onChange}
    />
  );
};

const SearchFieldForm = ({ handleSubmit }) => {
  return (
    <Styles>
      <div className="search_city">
        <Form onSubmit={handleSubmit} className="search_form">
          <Row>
            <Col md={7}>
              <Form.Group controlId="formBasicEmail">
                <Field
                  placeholder="Enter the name of the city"
                  name="search"
                  type="text"
                  component={FieldInput}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <button className="submit_button">watch weather</button>
            </Col>
          </Row>
        </Form>
      </div>
    </Styles>
  );
};
const SearchFieldReduxForm = reduxForm({
  form: "search",
})(SearchFieldForm);

const SearchField = (props) => {
  const onSubmit = (data) => {
    props.getWeather(data.search);
  };
  return <SearchFieldReduxForm onSubmit={onSubmit} />;
};

export default SearchField;
