import React from "react";
import "./WbsiteDevelopment.css";
const WbsiteDevelopment = () => {
  return (
    <>
      <main className="blog_new_main">
        <section className="blog_new_banner">
          <div className="container-fluid p-0">
            <div className="VideoWrper">
              <div className="video_sec">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/banner-bg-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="container">
                <div className="content_sec">
                  <div className="title_sec">
                    <h1 className="title">
                      Website Design & Development Company
                    </h1>
                  </div>
                  <p className="contents">
                    We build a distinct agile approach in web development &
                    design services to meet all the business needs and stay out
                    from competitors.
                  </p>
                  <div
                    className="web-development-button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <div className="webdesi_bannerbtn ">
                      <a className="expert-btn">Get A Free Quote</a>
                    </div>
                    <div className="webdesi_bannerbtn ">
                      <a className="expert-btn">Get A Live Demo</a>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-5 col-10">
                      <div className="search_sec">
                        {/* <form action="{{url('news')}}" method="get"> */}
                        <div className="sear_fd1">
                          {/* <div className="input-group">
                                                          <input type="text" name="search" className="form-control" placeholder="SEARCH" id="getsearchtext" />
                                                          <span className="input-group-addon"><button className="btn search_btn" onclick="load_search()"><i className="fa fa-search" /></button></span>
                                                      </div> */}
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mid_section sol-website grey-bg"
          id="premium_webservice"
        >
          <div className="container">
            <div className="cm_head2 section-heading text-center">
              <h2 className="hire_modal_hd">
                Our Premium Web Development Services
              </h2>
            </div>
            {/* <div className="row mt-4">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="PHP Development "
                        title="PHP Development "
                        className="premium_webservice_sprite"
                        style={{ objectPosition: "-26px -12px" }}
                      />
                    </div>
                    <h2 className="title">PHP Development</h2>
                    <p className="desc">
                      We render high-grade PHP development services to our clients
                      with our strong experience upon integrating PHP applications
                      with different other web technologies like Python/Django,
                      ColdFusion, ASP.Net, etc.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/php-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Python Development "
                        title="Python Development "
                        className="premium_webservice_sprite"
                        style={{ objectPosition: "-143px -12px" }}
                      />
                    </div>
                    <h2 className="title">Python Development</h2>
                    <p className="desc">
                      Osiz holds rich experience in developing customized web and
                      desktop applications in python. We work under excellent
                      python frameworks like Tornado, Pyramid, Django, flask,
                      Web2YP, Zope to build your web application.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/python-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Golang Development "
                        title="Golang Development "
                        className="premium_webservice_sprite"
                        style={{ objectPosition: "-253px -12px" }}
                      />
                    </div>
                    <h2 className="title">Golang Development</h2>
                    <p className="desc">
                      Our Golang development company builds an efficient web
                      application to meet the business requirements of clients. We
                      have Golang developers who are devoted to delivering a
                      customized web application with cutting-edge technology.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/golang-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div> */}
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>

                  <h2 className="title">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section
          id="webdesign_frameworks"
          className="mid_section sol-website  "
        >
          <div className="container">
            <div className="cm_head2 section-heading text-center">
              <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                Web development Frameworks we Expertise
              </h2>
            </div>
            <div className="row ">
              <div className="col-lg-4 col-12">
               
                  <div className="platform_box">
                    <div className="webdframeworks_icons ">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Laravel Framework Development "
                        title="Laravel Framework Development "
                        className="webdesign_frameworks_sprite"
                        style={{ objectPosition: "-766px -25px" }}
                      />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents" style={{textDecorationLine:"none"}}>
                      Our Metaverse NFT Game development services come with
                      various metaverse 3D virtual environments, live game
                      streaming, crypto value exchange, P2E(Play to Earn) gaming
                      with NFTs minting, and some more for the users to relish
                      on it.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/laravel-framework-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
            
              </div>
              <div className="col-lg-4 col-12">
               
                  <div className="platform_box">
                    <div className="webdframeworks_icons ">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Laravel Framework Development "
                        title="Laravel Framework Development "
                        className="webdesign_frameworks_sprite"
                        style={{ objectPosition: "-766px -25px" }}
                      />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">
                      Our Metaverse NFT Game development services come with
                      various metaverse 3D virtual environments, live game
                      streaming, crypto value exchange, P2E(Play to Earn) gaming
                      with NFTs minting, and some more for the users to relish
                      on it.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/laravel-framework-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
               
              </div>
              <div className="col-lg-4 col-12">
               
                  <div className="platform_box">
                    <div className="webdframeworks_icons ">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Laravel Framework Development "
                        title="Laravel Framework Development "
                        className="webdesign_frameworks_sprite"
                        style={{ objectPosition: "-766px -25px" }}
                      />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">
                      Our Metaverse NFT Game development services come with
                      various metaverse 3D virtual environments, live game
                      streaming, crypto value exchange, P2E(Play to Earn) gaming
                      with NFTs minting, and some more for the users to relish
                      on it.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/laravel-framework-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
             
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 col-12">
              
                  <div className="platform_box">
                    <div className="webdframeworks_icons ">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Laravel Framework Development "
                        title="Laravel Framework Development "
                        className="webdesign_frameworks_sprite"
                        style={{ objectPosition: "-766px -25px" }}
                      />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">
                      Our Metaverse NFT Game development services come with
                      various metaverse 3D virtual environments, live game
                      streaming, crypto value exchange, P2E(Play to Earn) gaming
                      with NFTs minting, and some more for the users to relish
                      on it.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/laravel-framework-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
            
              </div>
              <div className="col-lg-4 col-12">
                
                  <div className="platform_box">
                    <div className="webdframeworks_icons ">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Laravel Framework Development "
                        title="Laravel Framework Development "
                        className="webdesign_frameworks_sprite"
                        style={{ objectPosition: "-766px -25px" }}
                      />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">
                      Our Metaverse NFT Game development services come with
                      various metaverse 3D virtual environments, live game
                      streaming, crypto value exchange, P2E(Play to Earn) gaming
                      with NFTs minting, and some more for the users to relish
                      on it.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/laravel-framework-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
               
              </div>
              <div className="col-lg-4 col-12">
              
                  <div className="platform_box">
                    <div className="webdframeworks_icons ">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Laravel Framework Development "
                        title="Laravel Framework Development "
                        className="webdesign_frameworks_sprite"
                        style={{ objectPosition: "-766px -25px" }}
                      />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">
                      Our Metaverse NFT Game development services come with
                      various metaverse 3D virtual environments, live game
                      streaming, crypto value exchange, P2E(Play to Earn) gaming
                      with NFTs minting, and some more for the users to relish
                      on it.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/laravel-framework-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
               
              </div>
            </div>
          </div>
        </section>
        <section
          className="mid_section sol-website "
          id="webdesign_jsframeworks"
        >
          {/* <div className="container">
              <div className="cm_head2 section-heading text-center">
                <h2 className="hire_modal_hd">
                  Our Web Application Development Services (JS framework )
                </h2>
              </div>
              <div className="row mt-5">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Angular JS Development "
                          title="Angular JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1303px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Angular JS Development</h2>
                      <p className="desc">
                        We are specialized in furnishing a wide array of AngularJS
                        development services to clients with quality standards.
                        With our Angular JS development services, you can
                        accomplish your business objectives and save huge costs.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/angular-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="React JS Development "
                          title="React JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1367px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">React JS Development</h2>
                      <p className="desc">
                        We are a prominent React JS development company in India
                        offering quick, fair, and transparent web development
                        services to our clients. We assist start-ups, businesses,
                        and large-scale enterprises with React JS development.
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/react-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Node JS Development "
                          title="Node JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1436px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Node JS Development</h2>
                      <p className="desc">
                        We develop fast, secure, flexible, and scalable real-time
                        web and mobile applications to stand ahead in the business
                        market. We offer Node JS Development services at an
                        affordable cost.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/node-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Vue JS Development "
                          title="Vue JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1498px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Vue JS Development</h2>
                      <p className="desc">
                        Leverage our simple approachable Vue JS framework services
                        to build a successful web application for your business.
                        Osiz offers Vue JS development services and solutions for
                        clients of various Industrial Segments.
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/vue-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Electron JS Development "
                          title="Electron JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1577px -25px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Electron JS Development</h2>
                      <p className="desc">
                        We provide a native, cross-platform modern desktop
                        application with an unparalleled strategical approach with
                        top-quality Electron application services. We have domain
                        experts to accelerate your business in the market.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/electron-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Meteor JS Development "
                          title="Meteor JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1644px -26px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Meteor JS Development </h2>
                      <p className="desc">
                        Get our imaginative, effective and scalable Meteor JS
                        framework to run your website applications seamlessly.
                        Moreover, Osiz offers reliable Meteor.JS development
                        services using the Meteor.JS framework.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/meteor-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
        </section>
        <section className="mid_section" id="webdesign_industry">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-heading text-center">
                <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                  Industries we serve
                </h2>
                <p>
                  We've helped customers in various sectors with highly scalable
                  &amp; secure Web App development solutions.{" "}
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Education "
                    title="Education "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-1742px -30px" }}
                  />
                  <p>Education</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Telecom "
                    title="Telecom "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-1814px -30px" }}
                  />
                  <p>Telecom</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt=" Food"
                    title="Food "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-1901px -30px" }}
                  />
                  <p>Food</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Transport "
                    title="Transport "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2007px -30px" }}
                  />
                  <p>Transport</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Health "
                    title="Health "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2086px -30px" }}
                  />
                  <p>Health</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Retail "
                    title="Retail "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2167px -30px" }}
                  />
                  <p>Retail </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Fintech "
                    title="Fintech "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2258px -31px" }}
                  />
                  <p>Fintech </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Ecommerce "
                    title="Ecommerce "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2343px -31px" }}
                  />
                  <p>Ecommerce</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Media "
                    title="Media "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2431px -31px" }}
                  />
                  <p>Media</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="RealEstate "
                    title="RealEstate "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-4133px -30px" }}
                  />
                  <p>RealEstate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="webportel_dev" className="mid_section sol-website">
            <div className="container">
              <div className="cm_head2 section-heading text-center">
                <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                  Web Portal Development Services
                </h2>
              </div>
              <div className="row ">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon ">
                      <div className="webporteldev_icons">
                        {" "}
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Taxi Booking Portal Development "
                          title="Taxi Booking Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2523px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Taxi Booking Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Taxi booking portal allows users to book a cab with just a
                      click. Hire Our Well-Experienced Taxi Booking Portal
                      Developers to develop a taxi booking portal for your
                      business.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/taxi-booking-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Hotel Booking Portal Development "
                          title="Hotel Booking Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2637px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Hotel Booking Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Hire our dedicated Hotel Booking portal developers to own a
                      hotel booking portal for your hotel or business. The portals
                      developed are of the highest security features to safeguard
                      users' data.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/hotel-booking-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt=" News Portal Development"
                          title="News Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2731px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">News Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Osiz provides appealing news portal development services to
                      our clients, which allows publishing articles, blogs, and
                      other stuff related to the news. It helps your business
                      attract a huge audience and unimaginable revenue.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/news-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Property Portal Development "
                          title="Property Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2827px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Property Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Our primary property portal app development services to the
                      users include a real estate website for advertising
                      property, managing online portal solutions to build your own
                      property and the front cover featured property display.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/property-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Crowd Funding Development "
                          title="Crowd Funding Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2922px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Crowd Funding Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Raise your funds for your excellent new business idea
                      utilizing our crowdfunding Software that is specially
                      designed with specific protection software to make your web
                      pages secure.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/classified-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="lassified Portal Development "
                          title=" lassified Portal Development"
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-3014px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Classified Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      We build classified web portals with advanced catalog
                      management allowing users to post their adverts on the
                      favorite list. We use mastering strategies such as measuring
                      site goals.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/crowdfunding-software-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        {/* <section className="mid_section" id="webdev_process">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-heading text-center">
                  <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                    Web Development Process
                  </h2>
                  <p>
                    Here’s a glimpse of our swift working model that results in
                    quality output.{" "}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 section-heading text-center">
                  <img
                    src="https://www.osiztechnologies.com//asset/images/inner-pages/custom_web_design_development/web-development-process.png?v1"
                    alt="Web Development Process"
                    title="Web Development Process"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section> */}

        {/* <section className="mid_section   ">
            <div className="container">
              <div className="row  ">
                <div className="section-heading text-center">
                  <h2 style={{ textAlign: "center" }}>
                    Delivering The Right Web Designing Services?
                  </h2>
                  <div className="why_round"> </div>
                </div>
              </div>
            </div>
            <div className="container-fluid ">
              <div className="row mt-5">
                <div className="col-md-6 webdevelopment_new_custom_color-1">
                  <div className="webdevelopment_new_custom_box webdevelopment_new_custom_dark">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-29px 0px" }}
                    />
                    <div className="webdevelopment_new_title">Responsive</div>
                    <p>
                      <b>Multi-platform supported website design&nbsp;</b>
                    </p>
                    <p>
                      Our top-notch website designing company is fully responsive
                      through incorporating a brilliant UI that adapts to various
                      screen resolution and render an astonishing user experience
                      irrespective of the device and browsing environment.
                    </p>
                    <p>
                      Our skilled designers visualize your thoughts into reality
                      with their innovative design strategy and efficient
                      technologies. We made responsive website design for the
                      wonders like Fluid Grid Layout, Flexible Images, Offline
                      Browsing, Enhance Performance to happen.&nbsp;
                    </p>
                  </div>
                </div>
                <div className="col-md-6  webdevelopment_new_custom_color-2">
                  <div className="webdevelopment_new_custom_box webdevelopment_new_custom_light">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-216px -4px" }}
                    />
                    <div className="webdevelopment_new_title">
                      Better User Experience
                    </div>
                    <p>
                      <b>
                        Fine-looking websites provide an outstanding user
                        experience
                      </b>
                    </p>
                    <p>
                      Our experts have a keen on eye on designing websites to
                      provide an outstanding user experience. Our interactive UI
                      design procures a lesser bounce rate, wow-factor compelling
                      your visitors to convertors, stand out from competitors. Our
                      innovative team analyzes your business objectives &amp;
                      target niche to initiate a designing process that improves
                      your business-standard.&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="row webdevelopment_new_custom_light">
                <div className="col-md-6 webdevelopment_new_custom_color-3">
                  <div className="webdevelopment_new_custom_box  ">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-381px -9px" }}
                    />
                    <div className="webdevelopment_new_title">Effective</div>
                    <p>
                      <b>Get huge revenue with your website</b>
                    </p>
                    <p>
                      We bring out new potential customers for your business with
                      our effective marketing efforts. We prefer an advanced tool
                      for designing your website which captivates a huge audience
                      for your business. Our design team not only focus on just
                      looking great but can convert visitors into customers.&nbsp;
                    </p>
                  </div>
                </div>
                <div className="col-md-6  webdevelopment_new_custom_color-4">
                  <div className="webdevelopment_new_custom_box ">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-537px -9px" }}
                    />
                    <div className="webdevelopment_new_title">Customized</div>
                    <p>
                      <b>
                        Connect your websites and accomplish better&nbsp;&nbsp;
                      </b>
                    </p>
                    <p>
                      Marketing goes well with the solid digital strategy that is
                      customized to your particular business necessitate. Our
                      experts spend a huge time understanding your industry to
                      build a customized website design for your particular
                      business requirements. Adopting intelligent UI design is our
                      primary concern which is userfriendly and provides a better
                      experience for your end-users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        <section id="custweb_servs" className="mid_section sol-website grey-bg">
          <div className="container">
            <div className="cm_head2 section-heading text-center">
              <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                What Set us ahead in Custom Web Development
              </h2>
              <p style={{ textAlign: "center" }}>
                Your customers’ demands change from time to time based on the
                latest trends. If you could meet their wavering requirements
                with custom ideas, the potential of attracting a quality client
                base is huge. Utilize our customer web development services and
                stand apart from the market trends by incorporating your
                innovation.{" "}
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Requirement Analysis "
                          title="Requirement Analysis "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3560px -24px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Requirement Analysis</h2>
                  </div>
                  <p className="desc">
                    Brainstorm with us, gather the industry’s best ideas and
                    convert them to reality with our solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Impressive Web - Designs "
                          title="Impressive Web - Designs "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3631px -24px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Impressive Web - Designs</h2>
                  </div>
                  <p className="desc">
                    Develop your websites with all the latest designs and
                    convert a large portion of traffic into leads.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Responsive Web app "
                          title=" Responsive Web app"
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3703px -24px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Responsive Web app</h2>
                  </div>
                  <p className="desc">
                    Get your website designed in such a way that it is
                    responsive in all website applications.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt=" Efficiency in Performance & Speed"
                          title="Efficiency in Performance & Speed "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3778px -27px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">
                      Efficiency in Performance &amp; Speed
                    </h2>
                  </div>
                  <p className="desc">
                    Reduce your website bounce rate by improving performance
                    efficiency and speed.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Highly Secured & Scalable "
                          title="Highly Secured & Scalable "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3860px -27px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Highly Secured &amp; Scalable</h2>
                  </div>
                  <p className="desc">
                    Build your secure and scalable website that complies with
                    all the latest security regulations.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="SEO Friendly "
                          title="SEO Friendly "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3952px -27px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">SEO Friendly</h2>
                  </div>
                  <p className="desc">
                    Let your website rank higher on all the search engines with
                    inbuilt SEO features.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
            className="tabs_solutions desktop"
            style={{ padding: "20px 0 0" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-heading text-center">
                  <h2 style={{ textAlign: "center" }}>Technology Stack</h2>
                  <p className="text-center mt-4">
                    We establish a dynamic experience and a wide range of custom
                    web development solutions. Our web developers are mixing
                    various web components to bring out unique ideas, full-range
                    web development scenarios, and business models. Our highly
                    skilled and experienced web developers are capable of
                    implementing the latest techniques with the use of modern
                    technologies, adhering high-grade coding guidelines and to
                    maintain quality standards. With splendid user experiences and
                    tailored-made framework, we meet all your particular industry
                    need. Our armor procures following frameworks, technologies,
                    and tools&nbsp;
                  </p>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="tabbable-panel">
                    <div className="tabbable-line">
                      <ul className="nav nav-tabs text-center">
                        <li className=" active hire-dd-icon wds wds-ico-5">
                          <a href="#tab_default_1" data-toggle="tab">
                            <span className="text-muted list-title">PHP</span>{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-4">
                          <a href="#tab_default_7" data-toggle="tab">
                            <span className="text-muted list-title">
                              JS FRAMEWORKS
                            </span>{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-7">
                          <a href="#tab_default_3" data-toggle="tab">
                            <span className="text-muted list-title">
                              MEAN STACK
                            </span>{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-10">
                          <a href="#tab_default_6" data-toggle="tab">
                            <span className="text-muted list-title">
                              FULL STACK
                            </span>
                            &nbsp;{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-8">
                          <a href="#tab_default_4" data-toggle="tab">
                            <span className="text-muted list-title">PYTHON </span>
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-9">
                          <a href="#tab_default_5" data-toggle="tab">
                            <span className="text-muted list-title">JAVA </span>
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-6">
                          <a href="#tab_default_2" data-toggle="tab">
                            <span className="text-muted list-title">ASP.NET</span>{" "}
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="tab_default_1" className="tab-pane active">
                          <div id="tab_default_1" className="tab-pane active">
                            <p className="text-muted pb-2 text-center">
                              Our{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/php-development"
                              >
                                PHP developers
                              </a>{" "}
                              have well-versed knowledge on several domains to
                              built functional web applications. Our latest PHP
                              frameworks are
                            </p>
                            <div className="hire-dd-technology">
                              <a href="https://www.osiztechnologies.com/cakephp-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-11">
                                    Cake php
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/yii-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-12">
                                    Yii
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/zend-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-13">
                                    Zend
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/codeigniter-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-14">
                                    Codeignitor
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/laravel-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-16">
                                    Laravel
                                  </p>
                                </div>
                              </a>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-15">
                                  Symfony
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_7" className="tab-pane">
                          <div id="tab_default_7" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              Our team provides a leading JS Framework because of
                              our domain experts who have an exclusive knowledge
                              and experience under this framework
                            </p>
                            <div className="hire-dd-technology">
                              <a href="https://www.osiztechnologies.com/svelte-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-48">
                                    Svelte Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/angular-8-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-49">
                                    Angular 8 Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/react-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-50">
                                    {" "}
                                    React Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/vue-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-51">
                                    {" "}
                                    Vue Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/electron-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-52">
                                    {" "}
                                    Electron Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/nw-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-53">
                                    {" "}
                                    NW Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/app-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-54">
                                    {" "}
                                    App Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/meteor-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-55">
                                    {" "}
                                    Meteor Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/proton-native-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-56">
                                    {" "}
                                    Proton Native Js Development
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_3" className="tab-pane">
                          <div id="tab_default_3" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We have proficient and experienced{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/mean-stack-development"
                              >
                                MEAN stack developers
                              </a>{" "}
                              to provide excellent development services to our
                              clients.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-24">
                                  MongoDB
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-25">
                                  Express Js
                                </p>
                              </div>
                              <a href="https://www.osiztechnologies.com/node-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-26">
                                    {" "}
                                    Node Js
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/angular-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-27">
                                    {" "}
                                    Angular Js
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_6" className="tab-pane">
                          <div id="tab_default_6" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              Our{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/full-stack-development"
                              >
                                Full-stack developers
                              </a>{" "}
                              are efficient in providing end-to-end full-stack
                              development services with 10+ years of experience.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-41">
                                  UI
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-42">
                                  Front-end
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-43">
                                  Back-end
                                </p>
                              </div>
                              <a href="https://www.osiztechnologies.com/database-solutions">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-44">
                                    Databases
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/devops-solutions">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-45">
                                    DevOps
                                  </p>
                                </div>
                              </a>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-46">
                                  Containers
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-47">
                                  Test Automation
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_4" className="tab-pane">
                          <div id="tab_default_4" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We are the best{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/python-development"
                              >
                                Python Development
                              </a>{" "}
                              Company for rising technologies including AI, ML and
                              web apps.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-28">
                                  Django
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-29">
                                  Flask
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-30">
                                  Zope
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-31">
                                  Pyramid
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-32">
                                  Web2py
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-33">
                                  Tornado
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_5" className="tab-pane">
                          <div id="tab_default_5" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We deliver secure, scalable and robust{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/java-development"
                              >
                                Java
                              </a>{" "}
                              solutions for clients using the following expertise.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-34">
                                  Core java
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-35">
                                  J2ME
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-36">
                                  J2EE
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-37">
                                  JAVA Applet
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-39">
                                  Java Web Services
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-40">
                                  Java Product
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_2" className="tab-pane">
                          <div id="tab_default_2" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We have{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/dot-net-development"
                              >
                                Asp.net{" "}
                              </a>{" "}
                              domain experts and technical leads to ply exclusive
                              services to clients.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-17">
                                  Dot Net-Libraries
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-18">
                                  ASP.NET Framework
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-20">
                                  C#
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-21">
                                  Visual Studio
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-22">
                                  Web Services
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-23">
                                  CMS
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        <section className="MtaverseSec DapsMainBg TechStk">
          <div className="container container-1170">
            {/* <div class="OurSrvcHdd mb-lg-3">
                      <h6>Technology Stack</h6>
                  </div> */}
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className=" ">
                Unleashing
                <span className="Txt8282 px-2">Innovation With Our</span>Tech
                Stack
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-2 order-lg-2">
                <div
                  className="nav flex-column nav-pills VrtclTbb"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    data-toggle="pill"
                    data-target="#TechStkTbb1"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb1"
                    aria-selected="true"
                  >
                    Web
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb2"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb2"
                    aria-selected="false"
                  >
                    Mobile
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb3"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb3"
                    aria-selected="false"
                  >
                    Desktop Apps
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb4"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb4"
                    aria-selected="false"
                  >
                    Blockchain
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb5"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb5"
                    aria-selected="false"
                  >
                    Blockchain Tools
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb6"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb5"
                    aria-selected="false"
                  >
                    Game
                  </button>
                </div>
              </div>
              <div className="col-lg-10 order-lg-1">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="TechStkTbb1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon14.webp "
                                    alt="Nuxt Js"
                                    title="Nuxt Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Nuxt Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon13.webp "
                                    alt="Next Js"
                                    title="Next Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Next Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon3.webp "
                                    alt="Express Js"
                                    title="Express Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Express Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon2.webp "
                                    alt="Node Js"
                                    title="Node Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Node Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={800}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon8.webp "
                                    alt="Angular JS"
                                    title="Angular JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={400}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon4.webp "
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={500}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon5.webp "
                                    alt="JQuery"
                                    title="JQuery"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>JQuery</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={600}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon6.webp "
                                    alt="My Sql"
                                    title="My Sql"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>My Sql</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={700}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon7.webp "
                                    alt="PHP"
                                    title="PHP"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>PHP</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon1.webp "
                                    alt="Laravel"
                                    title="Laravel"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Laravel</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={900}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon9.webp "
                                    alt="Codeigniter"
                                    title="Codeigniter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Codeigniter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1200}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon12.webp "
                                    alt="Bootstrap"
                                    title="Bootstrap"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Bootstrap</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1000}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon10.webp "
                                    alt="HTML 5"
                                    title="HTML 5"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>HTML 5</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1100}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon11.webp "
                                    alt="CSS 3"
                                    title="CSS 3"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>CSS 3</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Web</h3>
                          <p>
                            Web tech stacks are the backbone of modern web3
                            development, consisting of a set of technologies,
                            tools, and frameworks. These stacks enable
                            developers to build robust, scalable, and dynamic
                            web applications that can run on a variety of
                            platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb2"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-10.webp "
                                    alt="Flutter"
                                    title="Flutter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Flutter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-4.webp "
                                    alt="Kotlin"
                                    title="Kotlin"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Kotlin</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-5.webp "
                                    alt="Swift"
                                    title="Swift"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Swift</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-1.webp "
                                    alt="Android Studio"
                                    title="Android Studio"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Android Studio</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-2.webp "
                                    alt="iOS"
                                    title="iOS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>iOS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-3.webp "
                                    alt="Android"
                                    title="Android"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Android</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-6.webp "
                                    alt="Java"
                                    title="Java"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Java</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-7.webp "
                                    alt="Jetpack"
                                    title="Jetpack"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Jetpack</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-8.webp "
                                    alt="Ionic"
                                    title="Ionic"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Ionic</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-9.webp "
                                    alt="ReactJS"
                                    title="ReactJS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>ReactJS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-11.webp "
                                    alt="Codeigniter"
                                    title="Codeigniter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Codeigniter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-12.webp "
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Mobile</h3>
                          <p>
                            Mobile tech stacks a combination of software and
                            programming languages used to develop mobile
                            applications. A typical mobile tech stack includes
                            both front-end and back-end development tools, as
                            well as libraries, frameworks, and APIs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb3"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-1.webp "
                                    alt="React JS"
                                    title="React JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>React JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-2.webp "
                                    alt="NW.JS"
                                    title="NW.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>NW.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-3.webp "
                                    alt="App.JS"
                                    title="App.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>App.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-4.webp "
                                    alt="Meteor"
                                    title="Meteor"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Meteor</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-5.webp "
                                    alt="Proton Native"
                                    title="Proton Native"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Proton Native</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-6.webp?v1 "
                                    alt="Sevelet"
                                    title="Sevelet"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Sevelet</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-7.webp "
                                    alt="Angular 8"
                                    title="Angular 8"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular 8</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-8.webp "
                                    alt="Node JS"
                                    title="Node JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Node JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-9.webp "
                                    alt="Vue.JS"
                                    title="Vue.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Vue.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-10.webp "
                                    alt="Electron.JS"
                                    title="Electron.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Electron.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-11.webp "
                                    alt="Angular JS"
                                    title="Angular JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular JS</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Desktop Apps</h3>
                          <p>
                            Desktop apps are a popular technology stack used to
                            create software applications that run on personal
                            computers. Desktop apps include a user interface
                            that allows users to interact with the software and
                            perform various tasks. Desktop apps are leveraged as
                            they provide high performance, security, and
                            flexibility, making them a preferred choice for many
                            businesses and individuals. With advancements in
                            technology, desktop apps continue to evolve and
                            provide innovative solutions for various industries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb4"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-5.webp "
                                    alt="Solidity"
                                    title="Solidity"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Solidity</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-4.webp "
                                    alt="HyperLedger"
                                    title="HyperLedger"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>HyperLedger</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-3.webp "
                                    alt="Golang"
                                    title="Golang"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Golang</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-2.webp "
                                    alt="SmartContract"
                                    title="SmartContract"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>SmartContract</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-1.webp "
                                    alt="IPFS"
                                    title="IPFS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>IPFS</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Blockchain</h3>
                          <p>
                            Blockchain technology stacks are composed of various
                            layers that work together to create a secure and
                            decentralized system. At the foundation is the
                            blockchain protocol, which handles maintaining the
                            integrity of the system. On top of this, various
                            consensus algorithms and smart contract languages
                            are used to enable transactions and execute code.
                            {/* Blockchain-based tech stacks help in providing a seamless experience for users interacting with the blockchain. */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb5"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-1.webp "
                                    alt="Metamask"
                                    title="Metamask"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Metamask</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-2.webp "
                                    alt="Ganache"
                                    title="Ganache"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Ganache</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-3.webp "
                                    alt="Truffle"
                                    title="Truffle"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Truffle</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-4.webp "
                                    alt="Remix"
                                    title="Remix"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Remix</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Blockchain Tools</h3>
                          <p>
                            Blockchain tools are implemented due to the
                            significance of providing secure and transparent
                            data management. The primary use of blockchain tools
                            is to provide a decentralized database that is
                            tamper-proof, immutable, and resistant to hacking.
                            {/* This technology can be utilized for various purposes such as supply chain management, identity verification, and smart contract execution.  */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb6"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-5.webp "
                                    alt="Unity"
                                    title="Unity"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Unity</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-6.webp "
                                    alt="Unreal Engine"
                                    title="Unreal Engine"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Unreal Engine</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-1.webp "
                                    alt="React"
                                    title="React"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>React</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-2.webp "
                                    alt="NodeJs"
                                    title="NodeJs"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>NodeJs</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-3.webp "
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-4.webp "
                                    alt="Public Blockchains"
                                    title="Public Blockchains"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Public Blockchains</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-7.webp "
                                    alt="Marmalade SDK"
                                    title="Marmalade SDK"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Marmalade SDK</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Game</h3>
                          <p>
                            The game tech stacks are used for the purpose of
                            creating a robust platform, for database management,
                            server-side scripting, frontend, and backend
                            development. The tech stack ensures seamless
                            performance, scalability, and stability, making it
                            an ideal choice for platform development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tabs_solutions hire-dd-slide-manu mobile">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-heading text-center">
                <h2>Technology Stack</h2>
                <p className="text-center mt-4">
                  We establish a dynamic experience and a wide range of custom
                  web development solutions. Our web developers are mixing
                  various web components to bring out unique ideas, full-range
                  web development scenarios, and business models. Our highly
                  skilled and experienced web developers are capable of
                  implementing the latest techniques with the use of modern
                  technologies, adhering high-grade coding guidelines and to
                  maintain quality standards. With splendid user experiences and
                  tailored-made framework, we meet all your particular industry
                  need. Our armor procures following frameworks, technologies,
                  and tools&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div id="exTab1" className="container custom_tabs_div">
            <ul className="nav nav-pills tab_nav_ul">
              <li className="active tab_nav_li">
                <a href="#1a" id="tab1" data-toggle="tab" />
              </li>
              <li className="tab_nav_li">
                <a href="#2a" id="tab2" data-toggle="tab" />
              </li>
              <li className="tab_nav_li">
                <a href="#3a" id="tab3" data-toggle="tab" />
              </li>
              <li className="tab_nav_li">
                <a href="#4a" id="tab4" data-toggle="tab" />
              </li>
              <li className="tab_nav_li">
                <a href="#5a" id="tab5" data-toggle="tab" />
              </li>
              <li className="tab_nav_li">
                <a href="#6a" id="tab6" data-toggle="tab" />
              </li>
            </ul>
            <div className="tab-content text-center clearfix">
              <div className="tab-pane active" id="1a">
                <h4 className="heading">PHP</h4>
                <p className>
                  Our{" "}
                  <a
                    className="tech-link"
                    href="https://www.osiztechnologies.com/php-development"
                  >
                    PHP developers
                  </a>{" "}
                  have well-versed knowledge on several domains to built
                  functional web applications. Our latest PHP frameworks are{" "}
                </p>
                <div className="carousel-wrap custom_carousel_wrap">
                  <div className="owl-carousel features_carousel_sec">
                    <a href="https://www.osiztechnologies.com/cakephp-framework-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-11">
                          Cake php
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/yii-framework-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-12">
                          Yii
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/zend-framework-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-13">
                          Zend
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/codeigniter-framework-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-14">
                          Codeignitor
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/laravel-framework-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-16">
                          Laravel
                        </p>
                      </div>
                    </a>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-15">
                        Symfony
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="2a">
                <h4 className="heading">MEAN STACK</h4>
                <p className>
                  We have proficient and experienced{" "}
                  <a
                    className="tech-link"
                    href="https://www.osiztechnologies.com/mean-stack-development"
                  >
                    MEAN stack developers
                  </a>{" "}
                  to provide excellent development services to our clients.
                </p>
                <div className="carousel-wrap custom_carousel_wrap">
                  <div className="owl-carousel features_carousel_sec">
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-24">
                        MongoDB
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-25">
                        Express Js
                      </p>
                    </div>
                    <a href="https://www.osiztechnologies.com/node-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-26">
                          {" "}
                          Node Js
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/angular-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-27">
                          {" "}
                          Angular Js
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="3a">
                <h4 className="heading">FULL STACK</h4>
                <p className>
                  Our{" "}
                  <a
                    className="tech-link"
                    href="https://www.osiztechnologies.com/full-stack-development"
                  >
                    Full-stack developers
                  </a>{" "}
                  are efficient in providing end-to-end full-stack development
                  services with 10+ years of experience.{" "}
                </p>
                <div className="carousel-wrap custom_carousel_wrap">
                  <div className="owl-carousel features_carousel_sec">
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-41">
                        UI
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-42">
                        Front-end
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-43">
                        Back-end
                      </p>
                    </div>
                    <a href="https://www.osiztechnologies.com/database-solutions">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-44">
                          Databases
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/devops-solutions">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-45">
                          DevOps
                        </p>
                      </div>
                    </a>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-46">
                        Containers
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-47">
                        Test Automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="4a">
                <h4 className="heading">JS FRAMEWORKS</h4>
                <p className>
                  Our team provides a leading JS Framework because of our domain
                  experts who have an exclusive knowledge and experience under
                  this framework
                </p>
                <div className="carousel-wrap custom_carousel_wrap">
                  <div className="owl-carousel features_carousel_sec">
                    <a href="https://www.osiztechnologies.com/svelte-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-48">
                          Svelte Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/angular-8-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-49">
                          Angular 8 Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/react-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-50">
                          {" "}
                          React Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/vue-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-51">
                          {" "}
                          Vue Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/electron-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-52">
                          {" "}
                          Electron Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/nw-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-53">
                          {" "}
                          NW Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/app-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-54">
                          {" "}
                          App Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/meteor-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-55">
                          {" "}
                          Meteor Js Development
                        </p>
                      </div>
                    </a>
                    <a href="https://www.osiztechnologies.com/proton-native-js-development">
                      <div className="item">
                        <p className="text-muted hire-dd-box-text wds wds-ico-56">
                          {" "}
                          Proton Native Js Development
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="5a">
                <h4 className="heading">PYTHON</h4>
                <p className>
                  We are the best{" "}
                  <a
                    className="tech-link"
                    href="https://www.osiztechnologies.com/python-development"
                  >
                    Python Development
                  </a>{" "}
                  Company for rising technologies including AI, ML and web apps.
                </p>
                <div className="carousel-wrap custom_carousel_wrap">
                  <div className="owl-carousel features_carousel_sec">
                    {/* <div class="hire-dd-technology"> */}
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-28">
                        Django
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-29">
                        Flask
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-30">
                        Zope
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-31">
                        Pyramid
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-32">
                        Web2py
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-33">
                        Tornado
                      </p>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="6a">
                <h4 className="heading">JAVA</h4>
                <p className>
                  We deliver secure, scalable and robust{" "}
                  <a
                    className="tech-link"
                    href="https://www.osiztechnologies.com/java-development"
                  >
                    Java
                  </a>{" "}
                  solutions for clients using the following expertise.
                </p>
                <div className="carousel-wrap custom_carousel_wrap">
                  <div className="owl-carousel features_carousel_sec">
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-34">
                        Core java
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-35">
                        J2ME
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-36">
                        J2EE
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-37">
                        JAVA Applet
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-39">
                        Java Web Services
                      </p>
                    </div>
                    <div className="item">
                      <p className="text-muted hire-dd-box-text wds wds-ico-40">
                        Java Product
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main className="faq_main">
          <section className="faq_section_new">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-12">
                  <div className="mid_section">
                    <div className="section-heading">
                      <p className="faq_title">
                        Frequently Asked <br /> Questions (FAQs)
                      </p>
                      <p className="faq_contents" />
                    </div>
                  </div>
                  <div className="job-cnt">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default" role="tablist">
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne1"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne1"
                              aria-expanded="false"
                              aria-controls="collapseOne1"
                            >
                              <p className="qus_title">
                                1. What is the metaverse and why is it gaining
                                popularity?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne1"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne1"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              The metaverse refers to a virtual universe where
                              people can interact with each other and digital
                              entities in real time. It is gaining popularity
                              due to its potential to revolutionize various
                              industries, including gaming, entertainment,
                              social networking, e-commerce, and more. The
                              metaverse offers immersive experiences, limitless
                              possibilities, and new avenues for communication
                              and collaboration.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default" role="tablist">
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne2"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne2"
                              aria-expanded="false"
                              aria-controls="collapseOne2"
                            >
                              <p className="qus_title">
                                2. What is Metaverse Development?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne2"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne2"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              Metaverse Development refers to the process of
                              creating virtual environments, often using 3D
                              technologies, that enable users to interact with
                              each other and digital objects in a shared,
                              immersive space. It involves the design, coding,
                              and integration of various elements to build these
                              digital realms, which may include virtual reality
                              (VR), augmented reality (AR), and mixed reality
                              (MR) experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default" role="tablist">
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne3"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne3"
                              aria-expanded="false"
                              aria-controls="collapseOne3"
                            >
                              <p className="qus_title">
                                3. How can I get started with metaverse
                                development for my project or business?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne3"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne3"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              To get started with metaverse development, you can
                              explore resources, online courses, and communities
                              related to 3D modeling, game development, AR/VR
                              technologies, and software development.
                              Additionally, you can engage with Osiz - a leading
                              metaverse development company. We provide guidance
                              and support for your specific metaverse project or
                              business needs.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default" role="tablist">
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne4"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne4"
                              aria-expanded="false"
                              aria-controls="collapseOne4"
                            >
                              <p className="qus_title">
                                4. What's the expected timeframe for creating a
                                metaverse?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne4"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne4"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              The timeframe for creating a metaverse can vary
                              significantly depending on the scope and
                              complexity of the project. A simple metaverse
                              project might take a few months, while more
                              ambitious, large-scale metaverse initiatives could
                              take several months to develop fully.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default" role="tablist">
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne5"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne5"
                              aria-expanded="false"
                              aria-controls="collapseOne5"
                            >
                              <p className="qus_title">
                                5. What benefits can Metaverse development bring
                                to your business?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne5"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne5"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              Metaverse development can offer several
                              significant benefits to your business: Access to
                              Global Markets, Enhanced Customer Engagement,
                              Collaboration and Remote Work, Virtual Product
                              Testing, Brand Exposure, Training and Education,
                              Gaming &amp; Entertainment, Data Analytics,
                              Innovation and Competitive Advantage. These are
                              the highlighted advantages of using the metaverse
                              in business.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default" role="tablist">
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne6"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne6"
                              aria-expanded="false"
                              aria-controls="collapseOne6"
                            >
                              <p className="qus_title">
                                6. What are the top companies specializing in
                                metaverse development?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne6"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne6"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              There are several companies at the forefront of
                              metaverse development. Some of the top companies
                              include: Microsoft, Osiz Technologies, GamesdApp,
                              Queppelin and Aetsoft.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="panel panel-default"
                        role="tablist"
                        style={{ display: "none" }}
                      >
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne7"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne7"
                              aria-expanded="false"
                              aria-controls="collapseOne7"
                            >
                              <p className="qus_title">
                                7. What kind of metaverse software development
                                services does Osiz offer?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne7"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne7"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              Osiz offers a range of metaverse software
                              development services, including metaverse app
                              development, virtual reality development,
                              augmented reality development, blockchain
                              integration, artificial intelligence integration,
                              and more. We work with clients to create custom
                              solutions that meet their unique needs and
                              requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="panel panel-default"
                        role="tablist"
                        style={{ display: "none" }}
                      >
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne8"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne8"
                              aria-expanded="false"
                              aria-controls="collapseOne8"
                            >
                              <p className="qus_title">
                                8. How much does it cost to develop a metaverse?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne8"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne8"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              The cost of developing a metaverse can vary
                              significantly and depends on various factors,
                              including the scale, complexity, and specific
                              features of the metaverse. Small-scale projects
                              can begin with a budget of a few thousand dollars,
                              while the cost of large-scale, fully immersive
                              metaverse development can vary significantly based
                              on the project's specific requirements and scale.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="panel panel-default"
                        role="tablist"
                        style={{ display: "none" }}
                      >
                        <div
                          className="panel-heading"
                          role="tab"
                          aria-selected="true"
                          id="headingOne9"
                        >
                          <div className="panel-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne9"
                              aria-expanded="false"
                              aria-controls="collapseOne9"
                            >
                              <p className="qus_title">
                                9. How can businesses get started with metaverse
                                development for their specific needs?
                              </p>
                            </a>
                          </div>
                        </div>
                        <div
                          id="collapseOne9"
                          className="panel-collapse collapse"
                          aria-labelledby="headingOne9"
                          data-parent="#accordion"
                        >
                          <div className="panel-body job-cnt-hd">
                            <p>
                              <strong> </strong>
                            </p>
                            <p>
                              Define clear objectives and goals for metaverse
                              development.
                            </p>
                            <p>
                              Research and choose a development team or partner
                              with expertise in metaverse technologies.
                            </p>
                            <p>
                              Create a detailed project plan that aligns with
                              your business needs.
                            </p>
                            <p>
                              Consider pilot projects or smaller initiatives to
                              test the waters.
                            </p>
                            <p>
                              Continuously gather feedback from users and
                              iterate on the development to improve the user
                              experience and meet business goals.
                            </p>
                            <p> </p>
                            <p>
                              Our Metaverse expert will guide you throughout the
                              ideation and project development cycle.
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="faq_load_btn_sec">
                        <a
                          href="#"
                          id="loadMore"
                          className="nav-link btn btn_skype faq_load_btn"
                          style={{ display: "block" }}
                        >
                          Load More
                        </a>
                        <a
                          href="#"
                          id="loadless"
                          className="nav-link btn btn_skype faq_load_btn"
                          style={{ display: "none" }}
                        >
                          Load Less{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default WbsiteDevelopment;
