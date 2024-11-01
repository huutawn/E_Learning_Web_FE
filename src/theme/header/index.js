import React, { memo, useState, useEffect, useRef } from "react";
import './style.scss';
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { ROUTERS } from "utils/router";
const Header = () => {
    
   const [menus] = useState([
    {
        name: "Trang chủ",
        path: ROUTERS.USER.HOME,
        // isShowSubmenu: false,
        // child : [
        //  {
        //     name: "Giới thiệu",
        //     path: ROUTERS.USER.INTRODUCE
        // },
        // {
        //     name: "Tin tức",
        //     path: ROUTERS.USER.NEWS
        // },
        // ]
    },
        {
        name: "Khóa tự học",
        path: ROUTERS.USER.RegisterExam,
       
        },
        {
            name: "Thi thử Onine",
            path: ROUTERS.USER.TestOnline,
            
        },
        {
            name: "Công cụ ôn thi",
            path: ROUTERS.USER.Review,
           
        },
        {
            name: "Tin tức",
            path: ROUTERS.USER.NEWS,
            // isShowSubmenu: false,
            // child : [
            //  {
            //     name: "Thông tin liên hệ",
            // path: ""},
             
            //  {
            //     name: "Hỏi đáp",
            // path: ""
            //  }

            // ]
        },
        {
            name: "Admin",
            path: ROUTERS.USER.admin,
          
        },
       
    
])

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [rememberMe, setRememberMe] = useState(false);


    
    const [isLoginBoxVisible, setLoginBoxVisible] = useState(false);
    const loginBoxRef = useRef(null); // Tham chiếu đến khung đăng nhập

    const toggleLoginBox = () => {
        setLoginBoxVisible(!isLoginBoxVisible);
    };

    // Hàm để đóng khung đăng nhập khi nhấn ra ngoài
    const handleClickOutside = (event) => {
        if (loginBoxRef.current && !loginBoxRef.current.contains(event.target)) {
            setLoginBoxVisible(false);
        }
    };

    useEffect(() => {
        // Thêm sự kiện khi nhấn ra ngoài
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Xóa sự kiện khi component bị hủy
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleLogin = () => {
        // Logic xử lý đăng nhập
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
        // Reset form sau khi đăng nhập
        setEmail("");
        setPassword("");
        setRememberMe(false);
    };

    return (
        <>
         <div className="container-big set_zindex" >
 <div className="Header_top">
    <div className="container_sub">
            <div className="row-html">
                <div className="col-6-html Header_top_left">
                    <ul>
                        <li>
                            
                        <CgMail size={20}/>swb@gmail.com
                        </li>
                        <li>
                        <MdOutlinePhoneInTalk size={20}/>  08888123213
                        </li>
                    </ul>
                </div>
                <div className="col-6-html Header_top_right">
                     <ul>
                         <li> 
                         <a href="#" onClick={toggleLoginBox}>
                                          
                                            <span className="login-html">
                                                <button> Đăng nhập</button>
                                                
                                            </span>
                              
                            
                             </a>
                             <a href="#" onClick={toggleLoginBox}>
                                          <span className="login">
                                              <button className="register-html"> Đăng ký</button>
                                          </span>
                                    
                          
                           </a>
                          
                             {isLoginBoxVisible && (
                    <div id="login-box" className="modal-html">
                        <div className="modal-content" ref={loginBoxRef}>
                            <div className="close-html" onClick={toggleLoginBox}>&times;</div>
                            <h2>ĐĂNG NHẬP</h2>
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                                placeholder="Email hoặc số điện thoại đăng nhập"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                
                            />
                            {/* <label htmlFor="password">Mật khẩu:</label> */}
                            <input
                            placeholder="Mật khẩu"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Ghi nhớ mật khẩu
                            </label><br /><br />
                            <input type="button" value="Đăng Nhập" onClick={handleLogin} />
                            <div className="footer-links">
                                <a href="#">Bạn chưa có mật khẩu? <span>Đăng ký ngay</span> </a>
                                <a href="#" className="footer-links-item"><span>Quên mật khẩu?</span></a>
                                {/* <hr/>
                                <span>Đăng nhập với:</span>
                                <div className="social-login">
                                    <AiOutlineFacebook size={24} onClick={() => console.log("Login with Facebook")} />
                                    <AiOutlineGoogle size={24} onClick={() => console.log("Login with Google")} />
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
                         </li>
                    
         
                     
                     </ul> 
                </div>
            </div>
         </div>
    </div>
   <div className="container_banner head_bt_bg set_zindex2">
   <div className="row-html"> 
        <div  className="col-xl-3-html"  >
             <div className="header_logo">
                <img src="https://www.saokim.com.vn/blog/wp-content/uploads/2022/04/logo-moi-cua-starbucks.jpg.webp"/>
             </div>
        </div>
        <div  className="col-xl-9-html "  >
             <nav className="header_menu">
                <ul>
                    {
                    menus?.map((menu , menuKey)=>(
                          <li key={menuKey} className={menuKey == 0 ? "active" : ""}> 
                          <a href={menu?.path}> {menu?.name}</a>
                          {
                            menu.child && (
                                <ul className="header_menu_dropdown"> 
                                {menu.child.map((childItem,childkey)=>(
                                     <li key={`${childkey}-${childkey}`}>
                                     <a href={childItem.path}>{childItem.name}</a>
                                 </li>
                                ))}
                                   
                                </ul>
                            )
                          }
                        </li>
                    ))}
        
                </ul>

             </nav>
        </div>
        </div>
    </div>
   </div>
   <div className="push"></div> 
    
        </>
   
    )
}
export default memo(Header);