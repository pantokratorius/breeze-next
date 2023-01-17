import { useRouter } from 'next/router'
import AdminLayout from '@/Layouts/AdminLayout'
 


const Category = ({id}) => { 

    return (
        <AdminLayout>
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

                <section className="content">
                    <div className="card">
             
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Kategorijos pavadinimas</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Pavadinimas"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
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

export default Category
