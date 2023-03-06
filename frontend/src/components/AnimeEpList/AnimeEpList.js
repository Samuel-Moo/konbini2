import { connect } from "react-redux"
import drpiedrota from "assets/images/drpiedrota.jpg"
function AnimeEpList(){
    return(

<div class="grid grid-rows-2 grid-col-5">
        <div className="row-start-1 row-end-1 px-2 py-2">
                    
            <figure><img src={drpiedrota} alt="anime" className=" rounded-lg box-content h-80 w-64 border-4"/></figure>
                        
                    
        </div>
        <div class="col-start-2 col-end-6 row-start-1 row-end-1 bg-secondary">
            <h1 className="text-3xl font-bold">Insert title</h1>
                    
            <h2 className="text-2xl italic underline">Sinapsis</h2>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
        </div>
        <div className="overflow-y-auto col-start-2 col-end-5 row-end-3 h-80 w-120">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="fixed">Episodes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <a href="/AVideo" className="hover:text-warning">
                                <th>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                </th>
                                <td>Episode 1</td>
                                <td>Anime</td>
                                <td></td>
                                </a>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
                )
            }
                const mapStateToProps=state=>({

                })
                export default connect(mapStateToProps,{
                
                }) (AnimeEpList)