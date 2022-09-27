import React from 'react'
import ReactDOM from 'react-dom'

type Props = {}

const Bai4_27 = (props: Props) => {
    //vd
    //   const coures = [
    //     {
    //       name: "HTML, CSS",
    //     },
    //     {
    //       name: "ReactJS"
    //     }
    //   ]
    //   const jsx = (
    //     <ul>
    //       {coures.map(coures => 
    //             <li>{coures.name}</li>
    //       )}
    //     </ul>
    //   )

    function PostItem() {
        return(
            <div className="post-item">
                <img src="https://images.unsplash.com/file-1662566326028-7013d2f857a6image" alt="" width="200px"></img>
                <h2 className="post-title">C#(.NET) - Tương tác với F8 fullstack</h2>
                <p className="post-description">Bạn có kiến thức</p>
                <p className="post-published">Một ngày trước</p>
                <p>________</p>
            </div>   
        )
    }
    const app = (
        <div className="posts-list">  {/* render ra  function PostItem tương đương 3 cái*/}
            <PostItem />
            <PostItem />
            <PostItem />

        </div>
    )
    ReactDOM.render(app, document.getElementById("root"))


    return (
        <div>Bai4 *Thông thường chúng ta sẽ sử dụng map để render 1 danh sách element
            <br />
            Câu hỏi 4.28: *Khi chia component hợp lý sẽ giúp dự án có cấu trúc rõ ràng, có tính kế thừa, các component chỉ cần viết 1 lần và có thể dùng ở nhiều chỗ.
        </div>
    )
}

export default Bai4_27