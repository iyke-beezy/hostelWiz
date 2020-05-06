import React from 'react';
import { Card } from 'antd';
import './homepage.css';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import "../components/homepage.css";
const { Meta } = Card;

let filters = [
  require('../Assets/apart1.jpg'),
  require('../Assets/apart2.jpg'),
  require('../Assets/sale.jpg')
]
const Filters = () => {

  return (
    <div className="filterSection">
    {/* Card for hostels*/}
      <div className="filt">
        <Link to="/hostel">
          <Card hoverable cover={<img style={{ borderRadius: "16px 16px 0px 0px" }} alt="example" src={filters[0]} />}>
            <Meta className="filtMeta"
              title={<span className="filtTitle">Explore Affordable Hostels</span>}
              description={<span className="filtDesc">Find a hostel to rent to support your low budget plans</span>}
            />
          </Card>
        </Link>
      </div>

      {/* Card for rented Apartments */}
      <div className="filt">
        <Link to="/rentApartment">
          <Card hoverable cover={<img style={{ borderRadius: "16px 16px 0px 0px" }} alt="example" src={filters[1]} />}>
            <Meta className="filtMeta"
              title={<span className="filtTitle">Explore Rented Apartments</span>}
              description={<span className="filtDesc">Find an affordable apartment to rent to suit your needs</span>}
            />
          </Card>
        </Link>
      </div>

      {/* Card for for-sale properties */}
      <div className="filt">
        <Card hoverable cover={<img style={{ borderRadius: "16px 16px 0px 0px" }} alt="example" src={filters[2]} />}>
          <Meta className="filtMeta"
            title={<span className="filtTitle">Explore For-Sale properties</span>}
            description={<span className="filtDesc">Find properties on-sale</span>}
          />
        </Card>
      </div>

    </div>

  );
};
export default Filters;