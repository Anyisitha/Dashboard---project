import React from "react";
import "./listing.css";

//Import icons ======>
import { BsArrowRightShort } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"

//Import Imges =====>
import img from '../../../Assets/fondo1.png'
import img1 from '../../../Assets/sospechar.png'
import img2 from '../../../Assets/buscapina.png'
import img3 from '../../../Assets/pharmaton.png'

import img4 from '../../../Assets/user1.png'
import img5 from '../../../Assets/user2.png'
import img6 from '../../../Assets/user3.png'
import img7 from '../../../Assets/user4.png'

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img} alt="Image Name" />
            <h3>Allegra</h3>
        </div>
        <div className="singleItem">
            <AiOutlineHeart className="icon" />
            <img src={img1} alt="Image Name" />
            <h3>Sospechar</h3>
        </div>
        <div className="singleItem">
            <AiOutlineHeart className="icon" />
            <img src={img2} alt="Image Name" />
            <h3>Buscapina</h3>
        </div>
        <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img3} alt="Image Name" />
            <h3>pharmaton</h3>
        </div>
        <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img3} alt="Image Name" />
            <h3>pharmaton</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
            <div className="heading flex">
                <h3>Top Sellers</h3>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="card flex">
                <div className="users">
                    <img src={img4} alt="User image" />
                    <img src={img5} alt="User image" />
                    <img src={img6} alt="User image" />
                    <img src={img7} alt="User image" />
                </div>
                <div className="cardText">
                    <span>
                        14.556 Plant sold <br />
                        <small>
                            21 Sellers <span className="date">7 days</span>
                        </small>
                    </span>
                </div>
            </div>
        </div>

        <div className="featureSellers">
            <div className="heading flex">
                <h3>Feature Sellers</h3>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="card flex">
                <div className="users">
                    <img src={img5} alt="User image" />
                    <img src={img7} alt="User image" />
                    <img src={img6} alt="User image" />
                    <img src={img4} alt="User image" />
                </div>
                <div className="cardText">
                    <span>
                        87.556 Plant sold <br />
                        <small>
                            45 Sellers <span className="date">6 days</span>
                        </small>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
