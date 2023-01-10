import { useRouter } from 'next/router'
import AdminLayout from '@/Layouts/AdminLayout'
 

const Categories = () => {
     
    return (
        <AdminLayout>
            <div className="">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div class="col-sm-6">
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

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Kategorijų sąrašas</h3>
                            <div class="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                    title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{width: "1%", textAlign:'center'}}>
                                            <div className="custom-control custom-checkbox">
                                                <input id="19c90c1305d92" className="custom-control-input" type="checkbox"/>
                                                <label for="19c90c1305d92" className="custom-control-label"/>
                                            </div>
                                        </th>
                                        <th style={{width: "20%"}}>Pavadinimas</th>
                                        <th style={{width: "30%"}}>Team Members</th>
                                        <th>Project Progress</th>
                                        <th
                                            style={{width: "8%"}}
                                            className="text-center">
                                            Status
                                        </th>
                                        <th style={{width: "20%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input id="19c90c1305d921" className="custom-control-input" type="checkbox"/>
                                                <label for="19c90c1305d921" className="custom-control-label"/>
                                            </div>
                                        </td>
                                        <td>
                                            AdminLTE v3
                                        </td>
                                        <td>
                                           
                                        </td>
                                        <td className="project_progress">
                                            
                                        </td>
                                        <td className="project-state">
                                           
                                        </td>
                                        <td className="project-actions text-right">
                                            <a className="btn btn-info btn-sm mr-2" href="#">
                                                <i className="fas fa-pencil-alt"></i>
                                                Edit
                                            </a>
                                            <a
                                                className="btn btn-danger btn-sm"
                                                href="#">
                                                <i className="fas fa-trash"></i>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input id="19c90c1305d9223" className="custom-control-input" type="checkbox"/>
                                                <label for="19c90c1305d9223" className="custom-control-label"/>
                                            </div>
                                        </td>
                                        <td>
                                            <a>AdminLTE v3</a>
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td className="project_progress">
                                            
                                        </td>
                                        <td>
                                           
                                        </td>
                                        <td className="project-actions text-right">
                                            <a
                                                className="btn btn-info btn-sm mr-2"
                                                href="#">
                                                <i className="fas fa-pencil-alt"></i>
                                                Edit
                                            </a>
                                            <a
                                                className="btn btn-danger btn-sm"
                                                href="#">
                                                <i className="fas fa-trash"></i>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    )
}

export default Categories
