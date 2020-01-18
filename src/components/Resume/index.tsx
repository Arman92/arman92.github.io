import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Heading } from "./styled";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "100%"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const ResumeComponent = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Heading>Section #1</Heading>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default ResumeComponent;
