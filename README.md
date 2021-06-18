tại sao immuitibulity lại quan trọng?

immutibility là gì ?
Theo nguồn của Wikipedia
Immutable object (object không thay đổi) ám chỉ các object không thể bị đổi state sau khi nó đã được tạo ra. 
Điều hoàn toàn trái ngược so với mutable object (object có thể thay đổi) vốn cho phép ta được thoải mái thay state của nó. Trong một số trường hợp, object vẫn được cho là Immutable mặc dù một số thuộc tính bên trong đã thay đổi nhưng state của object vẫn không khác gì so với cũ.

ví dụ :
các biên bất biên như là được khai báo const c ++, js, final java..,hằng số


Nếu một đối tượng được biết là Immutibulity, bạn nên tạo một tham chiếu của nó thay vì sao chép toàn bộ đối tượng. Điều này được thực hiện để tiết kiệm bộ nhớ bằng cách ngăn chặn sự trùng lặp dữ liệu và tránh các lệnh gọi đến các hàm tạo và hủy; nó cũng dẫn đến khả năng tăng tốc độ thực thi.

Trong JavaScript, tất cả các kiểu nguyên thủy (Undefined, Null, Boolean, Number, BigInt, String, Symbol) là bất biến, nhưng các đối tượng tùy chỉnh thường có thể thay đổi được.

Để mô phỏng tính bất biến trong một đối tượng, người ta có thể định nghĩa các thuộc tính là chỉ đọc (có thể ghi: false).
imutibility trong react js ?


Lời khuyên đầu tiên và cũng là căn bản nhất, luôn dùng const khi khai báo. Chắc bạn cũng đã biết, let và const được giới thiệu từ phiên bản ES6, cho phép khai báo biến có tầm vực theo khối và không thực hiện hoisting. Điểm khác biệt giữa let và const là bạn có thể thay đổi giá trị của biến khai báo với let, trong khi không thể với const.


Cũng cần lưu ý là khi khai báo objects với const, mặc dù bạn không thể gán giá trị mới cho object nhưng giá trị của các thuộc tính vẫn có thể bị thay đổi.

Như vậy để thay đổi giá trị của object mà vẫn đảm bảo tính chất bất biến, chúng ta cần sử dụng Object.assign(target, ...sources). 

map(), filter(), reduce(). Một đặc điểm của các hàm này là chúng luôn trả về mảng/giá trị mới chứ không thay đổi mảng ban đầu.

Hạn chế viết logic bên trong hàm render() mà thay vào đó nên đưa các bước thao tác dữ liệu thành từng phương thức riêng.
tại sao nó lại quan trọng 

Việc phát hiện các thay đổi trong các đối tượng có thể thay đổi là rất khó vì chúng được sửa đổi trực tiếp. Việc phát hiện này yêu cầu đối tượng có thể thay đổi được so sánh với các bản sao trước đó của chính nó và toàn bộ cây đối tượng được duyệt qua.

Việc phát hiện các thay đổi trong các đối tượng không thay đổi dễ dàng hơn đáng kể. Nếu đối tượng bất biến đang được tham chiếu khác với đối tượng trước đó, thì đối tượng đó đã thay đổi.

Lợi ích chính của tính bất biến là nó giúp bạn xây dựng các thành phần thuần túy trong React. Dữ liệu bất biến có thể dễ dàng xác định xem các thay đổi đã được thực hiện hay chưa, giúp xác định khi nào một thành phần yêu cầu render lại

ứng dụng của phần này, lợi ích
Trong React-Redux, rất nhiều components khác nhau làm việc với state chung của ứng dụng và các components đó hoạt động cùng lúc nên sử dụng Immutability với state là cách tốt nhất để theo dõi hoạt động của nó.


Tính bất biến có thể mang lại hiệu suất cao hơn cho ứng dụng của bạn và dẫn đến việc lập trình và gỡ lỗi đơn giản hơn, vì dữ liệu không bao giờ thay đổi dễ lý giải hơn dữ liệu được tự do thay đổi tùy ý trong ứng dụng của bạn.


