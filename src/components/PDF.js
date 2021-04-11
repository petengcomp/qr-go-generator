import React from 'react';

import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font, PDFDownloadLink, PDFViewer
} from '@react-pdf/renderer';

var QRCode = require('qrcode.react');


const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '50%',
  },
  textWrapper: {
    width: '100%',
    height: '20%',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Oswald',
    color: '#212121',
    fontSize: 50
  },
  buttonDown: {
    color: '#ff0000',
    shadowBox: 'none'
  }
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});


function qrImg() {
  const canvas = document.getElementById("qrcode");
  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");


  return pngUrl;
}


const PDF = ({ onChangeContent, value, margin, bgColor, fgColor, local, error }) => {
  return (
    <>
      <PDFDownloadLink onClick={onChangeContent} document={
        <Document>
          <Page style={styles.page} size="A4" page>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>
                {local}
              </Text>
            </View>
            <View style={styles.image}>
              <Image src={qrImg} />
            </View>
            <Text style={{ marginLeft: 29529952 }}>
              {value}{bgColor}{fgColor}{margin}{local}{error}
            </Text>
          </Page>
        </Document>
      } fileName="qrcode.pdf">
        {({ blob, url, loading, error }) => (<QRCode
          value={value}
          includeMargin={margin}
          size={300}
          bgColor={`${bgColor}`}
          fgColor={`${fgColor}`}
        />)}
      </PDFDownloadLink>

      <QRCode
        id="qrcode"
        value={value}
        style={{ display: 'none' }}
        includeMargin={margin}
        size={300}
        bgColor={`${bgColor}`}
        fgColor={`${fgColor}`}

      />


    </>
  );
}


export default PDF;