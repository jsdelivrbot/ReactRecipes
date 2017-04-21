import React, {Component} from 'react';
import {Link} from 'react-router';
import {Navigation} from './navigation';

class Homepage extends Component {

	render() {
    return (
      <div>
				<div className="table-responsive table-bordered" id="categories">
				  <table className="table">
						<tbody>
				    <tr className="table-warning">
							<td><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
							<Link to="/starters" className="btn btn-success">Show</Link>
							</td>
							<td><img src="./src/components/img/starters.png" /></td>
						</tr>
						<tr className="table-active">
							<td><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
							<Link to="/cakes" className="btn btn-success table-info">Show</Link>
							</td>
							<td><img src="./src/components/img/cakes.png" /></td>
						</tr>
						<tr className="table-warning">
							<td><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
							<Link to="/main-course" className="btn btn-success">Show</Link>
							</td>
							<td><img src="./src/components/img/maincourse.png" /></td>
						</tr>
						<tr className="table-active">
							<td><p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
							<Link to="/secondcourse" className="btn btn-success">Show</Link>
							</td>
							<td><img src="./src/components/img/secondcourse.png" /></td>
						</tr>
						</tbody>
				  </table>
				</div>
      </div>
    );
  }
}

export default Homepage;
