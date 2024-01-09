import React from 'react'
import About from './Component/About';
import Footer from './Component/Footer';
import GenerativeAl from './Component/MainPage/GenerativeAl';
import Navbar from './Component/Navbar/Navbar';
import CardSlider from './Component/WebApplicationDevelopment/CardSlider';
import OnDemandAppSlider from './Component/WebApplicationDevelopment/OnDemandAppSlider';
import WebApplication from './Component/WebApplicationDevelopment/WebApplication';
import WebApplicationMainPage from './Component/WebApplicationDevelopment/WebApplicationMainPage';
import ERPSoftware from './Component/WebApplicationDevelopment/SoftwarePages/ERPSoftware';
import TimeandSlider from './DisplayProduct/TimeandSlider';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountingBillingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/Accounting&BillingSoftware';
import SAASSoftware from './Component/WebApplicationDevelopment/SoftwarePages/SAASSoftware';
import WarehouseManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/WarehouseManagmentSoftware';
import HRMSSoftware from './Component/WebApplicationDevelopment/SoftwarePages/HRMSSoftware';
import InventoryManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/InventoryManagmentSoftware';
import POSSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/POSSystemSoftware';
import EmployeeTrackingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/EmployeeTrackingSoftware';
import AttendanceSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/AttendanceSystemSoftware';
import LibraryManagmentSystem from './Component/WebApplicationDevelopment/SoftwarePages/LibraryManagmentSystem';
import LMSWithLiveClassSoftware from './Component/WebApplicationDevelopment/SoftwarePages/LMSWithLiveClassSoftware';
import UniversityManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/UniversityManagmentSoftware';
import QuizSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/QuizSystemSoftware';
import AstrologySoftware from './Component/WebApplicationDevelopment/SoftwarePages/AstrologySoftware';
import TravelBookingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/TravelBookingSoftware';
import MatrimonialSoftware from './Component/WebApplicationDevelopment/SoftwarePages/MatrimonialSoftware';
import RestaurantManagmentSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/RestaurantManagmentSystemSoftware';
import HotelManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/HotelManagmentSoftware';
import EventmanagementSoftware from './Component/WebApplicationDevelopment/SoftwarePages/EventmanagementSoftware';
import HospitalManagmentSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/HospitalManagmentSystemSoftware';
import RealstateSoftware from './Component/WebApplicationDevelopment/SoftwarePages/RealstateSoftware';
import ClinicManagmentSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/ClinicManagmentSystemSoftware';
import MLMSoftware from './Component/WebApplicationDevelopment/SoftwarePages/MLMSoftware';
import TradingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/TradingSoftware';
import JobPortalSoftware from './Component/WebApplicationDevelopment/SoftwarePages/JobPortalSoftware';
import CabBookingApps from './Component/WebApplicationDevelopment/ApplicationPages/CabBookingApps';
import GroceryApps from './Component/WebApplicationDevelopment/ApplicationPages/GroceryApps';
import TravellingApps from './Component/WebApplicationDevelopment/ApplicationPages/TravellingApps';
import ChattingApps from './Component/WebApplicationDevelopment/ApplicationPages/ChattingApps';
import FitnessApps from './Component/WebApplicationDevelopment/ApplicationPages/FitnessApps';
import RentalApps from './Component/WebApplicationDevelopment/ApplicationPages/RentalApps';
import DatingApps from './Component/WebApplicationDevelopment/ApplicationPages/DatingApps';
import AstrologyApps from './Component/WebApplicationDevelopment/ApplicationPages/AstrologyApps';
import FooddeliveryApps from './Component/WebApplicationDevelopment/ApplicationPages/FooddeliveryApps';
import SocialMediaApps from './Component/WebApplicationDevelopment/ApplicationPages/SocialMediaApps';
import LearningManagmentApps from './Component/WebApplicationDevelopment/ApplicationPages/LearningManagmentApps';
import EcommerceApps from './Component/WebApplicationDevelopment/ApplicationPages/EcommerceApps';
import MultivendorHomeServiceApps from './Component/WebApplicationDevelopment/ApplicationPages/MultivendorHomeServiceApps';
import MetaverseDevelopment from './Component/MetaversDevelopment/MetaverseDevelopment';
import MetaverseGameDevelopment from './Component/MetaversDevelopment/MetaverseGameDevelopment';
import MetaverseAvatarDevelopment from './Component/MetaversDevelopment/MetaverseAvatarDevelopment';
import MetaverseLaunchpadDevelopment from './Component/MetaversDevelopment/MetaverseLaunchpadDevelopment';
import MetaverseNFTMarketplaceDevelopment from './Component/MetaversDevelopment/Metaverse NFTMarketplaceDevelopment';
import MetaverseVirtualShowroomDevelopment from './Component/MetaversDevelopment/MetaverseVirtualShowroomDevelopment';
import MetaverseEventPlatformDevelopment from './Component/MetaversDevelopment/MetaverseEventPlatformDevelopment/MetaverseEventPlatformDevelopment';
import MetaverseSocialMediaPlatformDevelopment from './Component/MetaversDevelopment/MetaverseSocialMediaPlatformDevelopment';
import MetaverseRealEstateDevelopment from './Component/MetaversDevelopment/MetaverseRealEstateDevelopment';
import MetaverseVirtualLandDevelopment from './Component/MetaversDevelopment/MetaverseVirtualLandDevelopment';
import ContectUsForm from './Component/Insights/ContectUsForm/ContectUsForm';
import InsightsFAQ from './Component/Insights/InsightsFAQ/InsightsFAQ';
import PrivacyPolicy from './privacyPolicy/privacyPolicy';
import TermAndCondition from './TermAndCondition/TermAndCondition';
import CaseStudy from './Case Study/CaseStudy';
import Aboutus from './Component/Insights/company/About/Aboutus';
import Celebrations from './Component/Insights/company/Celebrations/Celebrations';
import Announcement from './Component/Insights/company/Announcement/Announcement';
import Product from './Component/Insights/company/Announcement/Product';
import News from './Component/Insights/company/Announcement/News';
import Blog from './Component/blogs/Blog';
import MainNews from './Component/Insights/company/News/MainNews';

