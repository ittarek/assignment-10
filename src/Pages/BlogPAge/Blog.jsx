import React from "react";
import { Button, Card, Table } from "react-bootstrap";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

// import "./styles.css";
const ref = React.createRef();

const Blog = () => {
  return (
    <div>

<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>








      {/* 1 */}
      <Card className="m-5">
        <Card.Body>
          <Card.Title>
            {" "}
            1. Tell us the differences between uncontrolled and controlled
            components.
          </Card.Title>
          <Card.Text>
            In most cases, we recommend using controlled components to implement
            forms. In a controlled component, form data is handled by a React
            component. The alternative is uncontrolled components, where form
            data is handled by the DOM itself.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* 2 */}
      <Card className="m-5">
        <Card.Body>
          <Card.Title>
            {" "}
            2. How to validate React props using PropTypes{" "}
          </Card.Title>
          <Card.Text>
            Installing the prop-types Library and Basic Usage To install the
            prop-types library, we run:
            <span className="text-muted">npm i prop-types</span>
            Then we can use it by writing:{" "}
            <span className="text-secondary">
              FooComponent.propTypes = optionalArray: PropTypes.array,
              optionalBool: PropTypes.bool, optionalFunc: PropTypes.func,
              optionalNumber: PropTypes.number, optionalObject:
              PropTypes.object, optionalString: PropTypes.string,
              optionalSymbol: PropTypes.symbol,
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* 3 */}
      <Card className="m-5">
        <Card.Body>
          <Card.Title>
            {" "}
            3. Tell us the difference between nodejs and express js.
          </Card.Title>
          <Card.Text>
            <Table striped bordered hover className="">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Express.js</th>
                  <th>Node.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Usage</td>
                  <td>
                    It is used to build web-apps using approaches and principles
                    of Node.js.
                  </td>
                  <td>
                    {" "}
                    It is used to build server-side, input-output, event-driven
                    apps.
                  </td>
                </tr>
                <tr>
                  <td>Level of features</td>
                  <td>More features than Node.js.</td>
                  <td>Fewer features.</td>
                </tr>
                <tr>
                  <td>Building Block</td>
                  <td>It is built on Node.js.</td>
                  <td>It is built on Google’s V8 engine.</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* 4 */}
      <Card className="m-5">
        <Card.Body>
          <Card.Title>
            {" "}
            4. What is a custom hook, and why will you create a custom hook?
          </Card.Title>
          <Card.Text>
            We will create a custom Hook called useBoolean which I almost use
            every time when I join a new project as a React freelancer. But
            before we implement this hook, let's see what problem it solves for
            us. Let's start with a little example:
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
