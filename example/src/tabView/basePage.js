import { SafeAreaView, StyleSheet } from 'react-native'

const BasePage = ({ style, children, ...otherProps }) => {
  return (
    <SafeAreaView style={[styles.BasePage, style]} {...otherProps}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  BasePage: {
    flex: 1,
  },
})

export default BasePage;