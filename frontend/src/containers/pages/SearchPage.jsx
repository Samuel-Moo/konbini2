
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import SearchResult from "components/SearchResult/SearchResult"
import Layout from "containers/hocs/layouts/layout"




function SearchPage(){
    return(
        <Layout>
           
            <Navbar>
            <SearchResult/>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default SearchPage