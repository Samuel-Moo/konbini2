
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import SearchResultManga from "components/SearchResult/SearchResultManga"



function SearchManga(){
    return(
        <Layout>
           
            <Navbar>
            <SearchResultManga/>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default SearchManga