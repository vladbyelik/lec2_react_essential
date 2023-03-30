import React from 'react';

class JsxExamples extends React.Component {
  render() {
    // js-code

    console.log(
      this.props
    );

    const number = 12345;
    const string = 'JsxExamples';
    const array = [1, 2, 'str', null, string, number, [1,2,3] ];

    const visible = true;

    // 1, 'str', [], {}, function(() => ' '), true --into Boolean() = true
    // null, '', undefined, false, !!0 -> false

    const object = {
      name: 'Ivan'
    };

    const getName = () => {
      return object.name;
    }

    // const title = <h3>Hi, I`m string in JSX</h3>

    return (
      <div>
        {/* {string}
        {number} */}

        {/* {array} */}

        {/* {object.name} */}

        {/* {getName()} */}

        {visible}

        <h3>
          {this.props.myFirstProp}
        </h3>

        <h4>
          {this.props.isLoggedIn
            ? 'User is logged in' 
            : 'User just logged out'
          }
        </h4>

        {undefined}
        {null}
      </div>
    )
  }
}

export default JsxExamples;