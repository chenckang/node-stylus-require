import React from 'react'

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>Document</title>
        </head>
        <body>
          <div>
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

export default Layout;
