import React, { Component } from 'react';

class XmlToJsonConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xmlData:
        '<?xml version="1.0" encoding="UTF-8"?><PrintLetterBarcodeData uid="991426425932" name="Amit Moli" gender="M" yob="1997" co="S/O: Shashikant" lm="somawar peth" vtc="Banhatti (Rural)" po="Banahatti" dist="Bagalkot" subdist="Jamakhandi" state="Karnataka" pc="587311" dob="26/12/1997"/>',
      jsonData: null,
    };
  }

  convertXmlToJson = () => {
    const { xmlData } = this.state;

    // Remove XML declaration and self-closing tag to simplify parsing
    const xmlWithoutDeclaration = xmlData.replace(/<\?xml.*?\?>/, '');
    const xmlWithoutSelfClosing = xmlWithoutDeclaration.replace(/\/>/g, '>');

    // Split attributes and values
    const attributes = xmlWithoutSelfClosing.match(/\S+?=".*?"/g);

    // Create JSON object
    const jsonObject = attributes.reduce((result, attribute) => {
      const [key, value] = attribute.split('=');
      result[key] = value.replace(/"/g, '');
      return result;
    }, {});

    this.setState({ jsonData: jsonObject });
  };

  render() {
    const { xmlData, jsonData } = this.state;

    return (
      <div>
        <h2>XML to JSON Converter</h2>
        <div>
          <strong>XML Data:</strong>
          <pre>{xmlData}</pre>
        </div>
        <div>
          <button onClick={this.convertXmlToJson}>Convert to JSON</button>
        </div>
        <div>
          <strong>JSON Data:</strong>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default XmlToJsonConverter;
