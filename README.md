

https://github.com/user-attachments/assets/37b95cfb-ae59-4cba-8476-997500db7d07

Nguyễn Tùng Lâm
Lớp D18CNPM2
MSV: 23810310135

## 📱 Screenshots

### 🏠 Home

![Home](assets/images/1.jpg)

### 🛒 Cart

![Cart](assets/images/2.jpg)
![Cart](assets/images/3.jpg)
![Cart](assets/images/4.jpg)
![Cart](assets/images/5.jpg)

### ❤️ Favourite

![Favourite](assets/images/6.jpg)

1. AsyncStorage hoạt động như thế nào?

AsyncStorage giống như một cuốn sổ ghi chép đặt trên kệ sách của ứng dụng. Khi ứng dụng (phần JavaScript) muốn lưu một thứ gì đó, nó không thể tự tay viết vào cuốn sổ này vì cuốn sổ nằm ở một căn phòng khác gọi là "Hệ điều hành" (Native side).

Để thực hiện, JavaScript phải gửi một lời nhắn qua một "cây cầu" (Bridge) để nhờ nhân viên ở phía Native viết hộ. Vì việc di chuyển qua cầu và tìm đúng trang sách để ghi chép tốn thời gian hơn việc chỉ nhớ trong đầu, nên quá trình này được thực hiện bất đồng bộ (Asynchronous). Điều này có nghĩa là JavaScript sẽ gửi yêu cầu đi, sau đó tiếp tục làm việc khác và đợi một tín hiệu phản hồi (Promise) khi việc ghi chép đã hoàn thành. Đặc biệt, cuốn sổ này chỉ chấp nhận chữ viết (String), nên nếu bạn muốn lưu một món đồ vật phức tạp (Object hay Array), bạn buộc phải "nghiền" nó thành văn bản thông qua định dạng JSON.

2. Vì sao dùng AsyncStorage thay vì biến State?

Sự khác biệt lớn nhất nằm ở độ bền của ký ức.

Biến State (như useState hay Redux) giống như trí nhớ ngắn hạn trong bộ não của ứng dụng. Nó cực kỳ nhanh nhạy, giúp ứng dụng phản ứng tức thì với người dùng. Tuy nhiên, trí nhớ này chỉ tồn tại khi ứng dụng còn đang "thức" (đang chạy). Ngay khi người dùng thoát app hoàn toàn hoặc khởi động lại điện thoại, bộ não này sẽ bị xóa sạch (RAM bị giải phóng), và ứng dụng sẽ tỉnh dậy trong trạng thái "mất trí nhớ" hoàn toàn.

Ngược lại, AsyncStorage là trí nhớ dài hạn. Dữ liệu được ghi vào ổ cứng (Disk) của điện thoại. Dù bạn có tắt máy, hết pin hay cập nhật ứng dụng, những gì đã ghi vào "cuốn sổ" này vẫn nằm im ở đó. Chúng ta dùng AsyncStorage không phải để thay thế State, mà để bảo tồn những thông tin quan trọng nhất—như mã đăng nhập (Token) hay cài đặt cá nhân—để khi ứng dụng "tỉnh dậy", nó có thể đọc lại sổ và nhớ ra bạn là ai.

3. So sánh với Context API

Dù cả hai đều có khả năng giúp dữ liệu xuất hiện ở mọi nơi trong ứng dụng, nhưng vai trò của chúng giống như một Cái loa đối đầu với một Kho lưu trữ.

Context API đóng vai trò là một hệ thống loa thông báo toàn cục. Khi bạn để dữ liệu vào Context, mục đích chính là để tất cả các linh kiện (Component) ở xa đều có thể nghe thấy và cập nhật thông tin ngay lập tức mà không cần phải truyền tin qua tay nhau (Prop Drilling). Nhưng hãy nhớ, cái loa này chỉ hoạt động khi ứng dụng đang chạy. Nếu nguồn điện tắt, cái loa sẽ im lặng và mọi thông tin nó đang nắm giữ cũng tan biến.

AsyncStorage thì không quan tâm đến việc thông báo. Nó là một cái hầm chứa đồ. Nó không thể tự hét lên cho các Component biết khi dữ liệu bên trong thay đổi. Nếu bạn muốn các Component cập nhật theo dữ liệu mới trong hầm, bạn phải tự thân vận động: xuống hầm lấy đồ lên, rồi mới dùng "loa" (Context) hoặc "trí nhớ" (State) để thông báo cho toàn bộ ứng dụng.
