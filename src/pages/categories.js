import { useRouter } from 'next/router'
import AdminLayout from '@/Layouts/AdminLayout'
import Link from 'next/link'
 
export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`)
    const data = await res.json()
  
    return { props: { data } }
  }


const Categories = ({data}) => {

    return (
        <AdminLayout>
      

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Kategorijų sąrašas</h3>
                            <div className="card-tools">
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
                                                <label htmlFor="19c90c1305d92" className="custom-control-label"/>
                                            </div>
                                        </th>
                                        <th style={{width: "20%"}}>Pavadinimas</th>
                                        <th></th>
                                        <th></th>
                                        <th
                                            style={{width: "8%"}}
                                            className="text-center">
                                            
                                        </th>
                                        <th style={{width: "20%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item=>(
                                        <tr key={item.id}>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input id="19c90c1305d9223" className="custom-control-input" type="checkbox"/>
                                                <label htmlFor="19c90c1305d9223" className="custom-control-label"/>
                                            </div>
                                        </td>
                                        <td>
                                            <a>{item.name}</a>
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td className="project_progress">
                                            
                                        </td>
                                        <td>
                                           
                                        </td>
                                        <td className="project-actions text-right">
                                            <Link
                                                className="btn btn-info btn-sm mr-2"
                                                href={`/category/${item.id}`}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </Link>
                                            <a
                                                className="btn btn-danger btn-sm"
                                                href="#">
                                                <i className="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    ))}
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
        </AdminLayout>
    )
}

export default Categories
