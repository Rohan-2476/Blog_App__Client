import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to='/write/?edit=2'>
              <img src={Edit} alt='' />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          ratione.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae
          quod sequi ea vitae excepturi cum illum reiciendis officiis aperiam.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita hic
          beatae illo in sequi distinctio? Repudiandae ducimus iste, tempora,
          ipsa voluptatem sunt, voluptas qui sapiente exercitationem officia ad
          blanditiis perferendis.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          consequatur. Odio similique necessitatibus soluta rem porro
          consequatur, dolor, ex, velit magnam voluptate laborum accusamus vel
          sint corrupti perspiciatis blanditiis esse excepturi exercitationem a
          tempora. Eligendi nesciunt illum aut! Illum, autem. Illo eaque dolorem
          quos consequatur, aliquid laboriosam distinctio suscipit dolores.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias
          culpa natus ad officia aut, libero id corporis, temporibus dolores
          voluptatem! Quibusdam quae fugit ad, incidunt quia similique fugiat
          distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi harum exercitationem dolorum, voluptatum ab dicta? Eaque
          molestias harum vitae qui ea ullam asperiores placeat ab? Deserunt
          corrupti magni ipsum possimus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsa maxime soluta dolorem vitae, nostrum ullam
          ipsum molestiae quas ducimus quae officia ea laborum error expedita
          laboriosam eligendi nihil nulla sint.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