const AllRouteFiles = () => {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    {/* <Main/> */}
                    {/* <WebApplicationMainPage/>
      <About />
      <Footer /> */}
                    {/* <TimeandSlider/> */}
                    {/* <CardSlider/> */}
                    {/* <OnDemandAppSlider/> */}
                    <Routes>

                    <Route path='/' element={ <Main/>}/>
       <Route path='/Aboutus' element={<Aboutus/>}/>
       <Route path='/Celebrations' element={<Celebrations/>}/>
       <Route path='/Announcement' element={<Announcement/>}/>
       <Route path="/Product/:productId" element={<Product />} />
       <Route path="/Productnews/:productnewsId" element={<Product />} />
       <Route path='/Product' element={<Product />}/>
       <Route path='/News' element={<MainNews />}/>
       <Route path='/Blog' element={<Blog />}/>

                        {/* Software pages */}
                        
                        <Route path=' AccountingBillingSoftware' element={<AccountingBillingSoftware />} />
                        <Route path='ERPSoftware' element={<ERPSoftware />} />
                        <Route path='SAASSoftware' element={<SAASSoftware />} />
                        <Route path='WarehouseManagmentSoftware' element={<WarehouseManagmentSoftware />} />
                        <Route path='HRMSSoftware' element={<HRMSSoftware />} />
                        <Route path='InventoryManagmentSoftware' element={<InventoryManagmentSoftware />} />
                        <Route path='POSSystemSoftware' element={<POSSystemSoftware />} />
                        <Route path='EmployeeTrackingSoftware' element={<EmployeeTrackingSoftware />} />
                        <Route path='AttendanceSystemSoftware' element={<AttendanceSystemSoftware />} />
                        <Route path='LibraryManagmentSystem' element={<LibraryManagmentSystem />} />
                        <Route path='LMSWithLiveClassSoftware' element={<LMSWithLiveClassSoftware />} />
                        <Route path='UniversityManagmentSoftware' element={<UniversityManagmentSoftware />} />
                        <Route path='QuizSystemSoftware' element={<QuizSystemSoftware />} />

                        {/* Software pages-1 */}

                        <Route path='AstrologySoftware' element={<AstrologySoftware />} />
                        <Route path='TravelBookingSoftware' element={<TravelBookingSoftware />} />
                        <Route path='MatrimonialSoftware' element={<MatrimonialSoftware />} />
                        <Route path='RestaurantManagmentSystemSoftware' element={<RestaurantManagmentSystemSoftware />} />
                        <Route path='HotelManagmentSoftware' element={<HotelManagmentSoftware />} />
                        <Route path='EventmanagementSoftware' element={<EventmanagementSoftware />} />
                        <Route path='HospitalManagmentSystemSoftware' element={<HospitalManagmentSystemSoftware />} />
                        <Route path='RealstateSoftware' element={<RealstateSoftware />} />
                        <Route path='ClinicManagmentSystemSoftware' element={<ClinicManagmentSystemSoftware />} />
                        <Route path='MLMSoftware' element={<MLMSoftware />} />
                        <Route path='TradingSoftware' element={<TradingSoftware />} />
                        <Route path='JobPortalSoftware' element={<JobPortalSoftware />} />

                        {/* Application Pages  */}

                        <Route path='CabBookingApps' element={<CabBookingApps />} />
                        <Route path='GroceryApps' element={<GroceryApps />} />
                        <Route path='TravellingApps' element={<TravellingApps />} />
                        <Route path='ChattingApps' element={<ChattingApps />} />
                        <Route path='FitnessApps' element={<FitnessApps />} />
                        <Route path='RentalApps' element={<RentalApps />} />
                        <Route path='DatingApps' element={<DatingApps />} />
                        <Route path='AstrologyApps' element={<AstrologyApps />} />
                        <Route path='FooddeliveryApps' element={<FooddeliveryApps />} />
                        <Route path='SocialMediaApps' element={<SocialMediaApps />} />
                        <Route path='LearningManagmentApps' element={<LearningManagmentApps />} />
                        <Route path='EcommerceApps' element={<EcommerceApps />} />
                        <Route path='MultivendorHomeServiceApps' element={<MultivendorHomeServiceApps />} />


                        {/* Metaverse Pages */}

                        <Route path='MetaverseDevelopment' element={<MetaverseDevelopment />} />
                        <Route path='MetaverseGameDevelopment' element={<MetaverseGameDevelopment />} />
                        <Route path='MetaverseNFTMarketplaceDevelopment' element={<MetaverseNFTMarketplaceDevelopment />} />
                        <Route path='MetaverseVirtualShowroomDevelopment' element={<MetaverseVirtualShowroomDevelopment />} />
                        <Route path='MetaverseEventPlatformDevelopment' element={<MetaverseEventPlatformDevelopment />} />
                        <Route path='MetaverseAvatarDevelopment' element={<MetaverseAvatarDevelopment />} />
                        <Route path='MetaverseSocialMediaPlatformDevelopment' element={<MetaverseSocialMediaPlatformDevelopment />} />
                        <Route path='MetaverseRealEstateDevelopment' element={<MetaverseRealEstateDevelopment />} />
                        <Route path='MetaverseVirtualLandDevelopment' element={<MetaverseVirtualLandDevelopment />} />
                        <Route path='MetaverseLaunchpadDevelopment' element={<MetaverseLaunchpadDevelopment />} />

                        {/*  Insights  */}

                        <Route path='ContectUsForm' element={<ContectUsForm />} />
                        <Route path='InsightsFAQ' element={<InsightsFAQ />} />

                        {/* privacyPolicy */}
                        <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
                        <Route path='TermAndCondition' element={<TermAndCondition />} />

                        {/* CaseStudy */}

                        <Route path='CaseStudy' element={<CaseStudy />} />
                        


                    </Routes>


                    {/* <About />*/}


                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        </>
    )
}

export default AllRouteFiles
