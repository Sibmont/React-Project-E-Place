import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbDetail = () => {
  const location = useLocation();

  let prevPath = location.state.prevPath
  let itemName = location.state.name.name
  let pathName = location.state.prevPath.split('/')



  return (
    // <Breadcrumb>
    //     {prevPath !== "/" ? <Breadcrumb.Item><Link to={"/"} className="route-link">Home</Link></Breadcrumb.Item> : null}
    //   <Breadcrumb.Item>
    //     <Link to={prevPath} className="route-link">{pathName[1] === "" ? "Home" : pathName[2]}</Link>
    //   </Breadcrumb.Item> 
    //   <Breadcrumb.Item active>{itemName}</Breadcrumb.Item>
    // </Breadcrumb>
    <div>
      <ol className="bread-crumbs">
        {prevPath !== "/" ? <li className="bread-crumb"><Link to={"/"} className="route-link">Home</Link><svg className="crumb-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></li> : null}
        <li className="bread-crumb">
        <Link to={prevPath} className="route-link">{pathName[1] === "" ? "Home" : pathName[2]}</Link>
        <svg className="crumb-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg>
        </li>
        <li className="bread-crumb">
          <span>{itemName}</span>
        </li>
      </ol>
    </div>
  )
}

export default BreadcrumbDetail