Cả Redux và React-Redux đều sử dụng tính năng shallow equality checking. Cụ thể: - Tiện ích connectReducers của Redux shallowly checks các thay đổi tham chiếu gây ra bởi các bộ giảm mà nó gọi. - Phương thức kết nối của React-Redux tạo ra các thành phầnshallowly checks thay đổi tham chiếu đối với trạng thái gốc và các giá trị trả về từ hàm mapStateToProps để xem liệu các thành phần được bao bọc có thực sự cần kết xuất lại hay không. Việc shallowly checks như vậy đòi hỏi tính bất biến để hoạt động chính xác.

Kiểm tra bình đẳng nông (hoặc bình đẳng tham chiếu) chỉ đơn giản là kiểm tra xem hai biến khác nhau tham chiếu đến cùng một đối tượng; ngược lại, kiểm tra bình đẳng sâu (hoặc bình đẳng giá trị) phải kiểm tra mọi giá trị thuộc tính của hai đối tượng.

Redux uses shallow equality checking in its combineReducers function to return either a new mutated copy of the root state object, or, if no mutations have been made, the current root state object.


React-Redux sử dụng tính năng kiểm tra bình đẳng nông để xác định xem thành phần mà nó bao bọc có cần được hiển thị lại hay không.

Để làm điều này, nó giả định rằng thành phần được bao bọc là tinh khiết; nghĩa là thành phần sẽ tạo ra cùng một kết quả với cùng một đạo cụ và trạng thái.

Bằng cách giả sử thành phần được bao bọc là thuần túy, nó chỉ cần kiểm tra xem đối tượng trạng thái gốc hoặc các giá trị trả về từ mapStateToProps có thay đổi hay không. Nếu không, thành phần được bao bọc không cần kết xuất lại.

Nó phát hiện sự thay đổi bằng cách giữ một tham chiếu đến đối tượng trạng thái gốc và tham chiếu đến từng giá trị trong đối tượng đạo cụ được trả về từ hàm mapStateToProps.

Sau đó, nó chạy một kiểm tra bình đẳng nông trên tham chiếu của nó tới đối tượng trạng thái gốc và đối tượng trạng thái được chuyển tới nó, và một loạt kiểm tra nông riêng biệt trên mỗi tham chiếu đến giá trị của đối tượng đạo cụ và những giá trị được trả về khi chạy lại hàm mapStateToProps.


Kiểm tra bình đẳng nông với một đối tượng có thể thay đổi sẽ không gây ra vấn đề với Redux, nhưng nó sẽ gây ra vấn đề với các thư viện phụ thuộc vào cửa hàng, chẳng hạn như React-Redux.

Cụ thể, nếu lát cắt trạng thái được chuyển đến một bộ giảm thiểu bởi các bộ kết hợp là một đối tượng có thể thay đổi, bộ giảm tốc có thể sửa đổi nó trực tiếp và trả về nó.

Nếu đúng như vậy, việc kiểm tra bình đẳng cạn mà connectReducers thực hiện sẽ luôn vượt qua, vì các giá trị của phần trạng thái được trả về bởi trình giảm thiểu có thể đã bị thay đổi, nhưng bản thân đối tượng thì không - nó vẫn là đối tượng giống như được chuyển cho trình giảm thiểu.

Theo đó, connectReducers sẽ không đặt cờ hasChanged của nó, mặc dù trạng thái đã thay đổi. Nếu không có bộ giảm nào khác trả lại lát trạng thái mới, được cập nhật, cờ hasChanged sẽ vẫn được đặt thành false, khiến các bộ giảm kết hợp trả về đối tượng trạng thái gốc hiện có.

Kho lưu trữ sẽ vẫn được cập nhật các giá trị mới cho trạng thái gốc, nhưng vì bản thân đối tượng trạng thái gốc vẫn là cùng một đối tượng, các thư viện liên kết với Redux, chẳng hạn như React-Redux, sẽ không nhận biết được trạng thái đột biến và vì vậy sẽ không kích hoạt kết xuất của một thành phần được bao bọc.
