import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const AdminLayout = props => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Admin Panel
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
          <div className='test ml-[250px] p-2'>
            <div className="">
                  <section className="content-header">
                      <div className="container-fluid">
                          <div className="row mb-2">
                              <div className="col-sm-6">
                                  <h1>Kategorijos</h1>
                              </div>
                              <div className="col-sm-6">
                                  <ol className="breadcrumb float-sm-right">
                                      <li className="breadcrumb-item">
                                          <a href="#">Home</a>
                                      </li>
                                      <li className="breadcrumb-item active">
                                          Projects
                                      </li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </section>
                {props.children}
              </div>
            </div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/dashboard" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Vaidotas Valancius</a>
        </div>
      </div>

      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview" style={{display:'block'}}>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon !text-[10px]"></i>
                  <p>All Pages</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon !text-[10px]"></i>
                  <p>Add New</p>
                </a>
              </li>
              <li className="nav-item">
                <Link href="../categories" className="nav-link">
                  <i className="far fa-circle nav-icon !text-[10px]"></i>
                  <p>Categories</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
     
  
        </AppLayout>
    )
}

export default AdminLayout
