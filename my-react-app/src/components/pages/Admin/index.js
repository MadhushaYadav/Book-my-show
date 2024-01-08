
import React from 'react';
import "./index.css"
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
const { Search } = Input;
function Home(){
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);


return(
    <div>
      <header>
        <div className="searchBox"> 
         <span className='mainHeading'>Book My Show</span>
        <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
          width: 600,
         }}
       />
        </Space>
      </div>
      </header>
      <main>
        <section>
          <div className="movies">
          <NavLink
          to="/messages"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : ""
         }
         style={{textDecoration:'none',color:"grey",marginRight:"10px"}}
         >
        Animal
        </NavLink>

        <NavLink
          to="/messages"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : ""
         }
         style={{textDecoration:'none',color:"grey",marginRight:"10px"}}
         >
          Parking
       </NavLink>

        <NavLink
          to="/messages"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : ""
         }
         style={{textDecoration:'none',color:"grey",marginRight:"10px"}}
         >
        Kho gaye ham kahan      
        </NavLink>

        <NavLink
          to="/messages"
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : ""
         }
         style={{textDecoration:'none',color:"grey",marginRight:"10px"}}
         >
        Dunki
        </NavLink>
          </div>
        </section>
        <section>




  <Carousel autoplay>
    
      <div className="image-1" ></div>
      <div className="image-2">2</div>
      <div className='image-3'></div>
      
    
  </Carousel>



        </section>
      </main>

   
  </div>
);
}
export default Home;