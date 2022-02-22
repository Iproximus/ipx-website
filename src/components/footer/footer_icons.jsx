import { GrFacebook,GrInstagram,GrYoutube,GrTwitter,GrLinkedin } from "react-icons/gr";

const FooterIcon = () =>{
    return(
        <div className="icon-style">
                <table cellPadding={8} cellSpacing={30}><tr>
                
                <td className="bordered"><hr></hr></td>
                <td ><GrFacebook size={28}/></td>
                <td ><GrInstagram size={28}/></td>
                <td ><GrYoutube size={28}/></td>
                <td ><GrTwitter size={28}/></td>
                <td ><GrLinkedin size={28}/></td>
                <td className="bordered"><hr></hr></td>
                </tr>
                </table>
                
            </div>
    )
}
export default FooterIcon