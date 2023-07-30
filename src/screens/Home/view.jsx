const Home = () => {
     return ( 
          <View
      className="flex-1 items-center justify-center bg-slate-100"
      onLayout={onLayoutRootView}
    >
      <Text
        style={{ fontFamily: "Estedad", fontSize: 20 }}
        className="text-center"
      >
        سلام خوبی این اولین پیام این برنامه هست که به زبان فارسیه!
      </Text>
      <Button variant="outline">تعداد کلیک هست</Button>
      <StatusBar style="auto" />
    </View>
      );
}
 
export default Home;