import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import MiniSidebar from '../Pages/MiniSidebar/MiniSidebar';
import Category from '../Pages/Category/Category';
import RightSideContent from '../Pages/RightSideContent/RightSideContent';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-flow-row-dense grid-cols-12  grid-rows-1 ">
                <div className="col-span-1 ">
                    <MiniSidebar></MiniSidebar>
                </div>
                <div className="col-span-9 bg-[#EEF0F2]">
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">

                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                            <Category></Category>

                        </div>
                    </div>

                </div>
                <div className="col-span-2 hidden lg:block md:block bg-[#EEF0F2]">
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Main;

/**
 * lg:col-span-2 sm:col-span-12
 * 
  <Header></Header> 
 <Container>
 <Row>
     <Col lg='2' classNameName='d-none d-lg-block'>
        <LeftSideNav></LeftSideNav>
     </Col>
     <Col lg='7'>
       <Outlet></Outlet> 
     </Col>
     <Col lg='3'>
        <RightSideNav></RightSideNav> 
     </Col>
 </Row>
</Container>

             <section className='' >
                <div className="grid grid-flow-row-dense grid-cols-12  grid-rows-1 ">
                    <div className="col-span-1">
                        <MiniSidebar></MiniSidebar>
                    </div>
                    <div className="col-span-9 bg-[#EEF0F2]">
                        <div className="drawer lg:drawer-open">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex flex-col items-center justify-center">

                                <Outlet></Outlet>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                                <Category></Category>

                            </div>
                        </div>

                    </div>
                    <div className="col-span-2 hidden lg:block  bg-[#EEF0F2]">
                        <RightSideContent></RightSideContent>
                    </div>
                </div>
            </section>


 */