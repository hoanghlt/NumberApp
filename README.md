# Dùng KeyboardAvoidingView

- Dùng cho trường hợp nhập liệu thì keyboard sẽ che hết màn hình, dùng KeyboardAvoidingView để đưa màn hình hiển thị lên trên trong lúc nhập liệu.
  <KeyboardAvoidingView style={styles.screen} behavior="position">

# Có nhiều cách để làm responsitory:

- dùng Dimensions để lấy height, width của màn hình hiện tại và check mặc định
  const deviceHeight = Dimensions.get('window').height;
- useWindowDimensions trong react-native để lấy thông tin height, width từ api có sẳng
  const { width, height } = useWindowDimensions();
- tạo ra các file cấu hình riêng cho từng loại thiết bị với tiền tố file là tên loại thiết bị đó: colors.ios.js, colors.android.js
  hoặc là dùng Platform.select, Platform.OS để chỉnh cho từng loại thiết bị: borderWidth: Platform.select({ ios: 0, android: 2 })

# useEffect

- useEffect là 1 hook trong react, cho phép bạn thực hiện các hiệu ứng phụ trong các thành phần chức năng (function components).
  Nó thay thế các phương thức vòng đời như componentDidMount, componentDidUpdate, và componentWillUnmount trong các thành phần lớp (class components).
