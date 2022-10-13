import React from "react";
import "./activity.css";

//Import Icons =====>
import { BsArrowRightShort } from "react-icons/bs";

//Importe Image =====>
import img1 from "../../../Assets/user.png";
import img2 from "../../../Assets/user1.png";
import img3 from "../../../Assets/user2.png";
import img4 from "../../../Assets/user3.png";
import img5 from "../../../Assets/user4.png";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          {/*  eslint-disable-next-line */}
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          {/*  eslint-disable-next-line */}
          <img src={img1} alt="customer-image" />
          <div className="customerDetails">
            <span className="name">Ola martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        {/*  eslint-disable-next-line */}
        <div className="singleCustomer flex">
          {/*  eslint-disable-next-line */}
          <img src={img2} alt="customer-image" />
          <div className="customerDetails">
            <span className="name">Ola martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          {/*  eslint-disable-next-line */}
          <img src={img3} alt="customer-image" />
          <div className="customerDetails">
            {/*  eslint-disable-next-line */}
            <span className="name">Ola martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        {/*  eslint-disable-next-line */}
        <div className="singleCustomer flex">
          <img src={img4} alt="customer-image" />
          <div className="customerDetails">
            <span className="name">Ola martha</span>
            <small>Ordered a new plant</small>
            {/*  eslint-disable-next-line */}
          </div>
          <div className="duration">2 min ago</div>
        </div>
        {/*  eslint-disable-next-line */}
        <div className="singleCustomer flex">

        {/*  eslint-disable-next-line */}

          <img src={img5} alt="customer-image" />
          <div className="customerDetails">
            <span className="name">Ola martha</span>
            <small>Ordered a new plant</small>
            {/*  eslint-disable-next-line */}
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
